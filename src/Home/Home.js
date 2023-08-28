import React from "react";
import Bannerhome from "../Common/Banners/Bannerhome";
import Welcome from "./Welcome";
import Howhelp from "./Howhelp";
import Workshome from "./Workshome";
import Stories from "./Stories";
import Clientshome from "./Clientshome";
import "./Home.css";


const Home = () => {

  document.title = "Home";


  return (
    <div className='home'>
        <Bannerhome />
        <Welcome />
        <Howhelp />
        <Workshome />
        <Stories />
        <Clientshome />

    </div>
  )
}

export default Home