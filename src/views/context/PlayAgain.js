/*
  Creación del contexto para el boton jugar otra vez de la pagina Play
  Se intenta ademas alcanzar un estado global, para así manipular el estado a conveniencia
*/

import React, { useState } from "react";

const ContextPlayAgain = React.createContext({});

export function PlayAgainProvider({ children }) {
  const [isPlayAgain, setPlayAgain] = useState(false);
  return (
    <ContextPlayAgain.Provider value={{ isPlayAgain, setPlayAgain }}>
      {children}
    </ContextPlayAgain.Provider>
  );
}
export default ContextPlayAgain;
