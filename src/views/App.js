import React, { useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "animate.css";

import PlayPage from "./pages/PlayPage";
import Navbar from "./components/NavBar";
import Team from "./pages/Team";
import About from "./pages/About";
import Home from "./pages/Home";

import { PlayAgainProvider } from "./context/PlayAgain";

const App = () => {
  const [windowScrollY, updateWindowScroll] = useState(true);

  //cambio de color de encabezado de navegación
  useEffect(() => {
    let documentMain = document.getElementById("main-document");
    documentMain.addEventListener("scroll", () => {
      let y = documentMain.scrollTop;
      y >= 20 ? updateWindowScroll(false) : updateWindowScroll(true);
    });
    if (windowScrollY) {
      document.querySelector("nav").style.background = "transparent";
    } else {
      document.querySelector("nav").style.background = "#222222";
    }
  }, [windowScrollY]);

  return (
    <HashRouter>
      <div className="main-window overflow-auto" id="main-document">
        <Navbar />
        <main className="main-sections">
          {/* Rutas a cargar en base a la navegacion  */}
          <PlayAgainProvider>
            <Switch>
              <Route exact path="/">
                <Helmet>
                  <title>Toy Story Character</title>
                </Helmet>
                <Home />
              </Route>
              <Route path="/about">
                <Helmet>
                  <title>Toy Story Character | About</title>
                </Helmet>
                <About />
              </Route>
              <Route path="/team">
                <Helmet>
                  <title>Toy Story Character | Team</title>
                </Helmet>
                <Team />
              </Route>
              <Route path="/play">
                <Helmet>
                  <title>Toy Story Character | Play</title>
                </Helmet>
                <PlayPage />
              </Route>
            </Switch>
          </PlayAgainProvider>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
