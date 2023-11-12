<template>
  <body>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  "
       style="height:calc( 100vh - 80px )">

    <div class="background-image"></div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 z-1 opacity-80 ">
      <div class="text-center mb-5">

        <div class="text-900 text-3xl font-medium mb-3">Register</div>
        <span class="text-600 font-medium line-height-3">You have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="navigateToSingIn">Sign In</a>
      </div>

      <form @submit="handleSubmit">
        <label class="block text-900 font-medium mb-2">Name</label>
        <pv-input-text v-model="userInfo.firstName" type="text" class="w-full mb-3" placeholder="Your name"/>
        <label class="block text-900 font-medium mb-2">Last Name</label>
        <pv-input-text v-model="userInfo.lastName" type="text" class="w-full mb-3" placeholder="your lastname"/>


        <label class="block text-900 font-medium mb-2">Email</label>
        <pv-input-text v-model="userInfo.email" type="email" class="w-full mb-3" placeholder="your email address"/>

        <div class="flex flex-wrap  justify-content-between mb-3">
          <div>
            <label class="block text-900 font-medium mb-2">Password</label>
            <pv-password v-model="userInfo.password" type="password" placeholder="your password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
          <div>
            <label class="block text-900 font-medium mb-2">Repeat Password</label>
            <pv-password v-model="confirmationPassword" type="password" placeholder="repeat your password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-900 font-medium ">Type user</label>
          <pv-dropdown v-model="selectedUser" :options="typeUser" class="w-full md:w-14rem"
                       placeholder="Select user"/>
        </div>
        <!-- dates of type User -->
        <div>
          <div v-if="selectedUser==='artist'" class="card flex flex-wrap justify-content-center gap-2 ">
            <div class="col" style="min-width: 100%">
              <label class="block text-900 font-medium ">BrandName</label>
              <pv-input-text class="w-full" v-model="artist.brandName" placeholder="your brandName"/>
            </div>
            <div class="col grid align-items-center ">
              <div class="col-8">
                <label class="block text-900 font-medium ">Telephone</label>
                <pv-input-text class="w-full" v-model="artist.contactNumber" type="number" placeholder="your number"/>
              </div>
              <div class=" col-4">
                <label class="block text-900 font-medium ">Age</label>
                <pv-input-text class="w-full" v-model="artist.age" type="number" placeholder="your age"/>
              </div>
            </div>
            <div class=" col" style="min-width: 100%">
              <label class="block text-900 font-medium ">Contact Email</label>
              <pv-input-text class="w-full" v-model="artist.contactEmail" placeholder="your contact email"/>
            </div>

          </div>
          <div v-else-if="selectedUser==='hobbyist'" class="card flex flex-wrap justify-content-center gap-2 ">

              <div class=" col-4">
                <label class="block text-900 font-medium ">Age</label>
                <pv-input-text class="w-full" v-model="hobbyist.age" type="number" placeholder="your age"/>
              </div>


          </div>
        </div>
        <div v-if="error" class="align-items-center font-light text-red-500">
          <pv-divider/>
          <p>{{ errorMessages() }}</p>
        </div>
      </form>
      <pv-button @click="register()" label="Register" icon="pi pi-user" class="w-full"></pv-button>
    </div>
  </div>
  </body>
</template>
<script>


import {AuthApiService} from "@/accountManagement/services/auth-api.service";
import {useRegisteredUserStore} from "@/accountManagement/stores/registeredUserStore";
import {hobbyistsApiService} from "@/profileManagement/services/hobbyist-api.service";
import {ArtistsApiService} from "@/profileManagement/services/artist-api.service";

export default {
  name: "Sign-up",

  authService: null,
  hobbyistService: null,
  artistService: null,
  data() {
    return {
      confirmationPassword: '',
      error: false,
      errorPassword: '',
      errorTypeUser: '',
      selectedUser: null,
      typeUser: [
        'artist',
        'hobbyist'],
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      artist: {
        description: 'pon tu descripcion',
        brandName: '',
        phrase: 'poner tu frase',
        contactNumber: 0,
        contactEmail: '',
        age: 0,
        genere: 'default',
        collected: true
      },
      hobbyist:{
        age:0,
        collected:true
      }
    }

  },
  methods: {
    navigateToSingIn() {
      this.$router.push({name: 'sign-in'});
    },
    async register() {
      const registeredUserStore = useRegisteredUserStore();
      let body = undefined;
      try {
        if (this.userInfo.password === this.confirmationPassword && this.selectedUser != null) {
          this.error = false;
          this.authService = new AuthApiService();
          this.hobbyistService = new hobbyistsApiService();
          this.artistService = new ArtistsApiService();
          const response = await this.authService.register(this.userInfo)
          console.log(response);
          switch (this.selectedUser) {
            case "hobbyist":
              body = {
                userId: response.data.userId,
                age: this.hobbyist.age
              };

              await this.hobbyistService.create(body);
              break;
            case "artist":
              body = {
                userId: response.data.userId,
                age: this.artist.age,
                brandName: this.artist.brandName,
                description: this.artist.description,
                phrase: this.artist.phrase,
                contactNumber: this.artist.contactNumber,
                contactEmail: this.artist.contactEmail,
                genre: 0,
                socialMediaLink: [""]
              };
              await this.artistService.create(body);
          }
          this.navigateToSingIn();
          registeredUserStore.type = this.selectedUser;
        } else {
          this.error = true;
          console.log('Passwords do not match');
        }

      } catch (error) {
        console.log(this.response + " error");// Maneja los errores de inicio de sesión.
      }
    },

    errorMessages() {
      if (this.userInfo.password !== this.confirmationPassword) {
        this.errorPassword = '* Password do not match';
      } else this.errorPassword = '';
      if (this.selectedUser == null) {
        this.errorTypeUser = '* No select type user';
      } else this.errorTypeUser = '';
      return this.errorTypeUser + '\n' + this.errorPassword
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
  background-image: url('../../assets/img/backgroundSigngUp.jpg'); /* Ruta de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Ajusta la opacidad según tus preferencias */
}

</style>