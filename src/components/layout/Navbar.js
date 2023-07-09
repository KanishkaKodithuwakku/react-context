import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                  Logo
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/context"
                      >
                        Context
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Features
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link disabled">Disabled</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Router>
    </>
  )
}

export default Navbar;
