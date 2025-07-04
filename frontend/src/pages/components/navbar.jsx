import React from "react";
import { CContainer, CLink, CNavbar, CNavbarBrand } from "@coreui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <CNavbar color="primary" expand="lg">
      <CContainer className="d-flex justify-content-between ">
        <Link className="text-white" to="/">
          Artisan App
        </Link>
        <div className="d-flex gap-4">
          {isLoggedIn ? (
            <Link className="text-white" to="/auth">
              Logout
            </Link>
          ) : (
            <Link className="text-white" to="/auth">
              Login
            </Link>
          )}
          <Link className="text-white" to="/materials">
            Materials
          </Link>
          <Link className="text-white" to="/realisations">
            Realisations
          </Link>
        </div>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
