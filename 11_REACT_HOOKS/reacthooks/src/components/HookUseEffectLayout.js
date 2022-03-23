import { useLayoutEffect, useEffect, useState } from "react";

const HookUseEffectLayout = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo!");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useEffectLayout</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseEffectLayout;
