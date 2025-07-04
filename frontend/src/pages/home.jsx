import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      {isLoggedIn ? (
        <h1>Welcome Home! Admin</h1>
      ) : (
        <h2>Login to access the app</h2>
      )}
    </div>
  );
};

export default Home;
