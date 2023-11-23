<template>

  <div class="">
    <div class="mb-3 flex bg-black-alpha-10 justify-content-center align-items-center align-content-center">
      <pv-button icon="pi pi-plus" @click="showAddArtworkDialog = true" label="Add Artwork" severity="secondary"
                 class="ml-2 m-4"/>
      <pv-button icon="pi pi-plus" @click="showAddArtEventDialog = true" label="Add Art event" severity="secondary"
                 class="ml-2 m-4"/>
    </div>
    <pv-dialog v-model:visible="showAddArtworkDialog" header="Add artwork">
      <p>Here you can add your code to manage the adding of an artwork.</p>
      <card-add-artwork :addArtwork="addArtwork"/>
      <template #footer>
        <pv-button label="Cancel" @click="showAddArtworkDialog = false" class="p-button-text"/>
      </template>
    </pv-dialog>
    <pv-dialog v-model:visible="showAddArtEventDialog" header="Add art event">
      <p>Here you can add your code to manage the adding of a new art event.</p>
      <card-add-artevent :addArtEvent="addArtEvent"/>
      <template #footer>
        <pv-button label="Cancel" @click="showAddArtworkDialog = false" class="p-button-text"/>
      </template>
    </pv-dialog>
    <pv-galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images"
                 containerStyle="max-width: 550px" :circular="true" :fullScreen="true" :showItemNavigators="true"
                 :showThumbnails="false">
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" class="responsive-image "/>
      </template>
    </pv-galleria>
    <div class="card grid " style="margin: auto;">
      <div class="col-12 md:col-6 lg:col-4" v-for="(item, index) in images" :key="index">
        <div class="p-3 bg-blue-100 border-round-lg">
          <img :src="item.src" class="w-full border-round-lg " alt="Imagen" style="cursor: pointer"
               @click="imageClick(index)">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CardAddArtwork from "@/profiles/components/card-add-artwork-component.vue";
import {ArtworkApiService} from "@/artworks/services/artwork.api.service";
import {useAuthStore} from "@/accounts/stores/auth";
import CardAddArtevent from "@/profiles/components/card-add-artevent.component.vue";
import {EventsApiService} from "@/events/services/event-api.service";

export default {
  name: "artist-gallery",
  components: {CardAddArtevent, CardAddArtwork},
  data() {
    return {
      showAddArtworkDialog: false,
      showAddArtEventDialog: false,
      images: [
        {src: 'https://source.unsplash.com/collection/38682905/0', alt: 'Image 1'},
        {src: 'https://source.unsplash.com/collection/38682905/1', alt: 'Image 2'},
        {src: 'https://source.unsplash.com/collection/38682905/2', alt: 'Image 3'},
        {src: 'https://source.unsplash.com/collection/38682905/3', alt: 'Image 4'},
        {src: 'https://source.unsplash.com/collection/38682905/4', alt: 'Image 5'},
        {src: 'https://source.unsplash.com/collection/38682905/5', alt: 'Image 6'},
        {src: 'https://source.unsplash.com/collection/38682905/6', alt: 'Image 7'},
        {src: 'https://source.unsplash.com/collection/38682905/7', alt: 'Image 8'},
        {src: 'https://source.unsplash.com/collection/38682905/8', alt: 'Image 9'},
        // Agrega más imágenes según sea necesario
      ],
      activeIndex: 0,
      numVisible: 3,
      displayCustom: false,
      artworkService: undefined,
      artEventService: undefined
    };
  },
  created() {
    this.artworkService = new ArtworkApiService();
    this.artEventService = new EventsApiService();
  },
  methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    },
    addArtwork(artwork) {
      this.artworkService.create(useAuthStore().user.typeId, artwork);
    },
    addArtEvent(artEvent) {
      //let date = new Date(artEvent.startDateTime);
      artEvent.artistId = useAuthStore().user.typeId;
      artEvent.collected = false;
      artEvent.currentStatus = 0;
      //console.log(artEvent);
      this.artEventService.create(artEvent).then((response => {
        console.log(response.data);
        this.showAddArtEventDialog = false;
      }));
    },
    selectImage(image, event) {
      image.value = event.target.files[0];
      alert(image.value);
      return image;
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