import axios from 'axios';
import {useLoggedUserStore} from "@/accountManagement/stores/loggedUserStore";
//API runs in port 3000, consider this for all services.js
const loggedUserStore = useLoggedUserStore();
export default axios.create({
    //baseURL: 'https://perustarsdddapi.azurewebsites.net/api',
    baseURL: 'https://localhost:44366/api',
    headers: {
        common: {
            'Authorization': 'Bearer ' + loggedUserStore.token
        }
    }
})