import {defineStore} from "pinia";
import {AuthApiService} from "@/accounts/services/auth-api.service";

export const useAuthStore = defineStore({
    id: "authStore",
    state: () => {
        return {
            token : null,// ref(localStorage.getItem('token'));
            user : null ,//ref(localStorage.getItem('user'));
            userType : null//ref(localStorage.getItem('userType'));
        };
    },
    persist:true,

    getters: {
        isNotUserLoggedIn() {
            return this.token === null;
        }
    },

    actions: {
        async login(credential){
            try {
                let response = await AuthApiService.login(credential);
                console.log(response.token)
                this.token = response.token;
                this.userType=response.userType;
                this.setUser(response.token);
                console.log(this.token);
                console.log(this.userType);
            }
            catch (error) {
                console.log(error.message);
            }
        },
        setUser(tokenValue) {
            const base64Url = tokenValue.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(atob(base64));
            const userData = {
                id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
                email: decodedToken.email,
                unique_name: decodedToken.unique_name,
                nbf: decodedToken.nbf,
                exp: decodedToken.exp,
                iat: decodedToken.iat
            };
            this.user = JSON.stringify(userData);
        },
        clear() {
            this.token = null;
            this.user = null;
            this.userType = null;
        },

    },
});