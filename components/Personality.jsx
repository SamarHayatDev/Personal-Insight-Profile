import React from "react";

const Personality = () => {
  return (
    <div className="card">
      <h3>Personality:</h3>
      <div className="flex flex-wrap gap-2">
        <button className="btn">Outgoing</button>
        <button className="btn">Analytical</button>
        <button className="btn">Friendly</button>
        <button className="btn">Empathetic</button>
      </div>
    </div>
  );
};

export default Personality;
