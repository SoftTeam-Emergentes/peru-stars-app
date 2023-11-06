

<template>

    <pv-menubar :model="navigationSupplier" class="shadow-8 text-red-400  fixed  z-5  top-0 mr-8" style="width: calc(100vw - 16px)"  >
      <template #start>
        <h1 class="text-3xl pl-6 font-bold border-round-right">PeruStars</h1>
      </template>
    </pv-menubar>
  <div style="height: 80px">

  </div>
</template>
<script>

export default {
  name: "nav-bar",
  data() {
    return {
      user: String,
      navigationSupplier: [
        {label: "Home", icon: 'pi pi-fw pi-home', to: {name:'welcome'},styleClass: 'text-toolbar-btn mr-4 red--text'},
        {label: "About", icon: 'pi pi-info-circle', to: {name:'about'},styleClass: 'text-toolbar-btn mr-4 red--text'},
        {label: "SignIn", icon: 'pi pi-user', to: {name:'sign-in'},styleClass: 'text-green-500'},
        {label: "Signup", icon: 'pi pi-user-plus', to: {name:'sign-up'},styleClass: 'text-toolbar-btn mr-4 red--text'},

      ],
      navigationStore: [
        {label: "Home", icon: 'pi pi-fw pi-home', to: {name:'welcome'}},
        {label: "Plans", icon: 'pi pi-fw pi-book', to: {name:'about'}},
      ],
      //`store/${this.storeId}/store-home`
    }
  },
  created() {

    this.user= "supplier"
  },
  methods:{
    getUser(){
      if(this.user==='supplier')
        return this.navigationSupplier
      else if (this.user==='store')
        return this.navigationStore
    },
  }
}
</script>
<style   scoped>
::v-deep(.p-menubar-root-list ) {
  margin-left: auto;

}
::v-deep(.p-menubar-button) {
  margin-left: auto;

}

</style>