import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import styles from "./Card.module.css";

const Card = ({ artista, cancion}) => {
  return (
    <div className={styles.card}>
      <ul className={styles.lista}>
        <li className={styles.valoresInput}>
          <h2>Card Música <FontAwesomeIcon icon={faMusic} /></h2>
          <p>Artista: {artista}</p>
          <p>Cancion: {cancion}</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;


