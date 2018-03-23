<template>
  <div class="support-mask" @click.prevent="closeSupport" >
    <div class="support-qrcode">
      <span class="support-title">请我吃棒棒糖</span>
      <img class="wx_qrcode" src="static/images/wx_payin.jpg" alt="" />
      <div class="payincode_close" alt="" @click="closeSupport"></div>
      <span class="weixin">微信</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'supportqrcode',
  data(){
      return {
          supportShow:false
      }
  },
  mounted(){
  },
  methods:{
      closeSupport(){
          this.$emit('listenSUpporttEvent',false);
      }
  }
}
</script>
<style scoped>
.support-mask{
    width: 100%;
    height: 100%;
    top:0;
    position: fixed;
    background: rgba(51, 51, 51, 0.5);
}
.support-qrcode{
    width:60%;
    max-width:300px;
    position:fixed;
    top:40%;
    left:50%;
    background: #ebebeb;
    border-radius: 4px;
    text-align: center;
    transform:translate(-50%,-50%);
    z-index:100;
}
.support-title{
    display: block;
    padding:10px;
    font-size:20px;
    font-weight: bold;
    color:#333;
}
.wx_qrcode{
    width:90%;
    margin:6px;
}
.payincode_close{
    width:26px;
    height:26px;
    position: absolute;
    top:10px;
    right:10px;
    cursor: pointer;
    background: url('../assets/images/qrcode_close.png') center no-repeat;
    background-size: cover;

}
.weixin{
    margin-bottom:10px;
    display: block;
    color:#595858;
    user-select: none;
}
@media only screen and (max-width: 980px) and (orientation:landscape){
  .support-qrcode{
      width:30%;
      top:55%;
  }
}
</style>


