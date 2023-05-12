import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [state, setState] = useState(false);

  useEffect(() => {
    func();
  }, []);

  async function func() {
    const token = await localStorage.getItem("token");
    if (token) {
      setState(true);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-subtle ">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            INNOVATORY SCRAPYARD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/category/homeappliances">
                      home appliances
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/category/furniture">
                      furniture
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/category/electronics">
                      electronics
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/category/game">
                      game
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/category/others">
                      others
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Sell">
                  Sell
                </Link>
              </li>
              {state ? (
                <>
                 <li className="nav-item">
                <Link className="nav-link " to="/Profile">
                  Profile
                </Link>
              </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
