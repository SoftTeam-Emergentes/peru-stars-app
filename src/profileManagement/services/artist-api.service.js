import http from '../../shared/service/http-common';
import {useLoggedUserStore} from "@/accountManagement/stores/loggedUserStore";
const loggedUserStore = useLoggedUserStore();
export class ArtistsApiService {
    getAll() {
        return http.get('/artists', /*{
            headers: {
                'Authorization': `Bearer ${loggedUserStore.token}`
            }
        }*/);
    }

    getById(id) {
        return http.get(`/artists/${id}`);
    }

    create(data) {
        return http.post('/artists', data);
    }

    update(id, data) {
        return http.put(`/artists/${id}`, data);
    }

    delete(id) {
        return http.delete(`/artists/${id}`);
    }

    findByName(name) {
        return http.get(`/artists?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/artists?title=${lastName}`);
    }
}