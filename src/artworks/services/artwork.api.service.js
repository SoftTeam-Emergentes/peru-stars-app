import http from '../../shared/service/http-common';

export class ArtworkApiService {
    /*constructor(token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }*/
    getAll() {
        return http.get('/artworks');
    }

    getById(id) {
        return http.get(`/artworks/${id}`);
    }

    create(artistId, data) {
        return http.post(`/artworks/artists/${artistId}`, data);
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