import React, { Fragment } from "react";

const ShowCharacter = ({ name }) => {
  return (
    <Fragment>
      <strong className="character-text text-upper-case d-flex justify-content-center mt-4">
        {name}
      </strong>
      <p className="character-text d-flex justify-content-center mt-4 text-center">
        Verdad que sí 😏🙃🧐
      </p>
    </Fragment>
  );
};

export default ShowCharacter;
