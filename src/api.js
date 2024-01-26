import axios from 'axios'

const api = axios.create({
    baseURL: 'https://catbook.azurewebsites.net',

});


export default api