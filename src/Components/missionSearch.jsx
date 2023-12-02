import React from "react";
import { Link } from "react-router-dom";
import Curiosity from "../assets/Curiosity.webp";
import Opportunity from "../assets/Opportunity.jpeg";
import Spirit from "../assets/Spirit.jpeg";
import "./missionSearch.css";

const MissionSearch = () => {
  const rovers = [
    {
      name: 'Curiosity',
      image: Curiosity,
      link: '/missions/curiosity', // Replace with the actual route path
    },
    {
      name: 'Opportunity',
      image: Opportunity,
      link: '/missions/opportunity', // Replace with the actual route path
    },
    {
      name: 'Spirit',
      image: Spirit,
      link: '/missions/spirit', // Replace with the actual route path
    },
  ];

  return (
    <div className="marsRoverList">
      <h2>MISSIONS!</h2>
      {rovers.map((rover, index) => (
        <div key={index} className="rover-item">
          <img src={rover.image} alt={rover.name} />
          <h2>
            <Link to={rover.link}>{rover.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MissionSearch;
