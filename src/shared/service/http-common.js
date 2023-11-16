import axios from 'axios';
import {userAuth} from "@/accountManagement/stores/auth";
//API runs in port 3000, consider this for all services.js
const loggedUserStore = userAuth();
const http = axios.create({
    baseURL: 'https://perustarsdddapi.azurewebsites.net/api/v1',
    //baseURL: 'http://localhost:5001/api/v1',

    headers: {
        common: {

            'Authorization': `Bearer ${loggedUserStore.token}`
        }
    }

})
export default http;