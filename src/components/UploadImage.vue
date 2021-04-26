<template>
  <div>
     <h3>UploadImage</h3>
     <input type="file" id="imageUpload" multiple @change="handleFiles">
     <img :src="imageUrl">
  </div>
</template>

<script>
export default {
    name: 'UploadImage',
    data() {
        return {
            image: null,
            imageUrl: null,
        }
    },
    methods: {
        handleFiles(event) {
            console.log(event.target.files);
            let files = event.target.files[0].name;
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0];
        }
    }
}


</script>

<style>

</style>