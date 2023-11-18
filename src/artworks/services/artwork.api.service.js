import http from '../../shared/service/http-common';

export class ArtworkApiService {
    getAll() {
        return http.get('/artworks');
    }

    getById(id) {
        return http.get(`/artworks/${id}`);
    }

    create(data) {
        return http.post('/artworks', data);
    }

    update(id, data) {
        return http.put(`/artworks/${id}`, data);
    }

    delete(id) {
        return http.delete(`/artworks/${id}`);
    }

    findByName(name) {
        return http.get(`/artworks?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/artworks?title=${lastName}`);
    }
}