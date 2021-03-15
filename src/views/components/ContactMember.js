import React from "react";

import GitHub from "../img/github.svg";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";

const ContacMember = (props) => {
  let srcImage = undefined;

  switch (props.name) {
    case "github":
      srcImage = GitHub;
      break;
    case "facebook":
      srcImage = Facebook;
      break;
    case "instagram":
      srcImage = Instagram;
      break;
  }
  return (
    <a href={props.href} target="_blank">
      <img src={srcImage} className="img-contact" />
    </a>
  );
};

export default ContacMember;
