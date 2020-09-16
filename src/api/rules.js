import axios from "axios";

const updateRuleDataApi = `http://shark-api-v2.herokuapp.com/api/zone/activity-rule-map?zone_id=`;

export const updateRuleData = async (data, zone_id) => {
  try {
    let response = await axios.get(updateRuleDataApi + zone_id, data);
    return response;
  } catch (error) {
    return error;
  }
};
