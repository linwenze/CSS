//about.vue
<template>
  <div class="wrap">
            <div class="square">
                <div class="picture"></div>
                <div class="picture"></div>
                <div class="picture"></div>
                <div class="picture"></div>
                <div class="picture"></div>
                <div class="picture"></div>
            </div>
        </div>
</template>
<style scope>
            .wrap {
                width: 400px;
                height: 400px;
                margin: 30px auto;
            }

            .wrap .square {
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                position: relative;
                animation: 3s spin linear infinite;
            }

            @keyframes spin {
                0% {
                    transform: rotateY(0deg) rotateX(0deg);
                }
                50% {
                    transform: rotateY(-180deg) rotateX(18deg);
                }
                100% {
                    transform: rotateY(-360deg) rotateX(0deg);
                }
            }

            .wrap .square .picture {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            .wrap .square .picture:nth-of-type(1) {
                transform: rotateY(0deg) translateZ(200px);
                background: rgba(165, 92, 162, .5);
            }

            .wrap .square .picture:nth-of-type(2) {
                transform:rotateY(90deg)  translateZ(200px);
                background: rgba(65, 192, 162, .5);
            }

            .wrap .square .picture:nth-of-type(3) {
                transform: rotateY(180deg) translateZ(200px);
                background: rgba(65, 92, 62, .5);
            }

            .wrap .square .picture:nth-of-type(4) {
                transform:rotateY(270deg)  translateZ(200px);
                background: rgba(65, 92, 42, .5);
            }

            .wrap .square .picture:nth-of-type(5) {
                transform: rotateX(90deg) translateZ(200px);
                background: rgba(165, 12, 162, .5);
            }

            .wrap .square .picture:nth-of-type(6) {
                transform:  rotateX(270deg) translateZ(200px);
            }
</style>
