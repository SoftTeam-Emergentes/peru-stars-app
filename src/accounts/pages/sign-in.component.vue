<template>
  <body>
  <pv-toast position="top-left" group="br"/>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  "
       style="height:calc( 100vh - 80px )">

    <div class="background-image"></div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 z-1 opacity-80 ">
      <div class="text-center mb-5">

        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="navigateToSingUp">Create
          today!</a>
      </div>

      <form @submit="login">
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <pv-input-text v-model="credentials.email" id="email1" type="email" placeholder="Email"
                       class="w-full mb-3"/>

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <pv-input-text v-model="credentials.password" id="password1" type="password" placeholder="Password"
                       class="w-full mb-3"/>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>
      </form>
      <pv-button @click="login" label="Sign In" icon="pi pi-user" class="w-full"></pv-button>
    </div>
  </div>
  </body>
</template>

<script>

import {useAuthStore} from "@/accounts/stores/auth";

export default {
  name: "Sign-in",


  data() {
    return {
      UseAuthStore: useAuthStore(),
      emailError: null,
      passwordError: null,
      userType: undefined,

      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    navigateToSingUp() {
      this.$router.push({name: 'sign-up'});
    },
    navigateToHobbyistHome() {
      this.$router.push({name: 'home-hobbyist'});
    },
    navigateToArtistHome() {
      this.$router.push({name: 'home-artist'});
    },
    async login() {
      //const loggedUserStore = useLoggedUserStore();
      //const registeredUserStore = useRegisteredUserStore();
      try {
        if (this.credentials.email && this.credentials.password) {
          await this.UseAuthStore.login(this.credentials);
          //this.userType = localStorage.getItem('userType');
          this.userType = this.UseAuthStore.user.type;
          console.log(this.userType)
          switch (this.userType) {
            case "Artist":
              this.navigateToArtistHome();
              break;
            case "Hobbyist":
              this.navigateToHobbyistHome();
              break;
          }
        } else {
          this.messageWarning();
          console.log(this.response);
        }
        // Procesa la respuesta (por ejemplo, guarda el token JWT en el estado de autenticación).
      } catch (error) {
        //console.log(' error');// Maneja los errores de inicio de sesión.
      }
    },

    messageWarning() {
      this.$toast.add({
        severity: 'warn',
        summary: 'Success Message',
        detail: 'Username or password is incorrect.',
        group: 'br',
        life: 3000
      });
    }
  },


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