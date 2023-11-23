<script>
import {ref} from "vue";

export default {
  name: "card-add-artwork",
  props: {
    addArtwork: Function,
    selectImage: Function
  },
  data() {
    return {
      artwork: {
        mainContent: {
        },
        coverImage: {
          content: "",
          format: ""
        },
        price: 0,
        image: ref(null)
      }
    }
  }
}
</script>

<template>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="title" v-model="artwork.title"/>
        <label for="title">Título</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="description" v-model="artwork.description"/>
        <label for="description">Descripción</label>
    </span>
  </div>
  <div>
    <input type="file" name="image" accept="image/*">
  </div>

  <h1>{{artwork.price}}</h1>
  <pv-button label="Agregar" @click="addArtwork(artwork)"/>
</template>

<style scoped>

</style>