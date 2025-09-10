import React from "react";

const ImageBanner = () => {
  const styles = {
    banner: {
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      backgroundColor: "#333",
      padding: "10px 0",
      display: "flex",
      alignItems: "center",
    },
    scrollContainer: {
      display: "flex",
      animation: "scroll 10s linear infinite",
    },
    image: {
      width: "200px",
      height: "100px",
      margin: "0 10px",
    },
    "@keyframes scroll": {
      from: { transform: "translateX(100%)" },
      to: { transform: "translateX(-100%)" },
    },
  };

  return (
    <div style={styles.banner}>
      <div style={styles.scrollContainer}>
        <img src="image1.jpg" alt="Image 1" style={styles.image} />
        <img src="image2.jpg" alt="Image 2" style={styles.image} />
        <img src="image3.jpg" alt="Image 3" style={styles.image} />
        <img src="image4.jpg" alt="Image 4" style={styles.image} />
      </div>
    </div>
  );
};

export default ImageBanner;
