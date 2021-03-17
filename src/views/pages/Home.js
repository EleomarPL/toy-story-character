import React from "react";

import Gaming from "../img/gaming.svg";

import { Link } from "react-router-dom";
import "../styles/homeStyles.css";

const Home = () => {
  return (
    <div className="bg-light rounded-3 mb-3 container pb-4 animate__animated animate__backInLeft">
      <p className="subtitle-font">
        Hola, te presento el juego “Toy Story Character”, en el cual intentare
        adivinar en que personaje estás pensando de la serie de películas de Toy
        Story.
      </p>
      <div className="container-home d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-3 img-gaming">
          <img src={Gaming} className="" />
        </div>
        <div className="col-md-7 d-flex flex-column align-items-center">
          <p className="text-center subtitle-font description">
            A jugar se ha dicho, puedes comenzar navegando a la sección PLAY o
            presionando el siguiente botón:
          </p>
          <Link to="/play" className="style-button">
            PLAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
