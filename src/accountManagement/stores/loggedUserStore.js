import {defineStore} from "pinia";
import {isNull} from "eslint-plugin-vue/lib/utils/ts-utils/typescript";

export const useLoggedUserStore = defineStore("loggedUser", {
    state: () => {
        return {
            token: null
        }
    },
    getters: {
        isUserLoggedIn() {
            return !isNull(this.token);
        }
    }
})