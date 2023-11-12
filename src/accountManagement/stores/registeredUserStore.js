import {defineStore} from "pinia";
import {isNull} from "eslint-plugin-vue/lib/utils/ts-utils/typescript";

export const useRegisteredUserStore = defineStore("registeredUser", {
    state: () => {
        return {
            type: null
        }
    },
    getters: {
        haveUserRegistered() {
            return !isNull(this.type)
        }
    }
})