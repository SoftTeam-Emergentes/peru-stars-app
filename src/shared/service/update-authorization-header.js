import http from "@/shared/service/http-common";
import {useAuthStore} from "@/accounts/stores/auth";

export function updateAuthorizationHeader() {
    const loggedUserStore = useAuthStore();
    http.defaults.headers.common['Authorization'] = `Bearer ${loggedUserStore.token}`;
}