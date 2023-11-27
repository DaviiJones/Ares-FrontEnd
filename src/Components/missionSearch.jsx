import React from "react";
import { Link } from "react-router-dom";
import Curiosity from "../assets/Curiosity.webp";
import Opportunity from "../assets/Opportunity.jpeg";
import Spirit from "../assets/Spirit.jpeg";
import "./missionSearch.css"


const missionSearch = () => {

    const rovers = [
        {
          name: 'Curiosity',
          image: Curiosity,
          link: 'ROUTE',
        },
        {
          name: 'Opportunity',
          image: Opportunity,
          link: 'ROUTE',
        },
        {
          name: 'Spirit',
          image: Spirit,
          link: 'ROUTE',
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

  export default missionSearch;