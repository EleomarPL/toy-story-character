import React from "react";

import woody from "../img/woodyRender.svg";
import ellipse from "../img/ellipse.svg";
import Question from "../components/Question";
import "../styles/playStyles.css";

const PlayPage = () => {
  return (
    <div className="play d-flex flex-wrap container col-md-12 animate__animated animate__backInLeft">
      <section className="section-question bg-light rounded-3 col-md-4">
        <Question />
      </section>
      <section className="section-woody d-flex flex-column">
        <img src={woody} className="img-woody" />
        <article className="d-flex background-shadow">
          <img src={ellipse} className="ellipse-woody1 mx-2" />
          <img src={ellipse} className="ellipse-woody2" />
        </article>
      </section>
    </div>
  );
};

export default PlayPage;
