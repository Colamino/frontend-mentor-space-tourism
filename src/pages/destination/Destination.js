import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./destination.css";
import data from "../../data.json";
import { useLocation, Link } from "react-router-dom";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";

function Destination() {
  const destinations = data.destinations; //get destination array
  const location = useLocation();
  const planet = location.pathname.split("/")[2];

  let i;
  let photo;

  switch (planet) {
    case "moon":
      i = 0;
      photo = moon;
      break;
    case "mars":
      i = 1;
      photo = mars;
      break;
    case "europa":
      i = 2;
      photo = europa;
      break;
    case "titan":
      i = 3;
      photo = titan;
      break;
    default:
      break;
  }

  return (
    <div className="destination">
      <Navbar />
      <div className="destination-wrapper">
        <div className="destination-left">
          <div className="heading-text">
            <span>01</span> <p>pick your destination</p>
          </div>
          <div className="destination-planetImg">
            <img src={photo} alt={destinations[i]?.name} />
          </div>
        </div>
        <div className="destination-right">
          <div className="planets">
            <ul>
              <li
                className="planet"
                style={{
                  borderBottom: planet === "moon" && "3px solid #ffffff",
                }}
              >
                <Link to={"/destination/moon"} className="planet-link ">
                  moon
                </Link>
              </li>
              <li
                className="planet"
                style={{
                  borderBottom: planet === "mars" && "3px solid #ffffff",
                }}
              >
                <Link to={"/destination/mars"} className="planet-link">
                  mars
                </Link>
              </li>
              <li
                className="planet"
                style={{
                  borderBottom: planet === "europa" && "3px solid #ffffff",
                }}
              >
                <Link to={"/destination/europa"} className="planet-link">
                  europa
                </Link>
              </li>
              <li
                className="planet"
                style={{
                  borderBottom: planet === "titan" && "3px solid #ffffff",
                }}
              >
                <Link to={"/destination/titan"} className="planet-link">
                  titan
                </Link>
              </li>
            </ul>
          </div>
          <div className="planet-name">
            <p>{destinations[i]?.name}</p>
          </div>
          <div className="planet-desc">
            <p>{destinations[i]?.description}</p>
          </div>
          <hr />
          <div className="distAndTime">
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <p className="km">{destinations[i]?.distance}</p>
            </div>
            <div className="time">
              <p>EST. TRAVEL TIME</p>
              <p className="times">{destinations[i]?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
