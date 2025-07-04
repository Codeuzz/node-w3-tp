import LoginForm from "./components/login-form";

const login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-3">
      <h3>Log in</h3>
      <LoginForm />
    </div>
  );
};

export default login;
