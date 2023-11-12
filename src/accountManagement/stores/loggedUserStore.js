import {defineStore} from "pinia";

export const useLoggedUserStore = defineStore("loggedUser", {
    state: () => {
        return {
            token: null
        }
    }
})