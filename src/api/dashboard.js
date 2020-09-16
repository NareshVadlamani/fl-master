import axios from "axios";

const getDashboardDataApi =
    "http://shark-api-v2.herokuapp.com/api/zone/fetch/all";

export const getDashboardData = async () => {
    try {
        let data = await axios.get(getDashboardDataApi);
        return data;
    } catch (error) {
        return error;
    }
};
