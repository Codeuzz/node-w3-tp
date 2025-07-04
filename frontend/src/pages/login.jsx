import LoginForm from "./components/login-form";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const login = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
      {isLoggedIn ? <h3>Log out</h3> : <h3>Log in</h3>}
      <LoginForm />
    </div>
  );
};

export default login;
