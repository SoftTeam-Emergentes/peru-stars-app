import http from '../../shared/service/http-common';

export class AuthApiService {

   static async login(user) {

        try {
            const response = await http.post('/users/login', user);
            //this.auth.setToken(data.token);
            //this.auth.setUser(data.token);
            //this.auth.setType(data.userType);
            //console.log(this.auth.userType)
            return response.data

        } catch (error) {
            console.log(error?.response?.data);
        }
    }
    static async register(userInfo) {
        try {
            const response = await http.post(`/users/register`, userInfo);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}