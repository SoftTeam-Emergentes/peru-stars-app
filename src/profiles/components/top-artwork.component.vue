

<template>
  <div >
    <div class="mx-6 my-4 text-2xl font-semibold mb-3">Artwork</div>
    <pv-carousel :value="artists" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000"  >
      <template #item="slotProps">

          <pv-card class=" surface-border border-round-lg m-2 text-center shadow-5">
            <template #header>
              <img alt="artworkImage" :src="getImage()" style="max-height: 250px; width: 100%" />
            </template>
            <template #title>  {{ slotProps.data.artTitle }} </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
              <p align="justify" class="m-0 text-sm">
                {{ slotProps.data.artDescription }}
              </p>
            </template>
            <template #footer>
              <pv-button  class="border-round-lg" icon="pi pi-dollar" :label="getRandomNumber(100,500).toString()" text raised/>
              <pv-button class="border-round-lg" label="Ver Más" severity="secondary" style="margin-left: 0.5em" raised />
            </template>
          </pv-card>


      </template>
    </pv-carousel>

  </div>


</template>
<script>
import {ArtworkApiService} from "@/artworks/services/artwork.api.service";

export default {
  name: "top-artwork",
  artistService:null,
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
      this.artistService=  new ArtworkApiService();
      this.artistService.getAll().then((response)=>{
        this.artists=response.data;
        console.log()
      })
    },
    getImage(){
      return `https://picsum.photos/id/${this.getRandomNumber(1050,1060)}/3900/3120`;
    },
    getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
}
</script>


<style scoped>

</style>