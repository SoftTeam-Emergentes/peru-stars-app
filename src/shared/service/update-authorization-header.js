import http from "@/shared/service/http-common";
import {userAuth} from "@/accountManagement/stores/auth";

export function updateAuthorizationHeader() {
    const loggedUserStore = userAuth();
    http.defaults.headers.common['Authorization'] = `Bearer ${loggedUserStore.token}`;
}