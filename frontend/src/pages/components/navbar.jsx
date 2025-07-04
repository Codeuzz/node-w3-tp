import React from "react";
import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CNavbar color="primary" expand="lg">
      <CContainer className="d-flex justify-content-between ">
        <Link className="text-white" to="/">
          Artisan App
        </Link>
        <div className="d-flex gap-4">
          <Link className="text-white" to="/login">
            Login
          </Link>
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
