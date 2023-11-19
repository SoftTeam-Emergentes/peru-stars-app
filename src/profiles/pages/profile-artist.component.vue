<script>
export default {
  name: "profile-artist",
  data() {
    return {
      showDialog: false,
    }
  },
  methods:{
    editArtist(){

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
          <h2 class="m-0">Nombre del Artista</h2>
          <p class="m-0">Descripción del Artista</p>
        </div>
        <div class="p-1 bg-primary-reverse border-round-lg">
          <h3 class="m-0 px-3">Información de Contacto</h3>
          <ul>
            <li class="p-0 m-0"><i class="pi pi-fw pi-phone"></i> Teléfono: 123-456-7890</li>
            <li class="p-0 m-0"><i class="pi pi-fw pi-envelope"></i> Correo Electrónico: example@example.com</li>
            <li class="p-0 m-0"><i class="pi pi-fw pi-map-marker"></i> Dirección: 1234 Calle Falsa, Lima, Perú</li>
          </ul>
          <h3 class="m-0 px-3">Experiencia</h3>
          <ul>
            <li>Experiencia 1</li>
            <li>Experiencia 2</li>
            <li>Experiencia 3</li>
          </ul>
          <div class="m-0 flex bg-black-alpha-50 justify-content-center align-items-center align-content-center">
            <pv-button icon="pi pi-plus" @click="showDialog = true" label="Add Artwork" severity="secondary"
                       class="ml-2 m-4"/>
          </div>
        </div>
        <pv-dialog v-model:visible="showDialog" header="Agregar obra de arte">
          <p>Aquí puedes agregar tu código para manejar la adición de una obra de arte.</p>
          <template #footer>
            <pv-button label="Agregar" @click="editArtist()"/>
            <pv-button label="Cancelar" @click="showDialog = false" class="p-button-text"/>
          </template>
        </pv-dialog>

      </div>


    </div>


  </div>

</template>

<style scoped>


</style>