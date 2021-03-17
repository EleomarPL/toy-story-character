import React from "react";
import CardContact from "../components/CardContact";

import "../styles/teamStyles.css";

const Team = () => {
  return (
    <div className="bg-light rounded-3 mb-3 container pb-4 animate__animated animate__backInLeft">
      <p className="subtitle-font">¿Quiénes construyeron esta aplicación?</p>
      {/* Llamar al componente CardContac recibiendo solo 3 parámetros
        **** github
        **** facebook
        **** instagram
        Se pueden omitir pero no agregar mas, ya que seran ignorados
       */}
      <CardContact
        name="Eleomar Pedro Lorenzo"
        data={{
          github: "https://github.com/EleomarPL/",
          facebook: "https://www.facebook.com/eleomar.1999/",
          instagram: "https://www.instagram.com/eleomarpedrolorenzo/",
        }}
      />
      <CardContact
        name="Martin Monjaraz Almaraz"
        data={{
          github: "https://github.com/marnium",
        }}
      />
      <CardContact
        name="Heraclio Galvan Torres"
        data={{
          github: "https://github.com/gatoher66",
          facebook: "https://www.facebook.com/heraclio.galvantorres",
        }}
      />
      <CardContact
        name="Hector Hugo Gonzales Rodriges"
        data={{
          github: "https://github.com/Exelias",
          facebook: "https://www.facebook.com/adolfo.aguilar.75685/",
          instagram: "https://www.instagram.com/anthi_star14/",
        }}
      />
    </div>
  );
};

export default Team;
