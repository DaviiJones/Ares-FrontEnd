import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Missions.css"

const Missions = () => {
  const { roverName } = useParams();
  const [data, setData] = useState([]);
  const [earthDate, setEarthDate] = useState('');
  const [roverNames, setRoverNames] = useState([]);

  useEffect(() => {
    const fetchRoverNames = async () => {
      try {
        const result = await makeApiRequest('/rover/names');
        setRoverNames(result);
      } catch (error) {
        console.error('Error fetching rover names:', error);
      }
    };

    fetchRoverNames();
  }, []);

  return (
    <div>
      <h1>MISSIONS!</h1>
      <h2>Click Here to search past missions in SPACE!</h2>
      <div className="mission-details">
        <label>
          Select Rover:
          <select value={roverName} onChange={(e) => handleRoverChange(e.target.value)}>
              <option value="/missions/curiosity">Curiosity</option>
              <option value="/missions/opportunity">Opportunity</option>
              <option value="/missions/spirit">Spirit</option>
          </select>
        </label>
        <label>
          Search by Earth Date:
          <input
            type="date"
            value={earthDate}
            onChange={(e) => setEarthDate(e.target.value)}
          />
        </label>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Missions;
