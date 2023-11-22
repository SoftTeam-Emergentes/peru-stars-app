

<template>

  <div class=" card grid justify-content-center shadow-8 " style="max-width: 800px">
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class="w-full " id="firstName" v-model="user.firstName"/>
        <label for="firstName">First name</label>
    </span>
    </div>
    <div class="col-12 md:col-6 my-1">
      <span class="p-float-label">
        <pv-input-text class=" w-full  " id="lastName" v-model="user.lastName"/>
        <label for="lastName">Last name</label>
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
        <pv-input-text class=" w-full  " id="contactPhone" type="number" v-model="artist.contactNumber"/>
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
    <div class="col-4">
      <label class="block text-900 font-medium ">Genre artist</label>
      <pv-dropdown v-model="artist.genre" :options="typeGenre" class="w-full md:w-14rem"
                   placeholder="Select genre"/>
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
    <pv-button label="Update" @click="editArtist(user, artist)" icon="pi pi-user" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap my-4"></pv-button>

  </div>
</template>
<script>
export default {
  name: "card-edit-artist",
  props: {
    editArtist: Function
  },
  data(){
    return{
      typeGenre: [
        'MUSICIAN',
        'FILMAKER',
        'VISUALARTIST',
        'WRITER',
        'OTHER'],
      user: {
        firstName: '',
        lastName: '',
      },
      artist:{
        age: 0,
        brandName: '',
        description:'',
        phrase:'',
        contactNumber:'',
        contactEmail:'',
        genre:'',
        password: '',
        socialMediaLink: [""]
      }
    }
  }
}
</script>
<style scoped>

</style>