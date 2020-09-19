import axios from "axios";

const getZoneDataApi =
  "http://shark-api-v2.herokuapp.com/api/zone/create/zone-code";

export const getZoneData = async () => {
  try {
    let data = await axios.get(getZoneDataApi);
    return data;
  } catch (error) {
    return error;
  }
};
