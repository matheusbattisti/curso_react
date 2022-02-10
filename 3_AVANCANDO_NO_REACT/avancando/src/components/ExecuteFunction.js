import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique em mim</button>
    </div>
  );
};

export default ExecuteFunction;
