<template>
  <body>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  " style="height:calc( 100vh - 80px )">

    <div class="background-image"></div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 z-1 opacity-80 " >
      <div class="text-center mb-5">

        <div class="text-900 text-3xl font-medium mb-3">Register</div>
        <span class="text-600 font-medium line-height-3">You have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="navigateToSingIn">Sign In</a>
      </div>

      <form @submit="handleSubmit">
        <label  class="block text-900 font-medium mb-2">Name</label>
        <pv-input-text  v-model="userInfo.firstName" type="text" class="w-full mb-3" placeholder="Your name"/>
        <label  class="block text-900 font-medium mb-2">Last Name</label>
        <pv-input-text  v-model="userInfo.lastName" type="text" class="w-full mb-3" placeholder="your lastname"/>
        <label  class="block text-900 font-medium mb-2">Email</label>
        <pv-input-text  v-model="userInfo.email" type="email" class="w-full mb-3" placeholder="your email address"/>

        <label  class="block text-900 font-medium mb-2">Password</label>
        <pv-input-text v-model="userInfo.password" type="password" class="w-full mb-3" placeholder="your password"/>
        <label  class="block text-900 font-medium mb-2">Repeat Password</label>
        <pv-input-text v-model="confirmationPassword"  type="password" class="w-full mb-3" placeholder="repeat your password"/>



      </form>
      <pv-button @click="register()" label="Register" icon="pi pi-user" class="w-full"></pv-button>
    </div>
  </div>
  </body>
</template>
<script>


import {AuthApiService} from "@/accountManagement/services/auth-api.service";

export default {
  name: "Sign-up",
  authService:null,
  data(){
    return{
      confirmationPassword:'',
      userInfo:{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    }

  },
  methods:{
    navigateToSingIn(){
      this.$router.push({name:'sign-in'});
    },
    async register(){
      try {
        if (this.userInfo.password===this.confirmationPassword){
          this.authService= new AuthApiService();
          const response = await this.authService.register(this.userInfo)
          console.log(response);
          this.navigateToSingIn();
        }else{
          console.log('Passwords do not match');
        }

      } catch (error) {
        console.log(this.response +" error");// Maneja los errores de inicio de sesión.
      }
    },

  }
}
</script>
<style scoped>

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/backgroundSigngUp.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Ajusta la opacidad según tus preferencias */
}

</style>