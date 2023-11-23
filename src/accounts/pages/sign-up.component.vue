<template>
  <body>
  <div class="flex justify-content-center align-items-center flex-wrap background relative z-0  "
       style="height:calc( 100vh - 80px )">

    <div class="background-image"></div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 z-1 opacity-80 ">
      <div class="text-center mb-5">

        <div class="text-900 text-3xl font-medium mb-3">Sign up</div>
        <span class="text-600 font-medium line-height-3">You have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="navigateToSingIn">Sign In</a>
      </div>

      <form @submit="handleSubmit">
        <label class="block text-900 font-medium mb-2">Name</label>
        <pv-input-text v-model="userInfo.firstName" type="text" class="w-full mb-3" placeholder="Your name"/>
        <label class="block text-900 font-medium mb-2">Last Name</label>
        <pv-input-text v-model="userInfo.lastName" type="text" class="w-full mb-3" placeholder="Your lastname"/>


        <label class="block text-900 font-medium mb-2">Email</label>
        <pv-input-text v-model="userInfo.email" type="email" class="w-full mb-3" placeholder="Your email address"/>

        <div class="flex flex-wrap  justify-content-between mb-3">
          <div>
            <label class="block text-900 font-medium mb-2">Password</label>
            <pv-password v-model="userInfo.password" type="password" placeholder="Your password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lower case character</li>
                  <li>At least one upper case character</li>
                  <li>At least one numeric character</li>
                  <li>Minimum of 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
          <div>
            <label class="block text-900 font-medium mb-2">Repeat Password</label>
            <pv-password v-model="confirmationPassword" type="password" placeholder="Repeat your password" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer>
                <pv-divider/>
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lower case character</li>
                  <li>At least one upper case character</li>
                  <li>At least one numeric character</li>
                  <li>Minimum of 8 characters</li>
                </ul>
              </template>
            </pv-password>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-900 font-medium ">Type of user</label>
          <pv-dropdown v-model="selectedUser" :options="typeUser" class="w-full md:w-14rem"
                       placeholder="Select user"/>
        </div>
        <!-- dates of type User -->
        <div>
          <div v-if="selectedUser==='artist'" class="card flex flex-wrap justify-content-center gap-2 ">
            <div class="col" style="min-width: 100%">
              <label class="block text-900 font-medium ">Brand name</label>
              <pv-input-text class="w-full" v-model="artist.brandName" placeholder="Your brand name"/>
            </div>
            <div class="col grid align-items-center ">
              <div class="col-4">
                <label class="block text-900 font-medium ">Genre</label>
                <pv-dropdown v-model="artist.genre" :options="typeGenre" class="w-full md:w-14rem"
                             placeholder="Select genre"/>
              </div>
              <div class="col-4">
                <label class="block text-900 font-medium ">Phone number</label>
                <pv-input-text class="w-full" v-model="artist.contactNumber" type="number" placeholder="Your number"/>
              </div>
              <div class=" col-4">
                <label class="block text-900 font-medium ">Age</label>
                <pv-input-text class="w-full" v-model="artist.age" type="number" :min="18" :max="100" placeholder="Your age"/>
              </div>
            </div>
            <div class=" col" style="min-width: 100%">
              <label class="block text-900 font-medium ">Contact Email</label>
              <pv-input-text class="w-full" v-model="artist.contactEmail" placeholder="Your contact email"/>
            </div>
          </div>
          <div v-else-if="selectedUser==='hobbyist'" class="card flex flex-wrap justify-content-center gap-2 ">

            <div class=" col-4">
              <label class="block text-900 font-medium ">Age</label>
              <pv-input-text class="w-full" v-model="hobbyist.age" ini type="number" :min="18" :max="100" placeholder="Your age"/>
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


import {AuthApiService} from "@/accounts/services/auth-api.service";
//import {useRegisteredUserStore} from "@/accounts/stores/registeredUserStore";
import {ArtistsApiService} from "@/profiles/services/artist-api.service";
import {HobbyistsApiService} from "@/profiles/services/hobbyist-api.service";

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
      typeGenre: [
        'MUSICIAN',
        'FILMMAKER',
        'VISUAL ARTIST',
        'WRITTER',
        'OTHER'],
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      artist: {
        description: 'Your description',
        brandName: '',
        phrase: 'Your phrase',
        contactNumber: 0,
        contactEmail: '',
        age: 0,
        genre: 'default',
        collected: true
      },
      hobbyist: {
        age: 0,
        collected: true
      }
    }

  },
  methods: {
    navigateToSingIn() {
      this.$router.push({name: 'sign-in'});
    },
    async register() {
      //const registeredUserStore = useRegisteredUserStore();
      let body = undefined;
      try {
        if (this.userInfo.password === this.confirmationPassword && this.selectedUser != null) {
          this.error = false;
          this.authService = new AuthApiService();
          const response = await this.authService.register(this.userInfo)
          console.log(response);
          console.log(this.selectedUser);
          switch (this.selectedUser) {
            case "hobbyist":
              this.hobbyistService = new HobbyistsApiService();
              body = {
                userId: response.userId,
                age: this.hobbyist.age
              };
              const HobbyistResponse = await this.hobbyistService.create(body);
              //console.log(HobbyistResponse);
              break;
            case "artist":
              this.artistService = new ArtistsApiService();
              body = {
                userId: response.userId,
                age: this.artist.age,
                brandName: this.artist.brandName,
                description: this.artist.description,
                phrase: this.artist.phrase,
                contactNumber: this.artist.contactNumber,
                contactEmail: this.artist.contactEmail,
                genre: this.artist.genre,
                socialMediaLink: [""]
              };
              const ArtistResponse = await this.artistService.create(body);
              console.log(ArtistResponse);
              break;
          }
          this.navigateToSingIn();
          // registeredUserStore.type = this.selectedUser;
        } else {
          this.error = true;
          console.log('Password does not match');
        }

      } catch (error) {
        console.log(this.response + " error");// Maneja los errores de inicio de sesión.
      }
    },

    errorMessages() {
      if (this.userInfo.password !== this.confirmationPassword) {
        this.errorPassword = '* Password does not match';
      } else this.errorPassword = '';
      if (this.selectedUser == null) {
        this.errorTypeUser = '* Type not selected';
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