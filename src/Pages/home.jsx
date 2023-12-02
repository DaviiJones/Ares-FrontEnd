import React from "react";
import MissionSearch from "../Components/missionSearch";
import PhotoOfTheDay from "../Components/photoOfTheDay";
import "./Home.css"
const Home = () => {
  return (
      <>
      <div>
        <h1>STARGAZERS!</h1>
        <h3>Powered by NASA</h3>
        <PhotoOfTheDay />
        <MissionSearch />
      </div>
    </>
  );
};

export default Home;
