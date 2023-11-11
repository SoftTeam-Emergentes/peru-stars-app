

<template>
  <div>
    <div class="shape">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
              style="stroke: none; fill: #fff;"></path>
      </svg>
    </div>
    <pv-card class="mx-10 mt-10 top-content" style="background-color: transparent; box-shadow: none;">
      <div class="flex-column ml-10 mr-5 image-profile">
        <div  class="d-block text-center white--text text-h5 font-weight-bold">Hobbyist Name</div>
        <img
            src="https://picsum.photos/id/177/800"
            alt="artist image"
            width="200" height="200"
            class="rounded-circle"
        >
      </div>
    </pv-card>
    <div class=" card grid">
      <div class="col-12 md:col-6 lg:col-4">
        <div class="p-3 bg-blue-500">Contenido 1</div>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <div class="p-3 bg-green-500">Contenido 2</div>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <div class="p-3 bg-red-500">Contenido 3</div>
      </div>
    </div>

  </div>



</template>

<script>
import axios from "axios";

export default {
  name: "profile-hobbyist",
  async created(){
    const response=await axios.get('users',{
      headers:{
        Authorization:'Bearer'+ localStorage.getItem('token')
      }
        }
    );
    console.log(response)
  }

}
</script>

<style scoped>
.shape {
  height: 60vh;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(203, 144, 40, 1) 0%, rgba(255, 0, 0, 1) 100%);
  stroke: none;
  position: relative;
  top: 0;
}
</style>