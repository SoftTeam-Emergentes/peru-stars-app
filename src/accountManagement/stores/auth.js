import {defineStore} from "pinia";

import {ref} from "vue";


export const userAuth = defineStore("auth",()=>{

    const  token = ref(localStorage.getItem('token'));
    const user= ref(localStorage.getItem('user'));
    const userType= ref(localStorage.getItem('userType'));

    function setToken(tokenValue){
        localStorage.setItem('token', tokenValue );
        token.value=tokenValue;
    }
    function setUser(tokenValue){
        console.log(tokenValue);

        const base64Url = tokenValue.split('.')[1];
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
        localStorage.setItem("user", JSON.stringify(userData));
        // Asegúrate de que estás almacenando una cadena JSON válida en localStorage

        user.value = JSON.stringify(userData);
        // De nuevo, asegúrate de que estás asignando una cadena JSON válida a user.value

        console.log(user);
    }
    function setType(userType1){
        localStorage.setItem('userType', userType1 );
        userType.value=userType1;
        console.log(userType)
    }
    function clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userType');
        token.value='';
        user.value='';
        userType.value='';
    }
    return{
        setToken,setUser,setType,clear,token,userType
    }
})