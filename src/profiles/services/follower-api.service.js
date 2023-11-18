import http from '../../shared/service/http-common';

export class FollowersApiService {
    getAllByArtistId(artistId) {
        return http.get(`/followers/artist/${artistId}`);
    }

    createFollower(data) {
        return http.post('/followers',data);
    }



}