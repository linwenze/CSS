//about.vue
<template>
  <div class="wrap">
    <imgCut ref="Uppicinput" @callback="callback" :width="200" :height="200">
    <div>上传按钮</div>
</imgCut>
<img :src="imgsrc">
    
  </div>
</template>  
<script>
import {imgCut} from 'vue-imgcut'

export default {
    data(){
        return{
            imgsrc:'',
        }
    },
    components:{
        imgCut
    },
    methods:{
        callback(img){
            this.imgsrc=img
            //console.log(imgss)
        }
    }
}

</script>
<style scoped lang="less">
.wrap{font-size:24px}
.borderradius{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  50% / 100% 100% 0 0;
}
.borderradius2{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  100% 0 0 100% / 50%;
}
.borderradius3{
  width:200px;
  height:200px;
  margin:30px;
  background: yellow;
  /* border-radius: 100px; */
  border-radius:  100% 0 0 0;
}



</style>
