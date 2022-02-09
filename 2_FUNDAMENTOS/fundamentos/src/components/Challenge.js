import React from "react";

const Challenge = () => {
  const a = 10;
  const b = 15;

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => console.log(a + b)}>Somar!</button>
    </div>
  );
};

export default Challenge;
