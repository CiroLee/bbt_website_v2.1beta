<template>
  <div class="articlelist-container">
      <div class="articlebar">
          <li class="tag-item" data-tag="all" @click="tagItemClick($event)">全部</li>
          <li class="tag-item" data-tag="category"  @click="tagItemClick($event)">分类</li>
          <li class="tag-item" data-tag="recommand"  @click="tagItemClick($event)">推荐</li>
      </div>
      <!--文章卡片组件-->
      <article-card @tagEvent="onecategoryEvent" v-if="!iscategory" :articlelist="item" v-for="item in articlelist" :key="item.id"/>
      <!--分类组件-->
      <div class="category-container" v-if="iscategory">
          <article-tag @oneCategory="onecategoryEvent" v-for="(item,index) in articletags" :key="index" :articletags="item"/>
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
          articlelist:[],
          articletags:[],
          iscategory:false
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
          let target = e.currentTarget;
          let tag = e.currentTarget.dataset.tag;
          let tagitems = document.getElementsByClassName('tag-item');
          target.classList.add('tag-active')
          for(let i =0;i < tagitems.length;i++){
              if(target != tagitems[i]){
                  tagitems[i].classList.remove('tag-active')
              }
          }
          
          switch(tag){
              case 'all':
                this.iscategory = false;
                this.getAllArticleList();
              break;
              case "category":
                this.iscategory = true;
              break;
              case "recommand":
              this.iscategory = false;
                this.getRecommandArticle();
              break;
          }
      },
      getAllArticleList(){
          axios.get('static/mydata/configure/articlelist.json').then(res=>{
            this.articlelist = res.data.articlelist;
            //提取标签
            this.articlelist.forEach(value=>{
              this.articletags = this.articletags.concat(value.tags);
            });
            this.articletags = Array.from(new Set(this.articletags));
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
      },
      onecategoryEvent(msg){
          
          axios.get('static/mydata/configure/articlelist.json').then(res=>{
              let templist = res.data.articlelist.filter(value=>{
                  return value.tags.indexOf(msg) > -1
              });
              this.iscategory = false;
              this.articlelist = templist;
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
    color:#ef8d09;
    font-weight: bold;
}
.tag-active{
    background: #545455;
    border-bottom: 2px solid #ef8d09;
}
.category-container{
    width:94%;
    max-width: 1200px;
    position: relative;
    margin:0 auto;
    overflow: hidden;
    display: flex;
    flex-wrap:wrap;
    /* background: aqua; */
}

@media only screen and (max-width: 736px){
  .category-container{
      justify-content: center;
  }
}
</style>


