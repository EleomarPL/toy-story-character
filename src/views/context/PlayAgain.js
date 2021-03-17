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
