import http from '../../shared/service/http-common';

export class EventsApiService {
    getAll() {
        return http.get('/artEvents');
    }

    getById(id) {
        return http.get(`/artEvents/${id}`);
    }

    create(data) {
        return http.post('/artEvents', data);
    }

    update(id, data) {
        return http.put(`/artEvents/${id}`, data);
    }

    delete(id) {
        return http.delete(`/artEvents/${id}`);
    }

    findByName(name) {
        return http.get(`/artEvents?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/artEvents?title=${lastName}`);
    }
}