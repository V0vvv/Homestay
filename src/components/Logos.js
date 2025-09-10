// import React, { useState, useEffect } from 'react';

// // Import images
// import BMW from './logo/BMW.webp';
// import Mercedes from './logo/Mercedes-Logo.svg';
// import Audi from './logo/Audi.webp';
// import Bentley from './logo/Bentley.webp';
// import Porsche from './logo/porsche.webp';

// function LogoCarousel() {
//   const images = [BMW, Mercedes, Audi, Bentley, Porsche];

//   const imageSize = 200; // Size of each image in pixels
//   const displayCount = 5; // Number of images visible at a time

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically update the carousel index every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);

//   // Get the visible images based on the current index
//   const visibleImages = images
//     .slice(currentIndex, currentIndex + displayCount)
//     .concat(
//       images.slice(0, Math.max(0, currentIndex + displayCount - images.length))
//     );

//   // Render the component
//   return (
//     <div
//       style={{
//         display: 'flex',
//         overflow: 'hidden',
//         width: `${imageSize * displayCount}px`,
//         height: `${imageSize}px`,
//         border: '2px solid black',
//         borderRadius: '8px',
//         position: 'relative',
//       }}
//     >
//       {visibleImages.map((src, idx) => (
//         <img
//           key={idx}
//           src={src}
//           alt={`carousel-${idx}`}
//           style={{
//             width: `${imageSize}px`,
//             height: `${imageSize}px`,
//             flexShrink: 0,
//             objectFit: 'cover',
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default LogoCarousel;
