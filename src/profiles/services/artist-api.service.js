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
    getByUserId(userId) {
        return http.get(`/artists?userId=${userId}`);
    }
    findByLastName(lastName) {
        return this.getAll()
            .then(response => response.data.filter(artist => artist.lastName === lastName));

    }
    getArtistByUserId(userId) {
        console.log(userId);

        return this.getAll()
            .then(response => {
                const artists = response.data.filter(artist => artist.userId === userId);
                if (artists!=null)
                    console.log("el user id no existe")
                console.log(artists);
                return artists;
            })
            .catch(error => {
                console.error("Error getting artists:", error);
                throw error; // Rechazar la promesa en caso de error
            });
    }

}