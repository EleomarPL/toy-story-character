import React from "react";

import ContacMember from "./ContactMember";

const CardContact = ({ name, data }) => {
  return (
    <div className="card-team mx-2 mb-4 row">
      <div className="container-card">
        <div className="col-md-3 d-flex justify-content-center">
          <div className="avatar mt-2 mb-2">
            <p className="text-center">{name[0]}</p>
          </div>
        </div>
        <div className="col-md-9">
          <div className="name">
            <p className="text-center text-white">{name}</p>
          </div>
          <div className="d-flex justify-content-center icons">
            {Object.keys(data).map((key) => (
              <ContacMember key={key} name={key} href={data[key]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
