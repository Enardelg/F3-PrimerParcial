import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./Form.module.css";

const Form = () => {
  const [artista, setArtista] = useState("");
  const [cancion, setCancion] = useState("");
  const [error, setError] = useState("");



  const handleInputChangeArtista = (e) => {
    setArtista(e.target.value);
  };

  const handleInputChangeCancion = (e) => {
  setCancion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artista.trim().length < 3 || artista.trim().startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (cancion.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setShowCard(true);
  };



  return (
    <div className={styles.container}>
      <h2>Formulario de Música</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="artista">Artista:</label>
          <input
            type="text"
            id="artista"
            value={artista}
            onChange={handleInputChangeArtista}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cancion">Cancion:</label>
          <input
            type="text"
            id="cancion"
            value={cancion}
            onChange={handleInputChangeCancion}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}

      {!error && artista && cancion && <Card artista={artista} cancion={cancion}/>}

    </div>
  );
};

export default Form;
