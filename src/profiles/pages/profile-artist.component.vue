<script>
import CardAddArtwork from "@/profiles/components/card-add-artwork-component.vue";
import CardEditArtist from "@/profiles/components/card-edit-artist.component.vue";
import {AuthApiService} from "@/accounts/services/auth-api.service";
import {ArtistsApiService} from "@/profiles/services/artist-api.service";
import {useAuthStore} from "@/accounts/stores/auth";

export default {
  name: "profile-artist",
  components: {CardEditArtist, CardAddArtwork},
  data() {
    return {
      showEditArtistDialog: false,
      authService: undefined,
      artistService: undefined
    }
  },
  created() {
    this.authService = new AuthApiService();
    this.artistService = new ArtistsApiService();
  },
  methods:{
    editArtist(user, artist){
      this.authService.update(useAuthStore().user.id, user).then((response) => {
        console.log(response.data);
        useAuthStore().firstName = user.firstName;
        useAuthStore().lastName = user.lastName;
        this.artistService.update(useAuthStore().user.typeId, artist).then((response2) => {
          console.log(response2.data);
          this.showEditArtistDialog = false;
        });
      });

    }
  }
}
</script>

<template>

  <div class="border-round-lg  flex justify-content-center align-items-center align-content-center z-1">
    <div class="p-col-12 p-md-4 border-round-lg">
      <div class="card border-round-lg shadow-5 mb-5 border-round-lg">
        <div class="flex flex-column align-items-center justify-content-center bg-primary border-round-lg">
          <img src="https://source.unsplash.com/collection/38682905/0" alt="Profile Picture"
               class="border-circle  mb-3" style="width: 200px;height: 200px"/>
          <h2 class="m-0">Artist's name</h2>
          <p class="m-0">Artist's description</p>
        </div>
        <div class="p-1 bg-primary-reverse border-round-lg">
          <h3 class="m-0 px-3">Contact information</h3>
          <ul>
            <li class="p-0 m-0"><i class="pi pi-fw pi-phone"></i> Phone: 123-456-7890</li>
            <li class="p-0 m-0"><i class="pi pi-fw pi-envelope"></i> Email: example@example.com</li>
            <li class="p-0 m-0"><i class="pi pi-fw pi-map-marker"></i> Address: 1234 Calle Falsa, Lima, Perú</li>
          </ul>
          <h3 class="m-0 px-3">Experience</h3>
          <ul>
            <li>Experience 1</li>
            <li>Experience 2</li>
            <li>Experience 3</li>
          </ul>
          <div class="m-0 flex bg-black-alpha-50 justify-content-center align-items-center align-content-center">
            <pv-button icon="pi pi-plus" @click="showEditArtistDialog = true" label="Edit user" severity="secondary"
                       class="ml-2 m-4"/>
          </div>
        </div>
        <pv-dialog v-model:visible="showEditArtistDialog" header="Edit profile">
          <p>Edita tu perfil</p>
          <card-edit-artist :edit-artist="editArtist"/>
          <template #footer>
            <pv-button label="Cancelar" @click="showEditArtistDialog = false" class="p-button-text"/>
          </template>
        </pv-dialog>

      </div>


    </div>


  </div>

</template>

<style scoped>


</style>