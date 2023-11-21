<template>
  <div class="text-900 font-bold text-6xl mb-4 text-center">Edit Profile</div>
  <div class=" card grid justify-content-center shadow-8 " style="max-width: 800px">
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="firstName" v-model="user.firstName"/>
        <label for="firstName">First name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="lastName" v-model="user.lastName"/>
        <label for="lastName">Last name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="email" v-model="user.email"/>
        <label for="email">Email</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="age" v-model="hobbyist.age"/>
        <label for="age">Age</label>
    </span>
    </div>

    <pv-button @click="updateProfile" label="Update" icon="pi pi-user" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap my-4"></pv-button>

  </div>
</template>

<style scoped>

</style>

<script>

import {HobbyistsApiService} from "@/profiles/services/hobbyist-api.service";
import {AuthApiService} from "@/accounts/services/auth-api.service";
import {useAuthStore} from "@/accounts/stores/auth";

export default {
  name: "card-edit-hobbyist",
  props: {
    initialHobbyist: Object,
    initialUser:Object,
    initialUserId:Number,
  },
  hobbyistService:null,
  authService:null,

  data() {
    return {
      userId:this.initialUserId,
      hobbyist:{...this.initialHobbyist},
      user:{...this.initialUser}

    }
  },
  created() {
    this.hobbyistService=  new HobbyistsApiService();
    this.authService = new AuthApiService();
  },
  emits: ['updateHobbyist'],
  methods: {
    updateProfile() {
      // Realiza las operaciones de actualización
      // Puedes emitir el evento para informar a profile-hobbyist.vue
      this.hobbyistService.update(useAuthStore().user.typeId,this.hobbyist);
      console.log(this.userId);
      this.authService.update(this.userId,this.user)
      useAuthStore().user.email=this.user.email;
      useAuthStore().user.firstName=this.user.firstName;
      useAuthStore().user.lastName=this.user.lastName;
      useAuthStore().user.unique_name=this.user.firstName +' '+ this.user.lastName;



      this.$emit("updateHobbyist", this.hobbyist,this.user);
      console.log(this.hobbyist)
    },
    // Otros métodos...
  },
}
</script>