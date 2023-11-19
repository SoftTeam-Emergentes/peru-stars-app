<template>

    <div class=" flex  w-15rem " style="height: calc(100vh - 105px )"></div>
    <div class=" shadow-7 w-15rem border-round-right-2xl fixed " style="height: calc(100vh - 100px );top: 99px">
        <pv-list-box v-model="selectArtist" :options="ArtistFavorites"  class="w-full " listStyle="height:calc(50vh - 110px)" data-key="id" >
          <template #header > <div class="mr-3 font-semibold border-2 border-round-right-2xl" style="background-color: #DA5B5E; color: white">
            <p class="ml-3">Your artist</p>
          </div>

          </template>
          <template #option="slotProps">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.name" :src="slotProps.option.image"  style="width: 28px" />
                <div>{{ slotProps.option.name }}</div>
              </div>

            </div>
          </template>
        </pv-list-box>
        <pv-list-box v-model="selectArtist" :options="ArtistFavorites"  class="w-full " listStyle="height:calc(50vh - 110px)" data-key="id" >
          <template #header > <div class="mr-3 font-semibold border-2 border-round-right-2xl" style="background-color: #DA5B5E; color: white">
            <p class="ml-3">Your artist</p>
          </div>

          </template>
          <template #option="slotProps">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.name" :src="slotProps.option.image"  style="width: 28px" />
                <div>{{ slotProps.option.name }}</div>
              </div>

            </div>
          </template>
        </pv-list-box>
    </div>


</template>

<script>
export default {
  name: "side-bar-hobbyist",
  data() {
    return {

      selectArtist:null,
      ArtistFavorites: [
        {id: 1, name: "Juan", edad: 30, image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"},
        {id: 2, name: "María", edad: 25, image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"},
        {id: 3, name: "Pedro", edad: 35, image: "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"},
        {id: 4, name: "María", edad: 25, image: "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"},
        {id: 5, name: "Pedro", edad: 35, image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"},
        {id: 6, name: "María", edad: 25, image: "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"},
        {id: 7, name: "Pedro", edad: 35, image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"},
        {id: 8, name: "María", edad: 25, image: "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"},
        {id: 9, name: "Pedro", edad: 35, image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
      ]
    }
  }
}
</script>

<style scoped>


</style>