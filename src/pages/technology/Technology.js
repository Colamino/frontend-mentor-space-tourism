import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./tech.css";
import data from "../../data.json";
import launchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import spacePort from "../../assets/technology/image-spaceport-portrait.jpg";
import mobilelaunchVehicle from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import mobilespaceCapsule from "../../assets/technology/image-space-capsule-landscape.jpg";
import mobilespacePort from "../../assets/technology/image-spaceport-landscape.jpg";

function Technology() {
  const techData = data.technology;
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(getWindowSize());
  let photo;

  switch (index) {
    case 0:
      photo = width.innerWidth >= 1100 ? launchVehicle : mobilelaunchVehicle;
      break;
    case 1:
      photo = width.innerWidth >= 1100 ? spacePort : mobilespacePort;
      break;
    case 2:
      photo = width.innerWidth >= 1100 ? spaceCapsule : mobilespaceCapsule;
      break;

    default:
      break;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWindowSize().innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <div className="tech">
      <Navbar />
      <div className="heading-text">
        <span>03</span> <p className="header">space launch 101</p>
      </div>
      <div className="tech-wrapper">
        <div className="tech-left">
          <div className="cat-tech">
            <div className="change-cat">
              <button
                className="tech-btn"
                onClick={() => setIndex(0)}
                style={{
                  backgroundColor: index === 0 && "white",
                  color: index === 0 && "black",
                }}
              >
                1
              </button>
              <button
                className="tech-btn"
                onClick={() => setIndex(1)}
                style={{
                  backgroundColor: index === 1 && "white",
                  color: index === 1 && "black",
                }}
              >
                2
              </button>
              <button
                className="tech-btn"
                onClick={() => setIndex(2)}
                style={{
                  backgroundColor: index === 2 && "white",
                  color: index === 2 && "black",
                }}
              >
                3
              </button>
            </div>
            <div className="tech-desc">
              <p className="tech-desc_header">THE TERMINOLOGY…</p>
              <p className="title">{techData[index].name}</p>
              <p className="tech-desc_desc">{techData[index].description}</p>
            </div>
          </div>
        </div>
        <div className="tech-right">
          <div className="tech-photo">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
