import React from "react";
import logo from "../Assets/Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";
function Header() {
  return (
    <>
      <div className="header-wrapper">
        <Link to="/">
          <img src={logo} alt="Findool Logo" />
        </Link>
        <Link className="signup-button" to="/signup">
          Check
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className="signup-button" to="/signup">
            Sign Up
          </Link>
          <Link className="login-button" to="/Login">
            Login
          </Link>
        </div>
      </div>
      {/* for large screens */}
      <Navbar />
      {/* for small screens*/}
      <MobileNav />
    </>
  );
}

export default Header;
