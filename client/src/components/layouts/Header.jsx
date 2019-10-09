import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { context } from "../../utils/Context";

const Header = () => {
  const { user, setUser } = useContext(context);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth-token");
    setUser("");
    window.location.pathname = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand ml-5 text-primary " to="/">
          Smart Reading
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                All Books
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <button className="nav-link btn" onClick={handleLogout}>
                  Log-out
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
