import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../../asset/particlesConfig.json";
import boostrapLog from "../../asset/boostrap.png";
import './Home.css';

function Home() {
    return (
      <div className="container-home">
        <Particle params={particlesConfig} className="App-particles__container" />
        
        <h1 className="main-text">Bootstrap Workshop <span><img className="boostrapLog" src={boostrapLog} alt="" /></span></h1>
      </div>
    );
  }

  export default Home;