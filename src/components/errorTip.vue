<template>
  <div class="errortip-container">
    <img src="../assets/images/fail.png" alt="">
    <button class="backhome-btn" @click="$router.push({path:'home'})">返回主页</button>
  </div>
</template>
<script>
export default {
  name:'errortip'
}
</script>
<style scoped>
.errortip-container img{
  width:100px;
  height:100px;
  position: relative;
  display: block;
  margin:0 auto;
  margin-top:100px;
}
.backhome-btn{
  border:none;
  outline: none;
  padding:10px 20px;
  margin:10px auto;
  margin-top:30px;
  display: block;
  color:#e7e7e7;
  font-size: 17px;
  border-radius: 2px;
  cursor: pointer;
  background: #359d6b;
}
</style>


