import {defineStore} from "pinia";

import http from "@/shared/service/http-common";


/*export const userAuth = defineStore("auth",()=>{

    const  token = null;
    const user= null;
    const userType= null;

    async function login(user) {
        try {
            const {data} = await http.post('/users/login', user);
            this.token = data.token;
            const base64Url = data.token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(atob(base64));
            const userData={
                id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
                email: decodedToken.email,
                unique_name: decodedToken.unique_name,
                nbf: decodedToken.nbf,
                exp: decodedToken.exp,
                iat: decodedToken.iat
            };
            console.log(userData);
            //localStorage.setItem("user", JSON.stringify(userData));
            // Asegúrate de que estás almacenando una cadena JSON válida en localStorage

            this.user = JSON.stringify(userData);
            // De nuevo, asegúrate de que estás asignando una cadena JSON válida a user.value

            http.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            console.log(this.user);
            this.userType=data.userType;
            console.log(this.userType)
            console.log(this.token)

        } catch (error) {
            console.log(error?.response?.data);
        }
    }
    function isUserLoggedIn() {
        return this.token != null;
    }
    function clear(){
        /*localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userType');
        this.token=null;
        this.user=null;
        this.userType=null;
    }
    return{
        login,clear,token,userType,isUserLoggedIn,user
    }
})*/
export const userAuth = defineStore("auth", {
    state: () => ({
        token: null,
        user: null,
        userType: null
    }),
    getters: {
        isUserLoggedIn() {
            return this.token != null;
        }
    },
    persist: true,
    actions: {
        async login(user) {
            try {
                const {data} = await http.post('/users/login', user);
                this.token = data.token;
                const base64Url = data.token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                const decodedToken = JSON.parse(atob(base64));
                const userData={
                    id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
                    email: decodedToken.email,
                    unique_name: decodedToken.unique_name,
                    nbf: decodedToken.nbf,
                    exp: decodedToken.exp,
                    iat: decodedToken.iat
                };
                console.log(userData);
                //localStorage.setItem("user", JSON.stringify(userData));
                // Asegúrate de que estás almacenando una cadena JSON válida en localStorage

                this.user = JSON.stringify(userData);
                // De nuevo, asegúrate de que estás asignando una cadena JSON válida a user.value

                http.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                console.log(this.user);
                this.userType=data.userType;
                console.log(this.userType)
                console.log(this.token)

            } catch (error) {
                console.log(error?.response?.data);
            }
        },
        clear() {
            this.token=null;
            this.user=null;
            this.userType=null;
        }
    }
});