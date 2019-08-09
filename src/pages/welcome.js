import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-intro">
        <p>
          Hjournal is an easy way to track your health symptoms, giving your
          doctor the most accurate data to help make you feel better.
        </p>
      </div>
      <div>
        <NavLink exact className="common-button" to="/home">
          Begin
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
