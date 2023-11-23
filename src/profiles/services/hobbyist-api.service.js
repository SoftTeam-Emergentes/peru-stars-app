import http from '../../shared/service/http-common';

export class HobbyistsApiService {
    getAll() {
        return http.get('/hobbyists');
    }

    getById(id) {
        return http.get(`/hobbyists/${id}`);
    }
    getByUserId(userId) {
        return this.getAll()
            .then(response => {
                const hobbyist = response.data.filter(artist => artist.userId === userId);
                if (hobbyist!=null)
                    console.log("el user id no existe")
                console.log(hobbyist);
                return hobbyist;
            })
            .catch(error => {
                console.error("Error getting artists:", error);
                throw error; // Rechazar la promesa en caso de error
            });
        //return http.get(`/hobbyists?userId=${userId}`);
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