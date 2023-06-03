import React, { useState } from "react";
import Form from "./components/form/Form";
import "./App.css";

function App() {
  const [valores, setValores] = useState([]);

  const handleSubmit = (valor) => {
    setValores([...valores, { id: autoId++, data: valor }]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <div className="ingresos">
        {valores.map((item) => {
          return (
            <div className="box" key={item.id}>
              <p>Artista: {item.data.artista}</p>
              <p>Cancion: {item.data.cancion}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
