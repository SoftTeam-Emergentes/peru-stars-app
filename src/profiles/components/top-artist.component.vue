

<template>
  <div >
    <div class="mx-6 my-4 text-2xl font-semibold mb-3">Artists</div>
    <pv-carousel :value="artists" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000"  >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 shadow-5">
          <div class="">
            <img :src="getImage()" :alt="slotProps.data.brandname" class="border-round-lg shadow-2" style="height: 150px; width: auto; max-width: 100%;"/>
          </div>
          <div>
            <h5 class="mb-1">{{ slotProps.data.firstname }}</h5>
            <h6 class="mt-0 mb-3">{{ slotProps.data.description }}</h6>
             <div class="mt-5 flex align-items-center justify-content-center gap-2">
              <pv-button icon="pi pi-user-plus" rounded @click="followedArtist(slotProps.data.artistId,)"/>
              <pv-button  icon="pi pi-star-fill" rounded severity="secondary" />
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>

  </div>


</template>

<script>
import {ArtistsApiService} from "@/profiles/services/artist-api.service";
import {HobbyistsApiService} from "@/profiles/services/hobbyist-api.service";
import {FollowersApiService} from "@/profiles/services/follower-api.service";

export default {
  name: "top-artist",
  artistService:null,
  hobbyistService:null,
  followedService:null,
  data(){
    return{
      artists:{},
      follower:{
        artistId:null,
        hobbyistId:null,
      },
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },

  created() {
    this.getTopArtist()
  },

  methods:{
    getTopArtist() {
      this.artistService=  new ArtistsApiService();
      this.artistService.getAll().then((response)=>{
        this.artists=response.data;
        console.log()
      })
    },
    getImage(){
      return `https://source.unsplash.com/collection/38682905/${this.getRandomNumber(1,6)}`;
    },
    getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    },
    followedArtist(userId){
      this.follower.artistId=userId;
      this.follower.hobbyistId= 2; /*agregar el id del hobbist de pinia*/
      this.followedService=  new FollowersApiService();
      this.followedService.createFollower(this.follower).then((response)=>{
        console.log(response.data)
      })
    }

  }

}
</script>
<style scoped>

</style>