//about.vue
<template>
  <div class="wrap">
        <div class="tuoluo">
            <div class="tuoluo-top">
                <div class="face-top"></div>
                <div class="face-top"></div>
                <div class="face-top"></div>
                <div class="face-top"></div>
                <div class="face-top"></div>
                <div class="face-top"></div>
            </div>

            <div class="tuoluo-bottom">
                <div class="face-bottom"></div>
                <div class="face-bottom"></div>
                <div class="face-bottom"></div>
                <div class="face-bottom"></div>
                <div class="face-bottom"></div>
                <div class="face-bottom"></div>
            </div>
        </div>
    </div>
</template>
<style scope>
.wrap {
  width: 200px;
  height: 400px;
  margin: 30px auto;
}
/* 
        flat         所有子元素在2d平面进行呈现；
        preserve-3d 所有子元素在3d空间中呈现；
     */
@keyframes tuoluo {
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
.wrap .tuoluo {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation:tuoluo 3s linear infinite;
}
.wrap .tuoluo .tuoluo-top,
.wrap .tuoluo .tuoluo-bottom {
  position: relative;
  width: 100%;
  height: 50%;
}
.tuoluo-top .face-top {
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  border-color: transparent;
  border-width: 0 50px 170px 50px;
  border-bottom-color: rgba(65, 92, 162, 0.5);
  transform-origin: center bottom;
  top: 29px;
}
.tuoluo-top .face-top:nth-of-type(1) {
  transform: rotateY(0deg) translateZ(88px) rotateX(31deg);
}
.tuoluo-top .face-top:nth-of-type(2) {
  transform: rotateY(60deg) translateZ(88px) rotateX(31deg);
}
.tuoluo-top .face-top:nth-of-type(3) {
  transform: rotateY(120deg) translateZ(88px) rotateX(31deg);
}
.tuoluo-top .face-top:nth-of-type(4) {
  transform: rotateY(180deg) translateZ(88px) rotateX(31deg);
}
.tuoluo-top .face-top:nth-of-type(5) {
  transform: rotateY(240deg) translateZ(88px) rotateX(31deg);
}
.tuoluo-top .face-top:nth-of-type(6) {
  transform: rotateY(300deg) translateZ(88px) rotateX(31deg);
}

.tuoluo-bottom .face-bottom {
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  border-color: transparent;
  border-width: 170px 50px 0 50px;
  border-top-color: rgba(167, 96, 96, 0.5);
  transform-origin: center top;
}
.tuoluo-bottom .face-bottom:nth-of-type(1) {
  transform: rotateY(0deg) translateZ(88px) rotateX(-31deg);
}
.tuoluo-bottom .face-bottom:nth-of-type(2) {
  transform: rotateY(60deg) translateZ(88px) rotateX(-31deg);
}
.tuoluo-bottom .face-bottom:nth-of-type(3) {
  transform: rotateY(120deg) translateZ(88px) rotateX(-31deg);
}
.tuoluo-bottom .face-bottom:nth-of-type(4) {
  transform: rotateY(180deg) translateZ(88px) rotateX(-31deg);
}
.tuoluo-bottom .face-bottom:nth-of-type(5) {
  transform: rotateY(240deg) translateZ(88px) rotateX(-31deg);
}
.tuoluo-bottom .face-bottom:nth-of-type(6) {
  transform: rotateY(300deg) translateZ(88px) rotateX(-31deg);
}
</style>
