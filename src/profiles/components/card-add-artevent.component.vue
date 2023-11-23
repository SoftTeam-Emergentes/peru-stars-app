<script>
export default {
  name: "card-add-artevent",
  props: {
    addArtEvent: Function
  },
  data() {
    return {
      artEvent: {
        isOnline: false
      }
    };
  }
}
</script>

<template>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full" id="title" v-model="artEvent.title"/>
        <label for="title">Título</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full" id="description" v-model="artEvent.description"/>
        <label for="description">Descripción</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-calendar id="startDateTime" dateFormat="dd/mm/yy" v-model="artEvent.startDateTime" showTime hourFormat="12"/>
        <label for="description">Fecha y hora</label>
      </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full" id="country" v-model="artEvent.country"/>
        <label for="country">País</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full" id="city" v-model="artEvent.city"/>
        <label for="city">Ciudad</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-number class="w-full" id="latitude" v-model="artEvent.latitude" :max-fraction-digits="2"/>
        <label for="latitude">Latitud</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-number class="w-full" id="longitude" v-model="artEvent.longitude" :max-fraction-digits="2"/>
        <label for="longitude">Longitud</label>
    </span>
  </div>
  <div class="col-12 md:col-6 my-1">
    <p>Evento online</p>
    <pv-input-switch id="longitude" v-model="artEvent.isOnline"/>
  </div>
  <div style="text-align: right;">
    <pv-button label="Agregar" @click="addArtEvent(artEvent)"/>
  </div>
</template>

<style scoped>

</style>