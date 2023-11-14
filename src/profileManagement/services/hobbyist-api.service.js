import http from '../../shared/service/http-common';

export class hobbyistsApiService {
    getAll() {
        return http.get('/hobbyists');
    }

    getById(id) {
        return http.get(`/hobbyists/${id}`);
    }

    create(data) {
        return http.post('/hobbyists', data);
    }

    update(id, data) {
        return http.put(`/hobbyists/${id}`, data);
    }

    delete(id) {
        return http.delete(`/hobbyists/${id}`);
    }

    findByName(name) {
        return http.get(`/hobbyists?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/hobbyists?title=${lastName}`);
    }
}