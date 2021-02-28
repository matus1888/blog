import axios from "axios";

export default axios.create({
    baseURL: 'http://www.binance.com/api/v3',
    responseType: "json"
})
export let recordsApi=axios.create({
    baseURL: 'http://localhost:8080/recordings',
    responseType:"json"
})
export let headersApi=axios.create({
    baseURL: 'http://localhost:8080/headers',
    responseType:"json"
})