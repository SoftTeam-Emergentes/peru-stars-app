<template>
  <body>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  " style="height:calc( 100vh - 80px )">

    <div class="background-image"></div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 z-1 opacity-80 " >
      <div class="text-center mb-5">

        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="navigateToSingUp">Create today!</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <pv-input-text id="email1" type="text" class="w-full mb-3"/>

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <pv-input-text id="password1" type="password" class="w-full mb-3"/>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <pv-checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></pv-checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <pv-button label="Sign In" icon="pi pi-user" class="w-full"></pv-button>
      </div>
    </div>
  </div>
  </body>
</template>
<script>


export default {
  name: "SignIn",
  methods:{
    navigateToSingUp(){
      this.$router.push({name:'sign-up'});
    }
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
  background-image: url('../../assets/img/backgroundLogin.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Ajusta la opacidad según tus preferencias */
}

</style>