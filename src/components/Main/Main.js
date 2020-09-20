import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import moment from "moment";
import {
  appFetchNotifications,
  appFetchZonesData,
  appFetchDailyNotifications,
} from "../../modals/app/thunk";

import Header from "../Header/Header";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
// import  from "../Notifications/Notifications";
import Overlay from "../Overlay/Overlay";
import Dashboard from "../dashboard/dashboard";
import Layout from "../layout/layout";
import PreviewZone from "../preview-zone/preview-zone";
import Users from "../users/users";
import WorkerManager from "../workForce";
import UserManager from "../userManagement";
import SidePanel from "../common/panel";

import NotificationDescription from "../notification/notificationDescription/notificationDescription";
import { BodySection, MainSection, SubSections } from "./styles";
import { appSelectNotifications } from "../../modals/app/selectors";
import SidePanelNotifications from "../notification/sidePanelNotifications";
import NotificationBar from "../common/pushNotification";
import { appSetPushNotifications } from "../../modals/app/actions.js";

function Container({
  fetchNotifications,
  fetchDailyNotifications,
  fetchZones,
}) {
  const [navOpen, setNavOpen] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(null);
  const notifications = useSelector((state) => state.appData.notifications);
  const dalyNotifications = useSelector(
    (state) => state.appData.dalyNotifications
  );
  let interval = 0;

  useEffect(() => {
    fetchZones();
    interval = setInterval(() => {
      fetchNotifications();
    }, 5000);
  }, []);

  useEffect(() => {
    interval = setInterval(() => {
      fetchDailyNotifications();
    }, 900000);
  }, []);

  useEffect(() => {
    dalyNotifications &&
      dalyNotifications.map((not) => {
        const { location, message, generated_time } = not;
        toast(
          `${location} ${message} ${moment(generated_time).format(
            "DD/MM/YYYY, h:mm a"
          )}`
        );
      });
  }, [dalyNotifications]);

  return (
    <MainSection>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Header
        onMenuClick={() => setNavOpen(navOpen === "" ? "open" : "")}
        onNotificationsClick={() =>
          setNotificationsOpen(notificationsOpen === null ? "open" : null)
        }
        navOpen={navOpen}
        notificationCount={notifications.length}
      />
      <NotificationBar />
      <BodySection>
        <LeftNavigation navOpen={navOpen} />
        <SidePanel
          isPanelOpen={Boolean(notificationsOpen)}
          Heading={"Notifications"}
          closeAction={setNotificationsOpen}
        >
          <SidePanelNotifications notifications={notifications} />
        </SidePanel>
        <SubSections>
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} navOpen={navOpen} />}
          />
          <Route
            path="/add-zone"
            render={(props) => <Layout {...props} navOpen={navOpen} />}
          />
          <Route exact path="/users" component={Users} />
          <Route path="/preview-zone/:zone_id" component={PreviewZone} />

          <Route exact path="/manage-work-force" component={WorkerManager} />
          <Route exact path="/manage-user" component={UserManager} />
          <Route
            path="/NotificationDescription/:notification_id"
            component={NotificationDescription}
          />
          <Route
            exact
            path="/"
            render={(props) => <Redirect {...props} to="/dashboard" />}
          />
        </SubSections>
      </BodySection>
    </MainSection>
  );
}

const mapStateToProps = (state) => {
  return {
    notifications: state.appData,
  };
};

const mapDispatchToProps = {
  fetchNotifications: appFetchNotifications,
  fetchDailyNotifications: appFetchDailyNotifications,
  fetchZones: appFetchZonesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
