import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ImgDots from "../../../assets/dots.jpg";
import ImgHealth from "../../../assets/health.jpg";
import ImgNotification from "../../../assets/notification.jpg";
import ImgCamera from "../../../assets/camera.jpg";
import List from "./list";

import "./Card.css";
import { CustomWrapper, DropDownElement } from "./styles";

export default function Card({ card, toggleWipScheduler }) {
  const menu = (
    <Menu style={{ backgroundColor: "#0d111e", border: "none" }}>
      <Menu.Item key="0" style={{ backgroundColor: "#0d111e" }}>
        <DropDownElement onClick={() => toggleWipScheduler(card)}>
          Schedule WIP
        </DropDownElement>
      </Menu.Item>
      <Menu.Item key="2" style={{ backgroundColor: "#0d111e" }}>
        <DropDownElement onClick={() => toggleWipScheduler(card)}>
          View Schedule
        </DropDownElement>
      </Menu.Item>
      {/* <Menu.Item key="1" style={{ backgroundColor: "#0d111e" }}>
        <DropDownElement>Ad-hoc WIP</DropDownElement>
      </Menu.Item>
      <Menu.Item key="1" style={{ backgroundColor: "#0d111e" }}>
        <DropDownElement>Rules</DropDownElement>
      </Menu.Item> */}
      {/* <Menu.Item key="3" style={{ backgroundColor: "#0d111e" }}>
        <DropDownElement>Delete Zone</DropDownElement>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <div className={`card ${card.severity}`}>
      <Link to={"/preview-zone/" + card.zone_id}>
        <iframe
          title={card.default_camera_url}
          style={{ WebkitUserSelect: "none", width: "100%" }}
          width="100%"
          height="100%"
          // src={
          //   "http://ubuntu@ec2-54-237-12-172.compute-1.amazonaws.com:8091/video_feed"
          // }
          src={card.default_camera_url}
        ></iframe>
      </Link>

      <div className="info">
        <div className="top flex">
          <Link to={"/preview-zone/" + card.zone_id}>
            {card.name ? card.name : "SMS"}
          </Link>
          {/* <List /> */}
          <CustomWrapper>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <span className="options">
                <img src={ImgDots} alt="Menu" />
              </span>
            </Dropdown>
          </CustomWrapper>
        </div>
        <ul className="bottom flex">
          <li className="flex">
            <img src={ImgHealth} alt="Health" />
          </li>
          <li className="flex">
            <img src={ImgNotification} alt="Health" />
            <span className="count">
              {card.notification_count ? card.notification_count : 0}
            </span>
          </li>
          <li className="flex">
            <img src={ImgCamera} alt="Health" />
            <span className="count">
              {card.camera_count ? card.camera_count : 0}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
