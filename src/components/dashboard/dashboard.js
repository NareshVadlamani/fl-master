import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./dashboard.css";

import Card from "./card/Card";
import Spinner from "../common/Spinner";
import { loadDashboardData } from "../../redux/actions/dashboardAction";

import BarMapZone from "../BarMapZone/BarMapZone";
import BarDefaultSMS from "../BarDefaultSMS/BarDefaultSMS";
import BarAddSearch from "../BarAddSearch/BarAddSearch";
import {
  DashboardSection,
  ZoneOptions,
  AddZoneWrapper,
  AddButton,
  MapImage,
  MainMapView,
} from "./styles";
import WipScheduler from "./scheduleWIP";
import {
  appFetchAllEquipments,
  appFetchZonesData,
  zoneScheduleWIP,
  zoneFecthWIPdetails,
} from "../../modals/app/thunk";
import SearchBar from "../common/searchBar";
import {
  appSelectFilteredZones,
  appSelectNotifications,
} from "../../modals/app/selectors";
import { appSetZonesFilter } from "../../modals/app/actions";
import { goToZoneSelectionPage } from "../../Utils/navigationUtils";
import Map from "../assets/Plant-map.jpg";
import { isEmpty } from "lodash";

export function Dashboard({
  fetchEquipment,
  fetchZones,
  setSearchFilter,
  zones,
  history,
  createWIP,
  getWipDetails,
}) {
  const [schedulingZone, setSechudulingZone] = useState({});
  const [equipments, setEquipments] = useState([]);
  const [isMapView, setIsMapView] = useState(false);

  const fetchREquiredData = async () => {
    fetchZones();
    const { data: equipments } = await fetchEquipment();
    setEquipments(equipments);
  };

  const searchFilter = (text) => {
    setSearchFilter(text);
  };

  useEffect(() => {
    fetchREquiredData();
  }, []);

  return (
    <DashboardSection>
      <BarMapZone setIsMapView={setIsMapView} isMapView={isMapView} />
      <BarDefaultSMS />
      {!isMapView ? (
        <ZoneOptions>
          <AddZoneWrapper onClick={() => goToZoneSelectionPage(history)}>
            <AddCircleOutlineIcon />
            <AddButton>Add Zone</AddButton>
          </AddZoneWrapper>
          <SearchBar changeAction={searchFilter} />
        </ZoneOptions>
      ) : null}
      {isMapView ? (
        <MainMapView>
          <MapImage src={Map} />
        </MainMapView>
      ) : zones && zones.length ? (
        <>
          <div className="cards flex">
            {zones.map((card) => {
              return (
                <Card
                  key={card.zone_id}
                  card={card}
                  severity={card.severity}
                  toggleWipScheduler={setSechudulingZone}
                />
              );
            })}
          </div>
          <WipScheduler
            schedulingZone={schedulingZone}
            toggleWipScheduler={setSechudulingZone}
            fetchEquipment={fetchEquipment}
            equipments={equipments}
            createWIP={createWIP}
            getWipDetails={getWipDetails}
          />
        </>
      ) : (
        <Spinner />
      )}
    </DashboardSection>
  );
}

const mapStateToProps = (state, ownProps) => ({
  zones: appSelectFilteredZones(state),
  notifications: appSelectNotifications(state),
  apiCallsInProgress: state.apiCallsInProgress,
});

const mapDispatchToProps = {
  fetchZones: appFetchZonesData,
  fetchEquipment: appFetchAllEquipments,
  setSearchFilter: appSetZonesFilter,
  createWIP: zoneScheduleWIP,
  getWipDetails: zoneFecthWIPdetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
