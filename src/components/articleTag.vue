<template>
  <div class="article-tag" :class="articletags" @click="chooleOne" >{{articletags}}</div>
</template>
<script>
    export default {
        name:"articletag",
        props:['articletags'],
        data(){
            return {}
        },
        methods:{
            chooleOne(){
                this.$emit('oneCategory',this.articletags)
            }
        }
    }
</script>
<style scoped>
.article-tag{
    flex:0 0 auto;
    width:270px;
    height:160px;
    position: relative;
    margin:10px 15px;
    border-radius: 4px;
    box-shadow: 0 1px 12px -3px #232323;
    text-align: center;
    font-size:26px;
    line-height: 156px;
    color:#fefefe;
    cursor: pointer;
    transition: all 0.3s ease;
}
.article-tag:hover{
    transform: scale(1.05,1.05);
}
@media only screen and (max-width: 736px){
    .article-tag{
        width:94%;
    }
}
</style>

