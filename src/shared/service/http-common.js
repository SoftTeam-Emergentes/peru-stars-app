import axios from 'axios';
import {useAuthStore} from "@/accounts/stores/auth";
//API runs in port 3000, consider this for all services.js

const http = axios.create({
    //baseURL: 'https://perustarsdddapi.azurewebsites.net/api/v1',
    baseURL: 'https://localhost:44366/api/v1',

});
http.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    const token = authStore.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default http;