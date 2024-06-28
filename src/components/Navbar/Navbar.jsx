import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        MAIN
      </Link>
      <Link to="/about" data-testid="about-link">
        ABOUT
      </Link>
      <Link to="/users" data-testid="users-link">
        Users
      </Link>
      <Link to="users-test">USERS_TEST</Link>
    </div>
  );
};

export default Navbar;
