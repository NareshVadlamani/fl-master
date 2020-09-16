import React from "react";
import { NavLink } from "react-router-dom";

import ImgLogo from "../../assets/JSW-logo.png";
import ImgMenu from "../../assets/menu.jpg";
import ImgUser from "../../assets/user-pic.jpg";
import ImgArrowDown from "../../assets/arrow-down.jpg";

import "./Header.css";

function Header(props) {
  return (
    <header className={`header flex ${props.navOpen}`}>
      <div className="left flex">
        <button className="menu" onClick={props.onMenuClick}>
          <img className="lines" src={ImgMenu} alt="Menu Button" />
          <img className="arrow" src={ImgArrowDown} alt="Menu Button" />
        </button>
        <NavLink to="/dashboard" className="logo">
          <img src={ImgLogo} alt="JSW | Salem Works" />
        </NavLink>
      </div>
      <div className="right flex">
        <div className="notification flex" onClick={props.onNotificationsClick}>
          <div className="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
            </svg>
            {props.notificationCount > 0 && (
              <span className="count flex">{props.notificationCount}</span>
            )}
          </div>
        </div>
        <NavLink to="/login" className="user flex">
          <img className="pic" src={ImgUser} alt="John Doe" />
          <div className="user-name">John Doe</div>
          <img className="arrow" src={ImgArrowDown} alt="Arrow Down" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
