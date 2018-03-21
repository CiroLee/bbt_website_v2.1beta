<template>
  <div class="home-container">
      <!--codeingsnippet-->
      <code-snippet />
      <!--推荐分割线-->
      <div class="recommend-line">
          <i class="fa fa-star"></i>
          <span>推荐</span>
      </div>
      <!--文章卡片-->
      <article-card :articlelist="item" v-for="item in recommendarticles" :key="item.id"/>
  </div>
</template>
<script>
import ArticleCard from '@/components/articleCard';
import axios from 'axios';
import CodeSnippet from '@/components/coding';

export default {
  name:'home',
  data(){
      return {
          recommendarticles:[]
      }
  },
  created(){
      //过滤星级文章
      axios.get('static/mydata/configure/articlelist.json').then(res=>{
          let list = res.data.articlelist;
          list.forEach(value=>{
              if(value.star >3){
                  this.recommendarticles.push(value);
              }
          })
      });
  },
  components:{
      ArticleCard,
      CodeSnippet
  }
}
</script>
<style scoped>
.home-container{
    margin-top:50px;
    overflow: auto;
}
ul , li{
  list-style-type: none;
  list-style: none;
  margin:0;
  padding:0;
}
.recommend-line{
    width:94%;
    max-width: 1200px;
    position: relative;
    margin:4px auto;
    padding:4px 0;
    border-bottom:2px solid rgba(18, 120, 215, 0.8);
    /* background: pink; */
}
.recommend-line i, span{
    color:#FF6F00;
    font-size: 18px;
}
</style>


