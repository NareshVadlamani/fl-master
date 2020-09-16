import axios from "axios";

const getAllCameraApi =
    "http://shark-api-v2.herokuapp.com/api/camera/fetch/all";

export const getAllCamera = async () => {
    try {
        let data = await axios.get(getAllCameraApi);
        return data;
    } catch (error) {
        return error;
    }
};
