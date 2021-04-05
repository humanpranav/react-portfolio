import React, { useState, useEffect } from "react";

const Useffect = () => {
  const initialSize = window.innerWidth * window.innerHeight;
  const [size, setSize] = useState(initialSize);

  const handleChange = () => {
    setSize(window.innerHeight * window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChange);

    return () => window.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      <h2>{size}</h2>
    </div>
  );
};

export default Useffect;
