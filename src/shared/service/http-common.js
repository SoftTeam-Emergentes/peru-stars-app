import axios from 'axios';
//API runs in port 3000, consider this for all services.js
export default axios.create({
    baseURL: 'https://perustarsdddapi.azurewebsites.net/api',
    headers: {
        common: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }
})