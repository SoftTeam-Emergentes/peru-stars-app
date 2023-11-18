

<template>

  <div class=" card grid justify-content-center shadow-8 " style="max-width: 800px">
    <div class="text-900 font-bold text-6xl mb-4 text-center w-full my-2">Edit Profile</div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="firstName" v-model="artist.firstName"/>
        <label for="firstName">First name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="lastName" v-model="artist.lastName"/>
        <label for="lastName">Last name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="email" v-model="artist.email"/>
        <label for="email">Email</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="brandName" v-model="artist.brandName"/>
        <label for="brandName">Brand Name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="contactPhone" type="number" v-model="artist.contactPhone"/>
        <label for="contactPhone">Contact Phone</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="contactEmail"  v-model="artist.contactEmail"/>
        <label for="contactEmail">Contact Email</label>
    </span>
    </div>

    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full " type="number" id="age" v-model="artist.age"/>
        <label for="age">Age</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="genre"  v-model="artist.genre"/>
        <label for="genre">Genre</label>
    </span>
    </div>
    <div class="col-12  my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="phrase" v-model="artist.phrase"/>
        <label for="phrase">Phrase</label>
    </span>
    </div>
    <div class="card col-12 flex justify-content-center">
        <span class="p-float-label">
            <pv-text-area v-model="artist.description" id="description" rows="5" cols="30" />
            <label for="description" >Description</label>
        </span>
    </div>
    <div class="col-12  my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="password" type="password" v-model="artist.password"/>
        <label for="password">Password</label>
    </span>
    </div>
    <pv-button label="Update" icon="pi pi-user" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap my-4"></pv-button>

  </div>
</template>
<script>
export default {
  name: "card-edit-artist",
  data(){
    return{
      artist:{
        firstName: '',
        lastName: '',
        email: '',
        brandName: '',
        description:'',
        phrase:'',
        contactPhone:'',
        contactEmail:'',
        age:'',
        genre:'',
        password: '',
      }
    }
  }
}
</script>
<style scoped>

</style>