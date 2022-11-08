import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./crew.css";
import data from "../../data.json";
import { Link, useLocation } from "react-router-dom";
import commander from "../../assets/crew/image-douglas-hurley.png";
import missionSpecialist from "../../assets/crew/image-mark-shuttleworth.png";
import pilot from "../../assets/crew/image-victor-glover.png";
import flightEngineer from "../../assets/crew/image-anousheh-ansari.png";

function Crew() {
  const crewData = data.crew;
  const location = useLocation();
  const crewRole = location.pathname.split("/")[2];
  let i;
  let photo;

  switch (crewRole) {
    case "commander":
      i = 0;
      photo = commander;
      break;
    case "missionSpecialist":
      i = 1;
      photo = missionSpecialist;
      break;
    case "pilot":
      i = 2;
      photo = pilot;
      break;
    case "flightEngineer":
      i = 3;
      photo = flightEngineer;
      break;
    default:
      break;
  }

  return (
    <div className="crew">
      <Navbar />
      <div className="heading-text">
        <span>02</span> <p className="heading">meet your crew</p>
      </div>
      <div className="crew-wrapper">
        <div className="crew-left">
          <div className="crew-info">
            <p className="crew-role">{crewData[i]?.role}</p>
            <p className="crew-name">{crewData[i]?.name}</p>
            <p className="crew-bio">{crewData[i]?.bio}</p>
          </div>
          <div className="change-dot">
            <Link to={"/crew/commander"}>
              <li style={{ color: crewRole === "commander" && "white" }} />
            </Link>

            <Link to={"/crew/missionSpecialist"}>
              <li
                style={{ color: crewRole === "missionSpecialist" && "white" }}
              />
            </Link>

            <Link to={"/crew/pilot"}>
              <li style={{ color: crewRole === "pilot" && "white" }} />
            </Link>
            <Link to={"/crew/flightEngineer"}>
              <li style={{ color: crewRole === "flightEngineer" && "white" }} />
            </Link>
          </div>
        </div>
        <div className="crew-right">
          <div className="crew-photo">
            <img src={photo} alt={crewData[i]?.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
