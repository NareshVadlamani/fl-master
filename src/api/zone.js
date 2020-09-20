import axios from "axios";

const getZoneDataApi =
  "https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/createzonecode";

export const getZoneData = async () => {
  try {
    let data = await axios.get(getZoneDataApi);
    return data;
  } catch (error) {
    return error;
  }
};
