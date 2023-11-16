import http from "@/shared/service/http-common";
import {useLoggedUserStore} from "@/accountManagement/stores/loggedUserStore";

export function updateAuthorizationHeader() {
    const loggedUserStore = useLoggedUserStore();
    http.defaults.headers.common['Authorization'] = `Bearer ${loggedUserStore.token}`;
}