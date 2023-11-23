<template>
  <div>
    <input type="file" @change="handleFileChange" accept="image/*">
    <button @click="convertAndSave">Concert and Save as Base85</button>
  </div>
</template>
<script>
import ImageminWebp from 'imagemin-webp';
import Imagemin from 'imagemin';
import Ascii85 from 'ascii85';

export default {
  data() {
    return {
      fileInput: null,
      base85String: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.fileInput = event.target.files[0];
    },
    async convertAndSave() {
      if (this.fileInput) {
        // Convierte el archivo PNG a WebP
        const files = await Imagemin([this.fileInput], {
          destination: 'dist',
          plugins: [
            ImageminWebp({ quality: 75 })
          ]
        });

        // Lee el archivo WebP como un ArrayBuffer
        const reader = new FileReader();
        reader.onloadend = async () => {
          const arrayBuffer = reader.result;

          // Convierte el ArrayBuffer a un array de bytes
          const byteArray = new Uint8Array(arrayBuffer);

          // Codifica los bytes a Base85
          this.base85String = Ascii85.encode(byteArray);

          // Puedes hacer algo con this.base85String, como enviarlo al servidor
          console.log(this.base85String);
        };

        reader.readAsArrayBuffer(files[0].data);
      }
    },
  },
};
</script>