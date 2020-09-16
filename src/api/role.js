import axios from "axios";

const getRoleDataApi = "http://shark-api-v2.herokuapp.com/api/role/fetch/all";

export const getRoledData = async () => {
    try {
        let data = await axios.get(getRoleDataApi);
        return data;
    } catch (error) {
        return error;
    }
};
