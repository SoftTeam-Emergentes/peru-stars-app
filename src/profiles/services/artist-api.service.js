import http from '../../shared/service/http-common';

export class ArtistsApiService {
    constructor(token = null) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    getAll() {
        return http.get('/artists');
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