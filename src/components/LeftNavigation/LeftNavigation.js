import React from "react";
import { NavLink } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import ImgLink1 from "../../assets/link-1.jpg";
import ImgLink2 from "../../assets/link-2.jpg";
import ImgLink3 from "../../assets/link-3.jpg";
import ImgLink4 from "../../assets/link-4.jpg";
import ImgLink5 from "../../assets/link-5.jpg";

import "./LeftNavigation.css";

function LeftNavigation(props) {
  return (
    <nav className={`nav ${props.navOpen}`}>
      <ul>
        <li>
          <NavLink className="flex" to="/dashboard">
            <span className="icon flex">
              <img src={ImgLink1} alt="Link 1" />
            </span>
            <span className="text">Dashboard</span>
          </NavLink>
        </li>
        /* <li>
          <NavLink className="flex" to="/manage-work-force">
            <span className="icon flex" title="Work Force managen">
              <WorkIcon
                height={32}
                width={32}
                style={{ width: "32px", height: "32px" }}
              />
            </span>
            <span className="text">Work Force managent</span>
          </NavLink>
        </li> */
        <li>
          <NavLink className="flex" to="/manage-user">
            <span className="icon flex">
              <GroupIcon
                height={32}
                width={32}
                style={{ width: "32px", height: "32px" }}
              />
            </span>
            <span className="text">Platform User management</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/">
            <span className="icon flex">
              <img src={ImgLink2} alt="Link 2" />
            </span>
            <span className="text">Real Time</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/">
            <span className="icon flex">
              <img src={ImgLink3} alt="Link 3" />
            </span>
            <span className="text">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/">
            <span className="icon flex">
              <img src={ImgLink4} alt="Link 4" />
            </span>
            <span className="text">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/">
            <span className="icon flex">
              <img src={ImgLink5} alt="Link 5" />
            </span>
            <span className="text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LeftNavigation;
