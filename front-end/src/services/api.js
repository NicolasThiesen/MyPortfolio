import axios from "axios";

const api = axios.create({
    baseURL: "https://d1fup0lav8wsd6.cloudfront.net/data"
})

export default api