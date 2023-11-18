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
                //console.log(response.token)
                this.token = response.token;
                this.userType=response.userType;
                this.setUser(response.token);
                //console.log(this.token);
               // console.log(this.userType);
            }
            catch (error) {
                console.log(error.message);
            }
        },
        setUser(tokenValue) {
            const base64Url = tokenValue.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(atob(base64));
            const names = decodedToken.unique_name.split(" ");
            const firstName = names[0];
            const lastName = names.slice(1).join(" ");
            this.user = {
                id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
                email: decodedToken.email,
                firstName:firstName,
                lastName:lastName,
                unique_name: decodedToken.unique_name,
                nbf: decodedToken.nbf,
                exp: decodedToken.exp,
                iat: decodedToken.iat
            };
        },
        clear() {
            this.token = null;
            this.user = null;
            this.userType = null;
        },

    },
});