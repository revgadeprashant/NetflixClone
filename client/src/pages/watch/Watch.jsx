import React from 'react'
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom"; 
import "./watch.scss";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
       <Link to='/' className="link">Home
       </Link> 
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}

export default Watch