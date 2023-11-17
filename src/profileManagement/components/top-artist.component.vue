

<template>
  <div >
    <div class="mx-6 my-4 text-2xl font-semibold mb-3">Artists</div>
    <pv-carousel :value="artists" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000"  >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3 shadow-5">
          <div class="mb-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" :alt="slotProps.data.brandname" class="w-6 shadow-2" />
          </div>
          <div>
            <h5 class="mb-1">{{ slotProps.data.firstname }}</h5>
            <h6 class="mt-0 mb-3">{{ slotProps.data.description }}</h6>
             <div class="mt-5 flex align-items-center justify-content-center gap-2">
              <pv-button icon="pi pi-search" rounded />
              <pv-button  icon="pi pi-star-fill" rounded severity="secondary" />
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>

  </div>


</template>

<script>
import {ArtistsApiService} from "@/profileManagement/services/artist-api.service";
import {userAuth} from "@/accountManagement/stores/auth";

export default {
  name: "top-artist",
  artistService:null,
  authService: null,
  data(){
    return{
      artists:{},
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
      this.authService = userAuth();
      this.artistService=  new ArtistsApiService(this.authService.token);
      this.artistService.getAll().then((response)=>{
        this.artists=response.data;
        console.log()
      })
    },

  }

}
</script>
<style scoped>

</style>