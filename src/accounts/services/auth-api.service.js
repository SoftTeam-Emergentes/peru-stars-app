import http from '../../shared/service/http-common';

export class AuthApiService {

   static async login(user) {

        try {
            const response = await http.post('/users/login', user);
            return response.data

        } catch (error) {
            console.log(error?.response?.data);
        }
    }
     async register(userInfo) {
        try {
            const response = await http.post(`/users/register`, userInfo);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
     update(id,data) {
        return http.put(`/users/${id}`, data);

    }
}