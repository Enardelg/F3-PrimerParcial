import React, { useState } from "react";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  const [valores, setValores] = useState([]);

  const handleSubmit = (valor) => {
    setValores([...valores, { id: Date.now(), data: valor }]);
  };
  

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <div className="ingresos">
        {valores.map((item) => {
          return (
            <Card
              key={item.id}
              artista={item.data.artista}
              cancion={item.data.cancion}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
