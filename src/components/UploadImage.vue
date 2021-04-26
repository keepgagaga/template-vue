<template>
  <div>
     <input type="file" id="imageUpload" multiple @change="handleFiles" v-if="showInput">
     <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
    name: 'UploadImage',
    data() {
        return {
            showInput: true,
            imageWidth: 0,
            imageHeight: 0,
        }
    },
    methods: {
        handleFiles(event) {
            console.log(event.target.files[0]);
            this.showInput = false;
            let file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.addEventListener('load', (e) => {
                
                this.drwaImage(e.target.result);
            })
           fileReader.readAsDataURL(file);
        },

        drwaImage(imageUrl) {
            var canvas = document.getElementById('canvas');
            
            var ctx = canvas.getContext('2d');
            
            var img = new Image();
            img.onload = function() {
               
                var width = document.body.clientWidth - 400;
                var height = document.body.clientHeight - 200;
                var scale = img.width / img.height;
                var screenScale = width / height;

                var imageWidth = 300;
                var imageHeight = 300 / scale;

                //拖拽图片等比例放大缩小的原理就是不断设置图片的宽高
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, (width - imageWidth) / 2 , (height - imageHeight) / 2, imageWidth, imageHeight);
                ctx.beginPath();
                ctx.moveTo((width - imageWidth) / 2, (height - imageHeight) / 2);
                ctx.lineTo(width / 2 + imageWidth / 2, (height - imageHeight) / 2);
                ctx.lineTo(width / 2 + imageWidth / 2, height / 2 + imageHeight / 2);
                ctx.lineTo((width / 2 - imageWidth / 2), (height + imageHeight) / 2);
                ctx.strokeStyle = 'rgb(255, 0, 0)';
                ctx.stroke();

                
            }
            img.src = imageUrl;
        }
    }
}


</script>

<style>
.show-image {
    width: 400px;
    height: 200px;
}
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas {
    border: 1px solid red;
}
</style>