import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [pathname, setPathname] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className="app_navbar section__padding">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="app_navbar-items">
        <ul>
          <li
            className="app_navbar-items_item"
            style={{ borderBottom: pathname === "/" && "3px solid #ffffff" }}
          >
            <Link to={"/"} className="link">
              <span className="nav-index">00</span> Home
            </Link>
          </li>
          <li
            className="app_navbar-items_item"
            style={{
              borderBottom:
                pathname.split("/")[1] === "destination" && "3px solid #ffffff",
            }}
          >
            <Link to={"/destination/moon"} className="link">
              <span className="nav-index">01</span> Destination
            </Link>
          </li>
          <li
            className="app_navbar-items_item"
            style={{
              borderBottom:
                pathname.split("/")[1] === "crew" && "3px solid #ffffff",
            }}
          >
            <Link to={"/crew/commander"} className="link">
              <span className="nav-index">02</span> Crew
            </Link>
          </li>
          <li
            className="app_navbar-items_item"
            style={{
              borderBottom: pathname === "/technology" && "3px solid #ffffff",
            }}
          >
            <Link to={"/technology"} className="link">
              <span className="nav-index">03</span> Technology
            </Link>
          </li>
          <div className="navbar-line" />
        </ul>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <img src={closeIcon} alt="" onClick={() => setToggleMenu(false)} />
        ) : (
          <img src={hamburger} alt="" onClick={() => setToggleMenu(true)} />
        )}
      </div>
      {toggleMenu && (
        <div className="mobile-menu scale-up-hor-right">
          <ul className="mobile-menu_list">
            <Link to={"/"} className="link">
              <li
                className="mobile-menu-list-item"
                style={{ borderRight: pathname === "/" && "3px solid #ffffff" }}
              >
                <span className="index">00</span> Home
              </li>
            </Link>
            <Link to={"/destination/moon"} className="link">
              <li
                className="mobile-menu-list-item"
                style={{
                  borderRight:
                    pathname.split("/")[1] === "destination" &&
                    "3px solid #ffffff",
                }}
              >
                <span className="index">01</span> Destination
              </li>
            </Link>
            <Link to={"/crew/commander"} className="link">
              <li
                className="mobile-menu-list-item"
                style={{
                  borderRight:
                    pathname.split("/")[1] === "crew" && "3px solid #ffffff",
                }}
              >
                <span className="index">02</span> Crew
              </li>
            </Link>
            <Link to={"/technology"} className="link">
              <li
                className="mobile-menu-list-item"
                style={{
                  borderRight:
                    pathname === "/technology" && "3px solid #ffffff",
                }}
              >
                <span className="index">03</span> Technology
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
