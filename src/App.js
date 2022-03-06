import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import NavBar from './components/navBar/NavBar';
// import Grid from './components/grid/Grid';
// import Home from './components/home/Home';
import CourseCardGroup from './components/card/CourseCardGroup';
// import WarriyoMp3 from './asset/Warriyo.mp3' 
function App() {
  return (
   <>
   {/* <NavBar/> */}
   <CourseCardGroup/>

    {/* <Home/> */}
   {/* <Grid/> */}
   {/* <embed src={WarriyoMp3} loop="true" autostart="true" width="2" height="0"></embed> */}
   </>
  );
}

export default App;
