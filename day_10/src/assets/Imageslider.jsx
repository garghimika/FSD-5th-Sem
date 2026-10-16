import React, { useState, useEffect } from 'react';

const Imageslider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="slider"
        style={{
          height: "300px",
          width: "500px",
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default Imageslider;