import axios from "axios";

export default axios.create({
    baseURL: 'http://www.binance.com/api/v3',
    responseType: "json"
})
