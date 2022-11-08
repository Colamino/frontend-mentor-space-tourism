import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div className="app_home">
      <Navbar />
      <div className="app_home-wrapper">
        <div className="app_home-left">
          <p className="app_home-left_first-line">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="app_home-left_heading">SPACE</h1>
          <p className="app_home-left_last-line">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="app_home-right">
          <button className="home-btn">
            <Link
              to={"/destination/moon"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Explore
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
