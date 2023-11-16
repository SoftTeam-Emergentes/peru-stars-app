import {defineStore} from "pinia";
import {isNull} from "eslint-plugin-vue/lib/utils/ts-utils/typescript";

export const useRegisteredUserStore = defineStore("registeredUser", {
    state: () => {
        return {
            type: null
        }
    },
    persist: true,
    getters: {
        haveUserRegistered() {
            return !isNull(this.type);
        }
    }
})