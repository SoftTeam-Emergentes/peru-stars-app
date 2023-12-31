import http from '../../shared/service/http-common';

export class EventsApiService {
    constructor(token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    getAll() {
        return http.get('/art-events');
    }

    getById(id) {
        return http.get(`/art-events/${id}`);
    }

    create(data) {
        return http.post('/art-events/add', data);
    }

    update(id, data) {
        return http.put(`/art-events/${id}`, data);
    }

    delete(id) {
        return http.delete(`/art-events/${id}`);
    }

    findByName(name) {
        return http.get(`/art-events?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/art-events?title=${lastName}`);
    }
}