<script>


import NavigationBar from "@/profiles/components/navigation-bar.component.vue"


export default {
  name: "Hobbyist-",
  components: {NavigationBar},



}
</script>

<template>
  <navigation-bar></navigation-bar>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  "
       style="height:calc( 100vh - 80px )">
    <div class="background-image"></div>
  <router-view class="z-1"></router-view>
  </div>
</template>

<style scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/backgroundLogin.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Ajusta la opacidad según tus preferencias */
}

</style>