import http from '../../shared/service/http-common';
import {userAuth} from "@/accountManagement/stores/auth";

const auth=userAuth();
export class AuthApiService {
     async login(user ) {

        try {
            const  {data}=await http.post('/users/login', user);
            auth.setToken(data.token);
            auth.setUser(data.token);
            auth.setType(data.userType);
            console.log(auth.userType)

        }catch (error) {
            console.log(error?.response?.data);
        }
    }
    register(userInfo) {
        return http.post(`/users/register`, userInfo);
    }
    logout() {
         auth.clear();
        // Realiza cualquier lógica necesaria para cerrar la sesión, como eliminar el token JWT.
    }

}