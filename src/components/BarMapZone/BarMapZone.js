import React from "react";

import "./BarMapZone.css";

function BarMapZone({ setIsMapView, isMapView }) {
  return (
    <ul className="bar-map-zone flex">
      <li onClick={() => setIsMapView(true)}>
        <a className={`${isMapView ? "active" : null} flex`}>Map</a>
      </li>
      <li onClick={() => setIsMapView(false)}>
        <a className={`${isMapView ? null : "active"} flex`}>Zone</a>
      </li>
    </ul>
  );
}

export default BarMapZone;
