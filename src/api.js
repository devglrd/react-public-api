import axios from "axios/index";

const api = {};

api.get = async (url) => {
    let res = await axios.get(url);
    return res;
}

export default api;