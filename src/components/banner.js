import React from "react";
import '../styles/Banner.css'

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} className="img_banner" alt="" />
      <div className="div_banner"></div>
        <span className="text-banner_">{text}</span>
      </div>
  );
};

export default Banner;

