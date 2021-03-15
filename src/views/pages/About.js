import React from "react";

import "../styles/aboutStyles.css";

import electron from "../img/electron.svg";
import react from "../img/react.svg";
import bootstrap from "../img/bootstrap.svg";

const About = () => {
  return (
    <div className="bg-light rounded-3 mb-3 container pb-4 animate__animated animate__backInLeft">
      <p className="subtitle-font">
        Esta aplicación fue creada bajo las siguientes principales tecnologías:
      </p>
      <div className="technologys d-flex justify-content-around flex-wrap">
        <div className="container-technology mb-3">
          <div className="technology">
            <p className="text-center">Electron</p>
          </div>
          <div className="information d-flex justify-content-center pb-4">
            <img src={electron} />
          </div>
          <div className="hover-img text-white text-center">
            Es un Framework de código abierto para construir aplicaciones de
            escritorio multiplataforma con JavaScript, HTML y CSS
          </div>
        </div>
        <div className="container-technology mb-3">
          <div className="technology">
            <p className="text-center">React</p>
          </div>
          <div className="information d-flex justify-content-center pb-4">
            <img src={react} />
          </div>
          <div className="hover-img text-white text-center">
            React es una biblioteca JavaScript de código abierto diseñada para
            crear interfaces de usuario con el objetivo de facilitar el
            desarrollo de aplicaciones en una sola página.
          </div>
        </div>
        <div className="container-technology mb-3">
          <div className="technology">
            <p className="text-center">Boostrap</p>
          </div>
          <div className="information d-flex justify-content-center pb-4">
            <img src={bootstrap} />
          </div>
          <div className="hover-img text-white text-center">
            Bootstrap es una biblioteca multiplataforma o conjunto de
            herramientas de código abierto para diseño de sitios y aplicaciones
            web
          </div>
        </div>
      </div>
      <p className="subtitle-font">
        Y también se ocuparon cierto número de dependencias del sistema de
        gestión de paquetes de NodeJS (NPM).
      </p>
    </div>
  );
};

export default About;
