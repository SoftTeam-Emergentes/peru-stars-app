

<template>

  <body>
  <div class="flex flex-row  " style=" width:calc( 100vw - 20px )">
    <div v-if="screenIsWide" >
      <side-bar-hobbyist ></side-bar-hobbyist>
    </div>
    <div class=" overflow-auto">
      <top-artist></top-artist>
      <top-art></top-art>
      <top-events></top-events>

    </div>

  </div>

  </body>


</template>

<script>
import SideBarHobbyist from "@/profiles/components/side-bar-hobbyist.component.vue";
import TopArtist from "@/profiles/components/top-artist.component.vue";
import TopArt from "@/profiles/components/top-artwork.component.vue";
import TopEvents from "@/profiles/components/top-events.component.vue";




export default {
  name: "HomeHobbyist",
  components: { TopEvents, TopArt, TopArtist, SideBarHobbyist},

  data(){
    return{
      screenIsWide: true,
    }

  },
  mounted() {
    // Escuchar el evento de cambio de tamaño de la pantalla
    window.addEventListener("resize", this.checkScreenWidth);

    // Llamar a la función para verificar el ancho de pantalla al cargar la página
    this.checkScreenWidth();
  },
  methods: {
    checkScreenWidth() {
      // Verificar el ancho de la pantalla y actualizar la variable
      this.screenIsWide = window.innerWidth >= 700;
    },
  },
  beforeUnmount() {
    // Asegúrate de eliminar el oyente del evento antes de destruir el componente
    window.removeEventListener("resize", this.checkScreenWidth);
  },

}
</script>

<style scoped>

</style>