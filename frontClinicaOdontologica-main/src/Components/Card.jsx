import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/logoOdonto.jpeg";
import { ContextGlobal } from "./utils/global.context";
import swal from 'sweetalert'

const Card = ({name, username, id}) => {
  const {theme} = useContext(ContextGlobal);
  const [buttonClicked, setButtonClicked] = useState(false);

  const dentist = {
    id,
    name,
    username
  };

  const addFav = () => {
    const dentists = JSON.parse(localStorage.getItem("dentistas") || '[]');

    const existingDentist = dentists.find((d) => d.id === dentist.id);
    if (existingDentist) {
      swal({
        title: "Lo sentimos...",
        text: `${dentist.name} ya se encuentra en tu lista de favoritos.`,
        icon: "error",
        button: "Aceptar",
      });
      return;
    }

    dentists.push(dentist);

    localStorage.setItem("dentistas", JSON.stringify(dentists));
    swal({
      title: "¡¡Excelente elección!!",
      text: `${dentist.name}, fue agregado a favoritos`,
      icon: "success",
      button: "Excelente",
    });
    console.log('Felicidades!',`Dentista con ID ${dentist.id} agregado exitosamente`);
    console.log(dentists);

    setButtonClicked(true);
  };

  return (
    <div className="card" style={{background: theme.cardBackground}}>
      <img src={img} alt="image_doctor"/>
      <h2><Link to={`/${id}`}>{name}</Link></h2>
      <h3>Usuario: {username}</h3>
      <button
        onClick={addFav}
        className={`favButton ${buttonClicked ? 'active' : ''}`}
        style={{
          background: buttonClicked ? 'radial-gradient(circle at top left, #aff576, #33f333c5)' : 'radial-gradient(circle at top left, #b7c9f184, #104497a7)'
        }}
      >
        🌟
      </button>
    </div>
  );
};

export default Card;
