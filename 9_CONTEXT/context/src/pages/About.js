import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>About</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default About;
