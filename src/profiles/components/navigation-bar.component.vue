

<template>
  <div class=" card" style="height:92px" >
    <pv-toolbar :model="items" class="fixed  bg-gray-900 z-3 shadow-2" style="border-radius: 2rem; background-image: linear-gradient(to right, var(--red-400), var(--bluegray-800)) ;width: calc(100vw - 16px)">
      <template #start>
        <p class="logo w-2rem pl-2 font-bold border-round-right" style="color:white">PeruStars</p>
      </template>
      <template #center>
        <div class="flex flex-wrap align-items-center gap-3">
          <pv-button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200" @click="navigate('home-hobbyist')"><i class="pi pi-home text-2xl" ></i></pv-button>
          <pv-button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200" @click="navigate('profile-hobbyist')"><i class="pi pi-user text-2xl"></i></pv-button >
          <pv-button class="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200" @click="navigate('home-hobbyist')"><i class="pi pi-search text-2xl"></i></pv-button >
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <pv-button  icon="pi pi-times"  @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" rounded>
            <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Descripción de la imagen" />
          </pv-button>
          <pv-menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          <span class="font-bold text-bluegray-50">Amy </span>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>
<script>
import {useAuthStore} from "@/accounts/stores/auth";

export default {
  name: "navigation-bar",
  data() {
    return {
      items: [
        {
          label: 'Refresh',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => {
           this.logout();this.$router.push({name:'sign-in'});
          }
        }
      ]
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    logout(){
      const Auth=useAuthStore();
      Auth.clear();
    },
    navigate(name) {
      this.$router.push({name: name});
    },
  }
}
</script>
<style scoped>
@media (max-width: 500px) {
  .logo {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>