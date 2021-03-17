import React, { Fragment } from "react";

const ShowCharacter = ({ name }) => {
  return (
    <Fragment>
      <p className="character-text text-upper-case d-flex justify-content-center mt-4">
        {name}
      </p>
      <p className="character-text d-flex justify-content-center mt-4">
        Verdad que sí 😏🙃🧐
      </p>
    </Fragment>
  );
};

export default ShowCharacter;
