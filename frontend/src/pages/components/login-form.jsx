import { useState } from "react";
import { useLogin } from "../../api/use-api";
import { CButton } from "@coreui/react";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import { useLogout } from "../../api/use-api";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
      alert("Logged in!");
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to login");
    }
  };

  const logoutMutation = useLogout();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setIsLoggedIn(false);
      alert("Logged out!");
    } catch (err) {
      console.error(err);
      alert("Failed to logout");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-2 justify-content-center align-items-center mt-3 border border-primary rounded p-3 d-inline-block"
    >
      {!isLoggedIn ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CButton
            color="primary"
            disabled={loginMutation.isLoading}
            type="submit"
          >
            Login
          </CButton>
        </>
      ) : (
        <CButton color="primary" onClick={handleLogout}>
          Logout
        </CButton>
      )}
    </form>
  );
};

export default LoginForm;
