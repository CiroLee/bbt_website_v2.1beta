<template>
  <div class="articlelist-container">
      <div class="articlebar">
          <li class="tag-item" data-tag="all" @click="tagItemClick($event)">全部</li>
          <li class="tag-item" data-tag="category"  @click="tagItemClick($event)">分类</li>
          <li class="tag-item" data-tag="recommand"  @click="tagItemClick($event)">推荐</li>
      </div>
      <!--文章卡片组件-->
      <article-card :articlelist="item" v-for="item in articlelist" :key="item.id"/>
      <!--分类组件-->
      <div class="category-container">
          <article-tag />
          <article-tag />
          <article-tag />
          <article-tag />
          <article-tag />
      </div>
  </div>
</template>
<script>
import ArticleCard from '@/components/articleCard';
import ArticleTag from '@/components/articleTag';
import axios from 'axios';

export default {
  name:'articlelist',
  data(){
      return {
          articlelist:[]
      }
  },
  components:{
      ArticleCard,
      ArticleTag
  },
  created(){
      this.getAllArticleList();
  },
  methods:{
      tagItemClick(e){
          let tag = e.currentTarget.dataset.tag;
          switch(tag){
              case 'all':
                this.getAllArticleList();
              break;
              case "category":
              break;
              case "recommand":
                this.getRecommandArticle();
              break;
          }
      },
      getAllArticleList(){
          axios.get('static/mydata/configure/articlelist.json').then(res=>{
            this.articlelist = res.data.articlelist;
        });
      },
      getRecommandArticle(){
          axios.get('static/mydata/configure/articlelist.json').then(res=>{
                this.articlelist = [];
                let list = res.data.articlelist;
                list.forEach(value=>{
                    if(value.star >3){
                        this.articlelist.push(value);
                    }
                })
        });
      }
  }
}
</script>
<style scoped>
ul , li{
  list-style-type: none;
  list-style: none;
  margin:0;
  padding:0;
}
.articlelist-container{
    margin-top:50px;
    overflow: hidden;
}
.articlebar{
    width:94%;
    max-width:1200px;
    height: 40px;
    position: relative;
    margin:0 auto;
    margin-top:6px;
    display: flex;
    background: #818896;
}
.tag-item{
    flex:1;
    height: 100%;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    color:#fefefe;
    text-decoration: none;
}
.tag-item:hover{
    background: #686c74;
    border-bottom:2px solid red;
}
.category-container{
    width:94%;
    max-width: 1200px;
    height:200px;
    position: relative;
    margin:0 auto;
    overflow: hidden;
    display: flex;
    flex-wrap:wrap;
    background: aqua;
}

@media screen and (orientation:portrait){
  .category-container{
      justify-content: center;
  }
}
</style>


