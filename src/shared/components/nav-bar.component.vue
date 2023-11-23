<template>


  <div v-if="UseAuthStore.isNotUserLoggedIn">
    <pv-menubar   :model="navigationHome" class="shadow-8 text-red-400  fixed  z-5  top-0 mr-8"
                style="width: calc(100vw - 16px)">
      <template #start>
        <h1 class="text-3xl pl-6 font-bold border-round-right">PeruStars</h1>
      </template>
      <template #item="{ item, props, root }">
        <a @click="navigate(item)" :class=item.class v-bind="props.action">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="item.shortcut"
                class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        </a>

      </template>
    </pv-menubar>
    <div style="height: 80px">
    </div>
  </div>
</template>
<script>

import {useAuthStore} from "@/accounts/stores/auth";

const UseAuthStore = useAuthStore
export default {
  name: "nav-bar",
  data() {
    return {
      value:null,
      UseAuthStore : useAuthStore(),
      tokenValue:null,
      authService:null,
      navigationHome: [
        {label: "Home", icon: 'pi pi-fw pi-home', routeName: 'welcome', class: 'text-red-500'},
        {label: "About", icon: 'pi pi-info-circle', routeName: 'about', class: 'text-red-500'},
        {label: "Sign in", icon: 'pi pi-user', routeName: 'sign-in', class: 'hover:bg-red-500 bg-primary'},
        {label: "Sign up", icon: 'pi pi-user-plus', routeName: 'sign-up', class: 'text-red-500'},
      ]
    }
  },
  created() {

  },

  methods: {
    navigate(item) {
      this.$router.push({ name: item.routeName });
      console.log()
    },

  },

}
</script>
<style scoped>
::v-deep(.p-menubar-root-list ) {
  margin-left: auto;

}

::v-deep(.p-menubar-button) {
  margin-left: auto;

}

</style>