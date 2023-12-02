import React, { useEffect, useState } from 'react';
import POTDDRAFT from "../assets/POTDDRAFT.webp"
import "./photoOfTheDay.css"

const API = import.meta.env.VITE_BASE_URL;

const PhotoOfTheDay = ({ altText }) => {
  const [photo, setPhoto] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/photos`);
        console.log(`${API}/`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseJSON = await response.json();
        setPhoto(responseJSON.data.payload);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <tr>
      <div className="imageCard">
        <h2>IMAGE OF THE DAY!</h2>
        <img src={photo ? photo : POTDDRAFT} alt={altText} />
      </div>
    </tr>
  );
};

export default PhotoOfTheDay;
