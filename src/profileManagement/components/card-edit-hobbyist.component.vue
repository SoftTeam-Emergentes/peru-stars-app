<template>
  <div class="text-900 font-bold text-6xl mb-4 text-center">Edit Profile</div>
  <div class=" card grid justify-content-center shadow-8 " style="max-width: 800px">
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="firstName" v-model="hobbyist.firstName"/>
        <label for="firstName">First name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="lastName" v-model="hobbyist.lastName"/>
        <label for="lastName">Last name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="email" v-model="hobbyist.email"/>
        <label for="email">Email</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="age" v-model="hobbyist.age"/>
        <label for="age">Age</label>
    </span>
    </div>
    <div class="col-12  my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="password" type="password" v-model="hobbyist.password"/>
        <label for="password">Password</label>
    </span>
    </div>
    <pv-button label="Update" icon="pi pi-user" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap my-4"></pv-button>

  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: "card-edit-hobbyist",
  data() {
    return {
      hobbyist: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: ''
      }
    }
  }
}
</script>