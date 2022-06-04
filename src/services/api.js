import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.jsonbin.io/b/629a92e905f31f68b3b55e51/1'
});

export default api;