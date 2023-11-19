

<template>
  <div >
    <div class="mb-3 flex bg-black-alpha-10 justify-content-center align-items-center align-content-center">
      <pv-button icon="pi pi-plus" @click="addArtwork()" label="Add Artwork" severity="secondary" class="ml-2 m-4" />
    </div>
    <pv-galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images"
                 containerStyle="max-width: 550px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" class="responsive-image "  />
      </template>
    </pv-galleria>
    <div class="card grid " style="margin: auto;">
      <div class="col-12 md:col-6 lg:col-4" v-for="(item, index) in images" :key="index">
        <div class="p-3 bg-blue-100 border-round-lg">
          <img :src="item.src" class="w-full border-round-lg " alt="Imagen" style="cursor: pointer" @click="imageClick(index)">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "artist-gallery",
  data() {
    return {
      images: [
        { src: 'https://source.unsplash.com/collection/38682905/0', alt: 'Image 1' },
        { src: 'https://source.unsplash.com/collection/38682905/1', alt: 'Image 2' },
        { src: 'https://source.unsplash.com/collection/38682905/2', alt: 'Image 3' },
        { src: 'https://source.unsplash.com/collection/38682905/3', alt: 'Image 4' },
        { src: 'https://source.unsplash.com/collection/38682905/4', alt: 'Image 5' },
        { src: 'https://source.unsplash.com/collection/38682905/5', alt: 'Image 6' },
        { src: 'https://source.unsplash.com/collection/38682905/6', alt: 'Image 7' },
        { src: 'https://source.unsplash.com/collection/38682905/7', alt: 'Image 8' },
        { src: 'https://source.unsplash.com/collection/38682905/8', alt: 'Image 9' },
        // Agrega más imágenes según sea necesario
      ],
      activeIndex: 0,
      numVisible: 3,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3
        },
        {
          breakpoint: '768px',
          numVisible: 2
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ],
      displayCustom: false
    };
  },

  methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    },
    addArtwork(){

    }
  }
}
</script>

<style scoped>
.responsive-image {
  width: 100%; /* O ajusta según sea necesario */
  height: auto;
}
</style>