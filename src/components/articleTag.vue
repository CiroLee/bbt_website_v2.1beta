<template>
  <div class="article-tag"></div>
</template>
<script>
    export default {
        name:"articletag"
    }
</script>
<style scoped>
.article-tag{
    flex:0 0 auto;
    width:270px;
    height:100px;
    position: relative;
    margin:10px 15px;
    background: red;
}
@media screen and (orientation:portrait){
    .article-tag{
        width:94%;
    }
}
</style>

