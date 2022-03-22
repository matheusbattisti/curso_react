import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependencias
  // executa sempre ao renderizar componente
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <button onClick={changeSomething}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
