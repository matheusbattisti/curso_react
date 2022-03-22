import React from "react";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h3>About</h3>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  );
};

export default About;
