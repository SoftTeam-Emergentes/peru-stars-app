import http from '../../shared/service/http-common';

export class AuthApiService {
    login(credentials) {
        console.log()
        return http.post('/users/login', credentials);
    }
    register(userInfo) {
        return http.post(`/users/register`, userInfo);
    }
    logout() {
        // Realiza cualquier lógica necesaria para cerrar la sesión, como eliminar el token JWT.
    }

}