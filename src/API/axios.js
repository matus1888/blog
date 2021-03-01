import axios from "axios";

export default axios.create({
    baseURL: 'http://www.binance.com/api/v3',
    responseType: "json"
})
export let recordsApi=axios.create({
    baseURL: 'http://back.matus.mykeenetic.ru/recordings',
    responseType:"json"
})
export let headersApi=axios.create({
    baseURL: 'http://back.matus.mykeenetic.ru/headers',
    responseType:"json"
})