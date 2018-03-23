<template>
  <div class="main-container">
      <!--topbar-->
      <div class="topbar">
          <!--侧栏toggle按钮-->
          <div class="togglebarbtn" @click="toggleCatalog">
              <i class="fa fa-bars"></i>
          </div>
          <!--分享按钮-->
          <div class="sharebtn" @click="toggleShareQrcode">
              <i class="fa fa-share-alt"></i>
          </div>
      </div>
      <!--二维码分享组件-->
      <transition name="qrcode" >
          <div class="qrcode-block" v-if="sharecode">
            <i class="fa fa-close" @click="toggleShareQrcode"></i>
            <span>扫码分享</span>
            <qrcode :value="shareurl" tag="img" :options="{size:200}"></qrcode>
          </div>
      </transition>
      <!--侧栏目录组件-->
      <transition name="sidecatalog">
          <side-catalog v-if="iscatalog" @closeside="reveiveSideItemEvent"></side-catalog>
      </transition>
      <!--mask遮罩-->
      <transition name="fade">
          <div class="mask" v-if="iscatalog" @click="toggleCatalog"></div>
      </transition>
      <router-view></router-view>
  </div>
</template>
<script>
import sideCatalog from '@/components/sideCatalog';
import VueQrcode from '@xkeshi/vue-qrcode';
export default {
  name:"mainpage",
  data(){
      return {
          shareurl:'http://www/nanhaibo.com/bbt_tech',
          iscatalog:false,
          sharecode:false
      }
  },
  mounted(){
      if(this.$route.name == 'Main'){
          this.$router.push({path:'home'});
      };
  },
  methods:{
      reveiveSideItemEvent(msg){
          this.iscatalog = msg;
      },
      toggleShareQrcode(){
          this.sharecode = !this.sharecode;
          this.shareurl = window.location.href;
      },
      toggleCatalog(){
          this.iscatalog = !this.iscatalog;
          this.sharecode = false;
      }
  },
  components:{
      sideCatalog,
      qrcode:VueQrcode
  }
}
</script>
<style scoped>
.main-container{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: auto;
}

.topbar{
    width: 100%;
    height:50px;
    position:fixed;
    top:0;
    background: #3cb87c;
    z-index:11;
}
.togglebarbtn, .sharebtn{
    width:50px;
    height:100%;
    position: absolute;
    text-align: center;
    line-height: 50px;
    /* background: red; */
    font-size: 20px;
    color:#fff;
    cursor: pointer;
}
.sharebtn{
    right:0;
}
.mask{
    width: 100%;
    height: 100%;
    top:0;
    position: fixed;
    background: rgba(51, 51, 51, 0.5);
    z-index:11;
}
.qrcode-block{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
    z-index:10;
    overflow: hidden;
}
.qrcode-block span{
    text-align: center;
    display: block;
    padding:4px 0;
}
.qrcode-block img{
    margin:6px 16px;
}
.qrcode-block i{
    position: absolute;
    right:10px;
    top:6px;
    cursor: pointer;
    color:#ccc;
}
.qrcode-block i:hover{
    color:#6e6e6e;
}
.qrcode-enter-active{
    animation:qrcodebox 0.5s ease;
    animation-fill-mode: forwards;
}
.qrcode-leave-active{
    animation:qrcodebox 0.5s reverse;
    animation-fill-mode: forwards;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.sidecatalog-enter-active{
    animation:catalog 0.35s ease-out;
    animation-fill-mode: forwards;
}
.sidecatalog-leave-active{
    animation: catalog 0.35s reverse;
    animation-fill-mode: forwards;
}
@keyframes catalog {
    from {
        transform: translateX(-240px)
    }
    to{
        transform:translateX(0px)
    }
}
@keyframes qrcodebox {
    from {
        transform: translate(-50%,-100%);
        opacity: 0;
    }
    to {
        transform: translate(-50%,-50%);
        opacity: 1;
    }
}
</style>


