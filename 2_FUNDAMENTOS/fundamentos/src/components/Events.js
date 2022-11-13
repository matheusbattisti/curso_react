const Events = () => {
  const handleMyEvents = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>X É VERDADEIRO</h1>;
    } else {
      return <h1>X É FALSO</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvents}>Clique Aqui!</button>
      </div>
      <div>
        {/*Aplicações mais simples, podem ser feitas diretamente, como no EXEMPLO ABAIXO! */}
        <button onClick={() => console.log("Clique aqui TAMBÉM!!")}>
          Clique Aqui também
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
