import { useState } from "react";
import { useLogin } from "../../api/use-api";
import { CButton } from "@coreui/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
      alert("Logged in!");
    } catch (err) {
      console.error(err);
      alert("Failed to login");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-2 justify-content-center align-items-center mt-3 border border-primary rounded p-3 d-inline-block"
    >
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
      <CButton color="primary" disabled={loginMutation.isLoading} type="submit">
        Login
      </CButton>
    </form>
  );
};

export default LoginForm;
