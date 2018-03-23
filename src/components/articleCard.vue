<template>
  <div class="article-card" >
      <!--标题栏目-->
      <div class="title-block">
          <span>{{articlelist.lasttime}}</span>
          <router-link class="article-title" :to="{name:'article',query:{url:articlelist.url}}">
              <h2>{{articlelist.title}}</h2>
          </router-link>
      </div>
      <!--摘要栏-->
      <div class="article-abstract">{{articlelist.abstract}}</div>
      <!--标签栏-->
      <div class="tags-block">
          <li class="item-tag" :class="value" v-for="(value,index) in articlelist.tags" :key="index" @click="tagClickEvent(value)">{{value}}</li>
      </div>
  </div>
</template>
<script>
export default {
  name:'articlecard',
  props:['articlelist'],
  methods:{
      tagClickEvent(value){
          this.$emit('tagEvent',value);
      }
  }
}
</script>
<style scoped>
.article-card{
    width:94%;
    max-width:1200px;
    position: relative;
    margin:10px auto;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    background: #fefefe;
    overflow: hidden;
}
.title-block{
    overflow: hidden;
}
.title-block span{
    padding:6px;
    display: block;
    color:#7e7b7b;
}
.title-block h2{
    margin:0;
    margin-bottom:6px;
    padding:0 6px;
}
a{
    color:#333;
    text-decoration: none;
}
.router-link-active{
    color:#2a49d1;
}
.article-abstract{
    margin:0 6px 14px 6px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color:#6c6b6b;
}
.tags-block{
    margin:6px;
    /* margin-bottom:0; */
    padding-top:6px;
    position: relative;
    border-top:1px solid #ccc;
}
.item-tag{
    min-width: 70px;
    display: inline-block;
    padding:6px 10px;
    margin:3px 2px;
    color:#fefefe;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
}
.item-tag:hover{
    box-shadow: 0 6px 6px -2px #beb9b9;
}
.article-title:hover{
    color:#0053ff;
}


</style>


