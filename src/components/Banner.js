import React, { useState, useEffect } from "react";
import B1 from "./banner/1.png";
//import B2 from "./banner/2.png";
//import B3 from "./banner/3.png";

const images = [B1];

const Banner= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw", height: "80vh", marginTop: "0vh", overflow: "hidden", display: 'flex', position: "relative" }}>

      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "relative",
      
         // position: "absolute",
          //transition: "opacity 1s ease-in-out"
        }}
      />
    </div>
  );
};

export default Banner;
