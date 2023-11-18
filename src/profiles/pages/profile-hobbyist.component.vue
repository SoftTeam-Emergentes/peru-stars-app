

<template>
  <div class="mx-auto">
    <div class="shape">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
              style="stroke: none; fill: #fff;"></path>
      </svg>
    </div>

    <div class="grid grid-nogutter surface-section text-800 shadow-8" style="max-width: 1000px; margin: auto;">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span class="block text-6xl font-bold mb-1">Welcome <span style="color: red;">{{getName()}}</span> Enjoy the arts on display</span>
          <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
          <p class="mt-0 mb-4 text-700 line-height-3">
            <i class="pi pi-envelope" style="font-size: 1.5rem; color: darkslategray;"> : {{ getEmail() }}</i><br>
            <i class="pi pi-user" style="font-size: 1.5rem; color: darkslategray;"> : {{getAge()}} años</i><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <pv-button label="Learn More" type="button" class="mr-3 p-button-raised"></pv-button>
          <pv-button label="Live Demo" type="button" class="p-button-outlined"></pv-button>
        </section>
      </div>

      <div class="col-12 md:col-6 overflow-hidden">
        <img :src="getImage()" alt="Image" class="md:ml-auto block md:h-full"
             style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" />
      </div>
    </div>

    <pv-card class="mx-10 mt-10 top-content" style="background-color: transparent; box-shadow: none;">
      <div class="flex-column ml-10 mr-5 image-profile">
        <div class="d-block text-center white--text text-h5 font-weight-bold">Hobbyist Name</div>
        <img src="https://picsum.photos/id/177/800" alt="artist image" width="200" height="200"
             class="rounded-circle">
      </div>
    </pv-card>

    <div class="card grid" style="margin: auto;">
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

    <pv-button @click="openEditDialog" label="Edit" icon="pi pi-external-link" class="w-full"></pv-button>

    <pv-dialog v-model:visible="visible" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <card-edit-hobbyist :initialUser="user" :initialHobbyist="hobbyist" :initialUserId="userId" @updateHobbyist="updateHobbyist"></card-edit-hobbyist>
    </pv-dialog>
  </div>




</template>

<script>

import CardEditHobbyist from "@/profiles/components/card-edit-hobbyist.component.vue";
import {useAuthStore} from "@/accounts/stores/auth";
import {HobbyistsApiService} from "@/profiles/services/hobbyist-api.service";


export default {
  name: "profile-hobbyist",
  components: { CardEditHobbyist},
  hobbyistService:null,
  data() {
    return {
      dataH:{},
      userId:null,
      user:{
        firstName:null,
        lastName:null,
        email:null,
      },
      hobbyist:{
        age:null,
        collected:null,
      },
      visible: false
    };
  },
  created() {
    this.getArtist(useAuthStore().user.id);
  },

  methods:{
    openEditDialog() {
      this.visible = true;
    },
    updateHobbyist(updatedHobbyist) {
      // Este método se llamará cuando el componente card-edit-hobbyist emita el evento @updateHobbyist
      this.hobbyist = updatedHobbyist;
      this.visible = false; // Cerrar el diálogo después de la actualización
    },
    getImage(){
      return `https://picsum.photos/id/${this.getRandomNumber(1050,1060)}/1000/1000`;
    },
    getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    },
    getName(){
      return useAuthStore().user.unique_name;
    },
    getEmail(){
      return useAuthStore().user.email;
    },
    getArtist(userId){
      this.hobbyistService = new HobbyistsApiService();
      this.userId=useAuthStore().user.id;
      console.log(this.userId);
      this.user.firstName= useAuthStore().user.firstName;
      this.user.lastName= useAuthStore().user.lastName;
      this.user.email= useAuthStore().user.email;
      this.hobbyistService.getById(1).then((response) => {    //getById configurar para inicio de sesion copio el id del que inicio sesión
        this.hobbyist.age = response.data.age;

        //console.log(this.hobbyist.age);
      });

    },
    getAge() {

      return this.hobbyist.age;
    }
  },

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