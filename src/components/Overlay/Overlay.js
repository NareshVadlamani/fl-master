import React from "react";

import "./Overlay.css";

function Overlay(props) {
  return (
    <div
      className={`overlay ${props.notificationsOpen}`}
      onClick={props.onclick}
    ></div>
  );
}

export default Overlay;
