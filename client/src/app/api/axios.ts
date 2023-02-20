import axios from 'axios';
const BASE_URL = 'https://paybuddie-backend.onrender.com';


export default axios.create({
    baseURL:BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

});


export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
    
});