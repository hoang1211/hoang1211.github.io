import React from "react";
import fishing from "../img/fishing.jpg";

function ContentDisplay(strg) {
  if (strg == "homePage") {
    return (
      <p>
        <h1>Casting for Redfin</h1>
        <img src={fishing} />
      </p>
    );
  } else {
    return (
      <p>
        <h1>Casting for Redfin</h1>
        <img src={fishing} />
      </p>
    );
  }
}

export { ContentDisplay };
