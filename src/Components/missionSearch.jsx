import React from "react";
import { Link } from "react-router-dom";

const missionSearch = () => {

    const rovers = [
        {
          name: 'Curiosity',
          image: 'PIC OF CURIOSITY',
          link: 'ROUTE',
        },
        {
          name: 'Opportunity',
          image: 'PIC OF OPPORTUNITY',
          link: 'ROUTE',
        },
        {
          name: 'Spirit',
          image: 'PIC OF SPIRIT',
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