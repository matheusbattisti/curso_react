import React from "react";

const Challenge = () => {
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => console.log(a + b)}>Some A e B</button>
    </div>
  );
};
export default Challenge;
