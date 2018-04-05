<template>
  <div class="bbt-article-container">
    <!--文章主体-->
    <article class="bbt-article">
      <div class="article-content" v-html="md2html" v-highlight ></div>
    </article>
    <!--说明-->
    <div class="bbt-remarks">
      <span class="copied-text" >如需转载，请注明出处：<a :href="currentURL" target="_blank">{{currentURL}}</a></span>
    </div>
    <!--赞赏按钮-->
    <div class="support-btn" @click="supportShow = true"><strong>赞赏支持</strong></div>
    <!--赞赏二维码-->
    <transition name="supportcode">
      <support-qrcode v-show="supportShow" @listenSUpporttEvent="closeSupport"></support-qrcode>
    </transition>
  </div>
</template>
<script>

import marked from 'marked';
import axios from 'axios';
import SupportQrcode from '@/components/support';

export default {
  name:'bbtArticle',
  data(){
    return {
      content:"",
      currentURL:"",
      supportShow:false,
    }
  },
  computed:{
    md2html(){
      return marked(this.content)
    }
  },
  created(){
    this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  methods:{
    closeSupport(data){
      this.supportShow = data;
    },
    fetchData(){
      let path = 'static/mydata/articles/';
      let link = path + this.$route.query.url + '.md';
      axios.get(link).then(res=>{
        this.content = res.data;
      })
      .catch(error=> {
      this.$router.push({path:'error'});
    });
    //获取当前地址
    this.currentURL = window.location.href;
    }
  },
  components:{
    SupportQrcode
  }
}
</script>
<style>
.bbt-article-container{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fcfcfc;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling : touch;
}

.bbt-article{
  width:80%;
  position: relative;
  margin:0 auto;
  margin-top:10%;
  box-sizing: border-box;
  box-shadow: 0 0 20px 2px #efefef;
  background: #fff;
  line-height: 2;
  overflow: hidden;
}
.article-content{
  width:90%;
  margin:10px auto;
  overflow: hidden;
}
p{
  margin:6px 0;
}
pre{
  margin:0;
}
code{
  margin:10px 0;
  border-radius: 2px;
  font-size:14px;
  font-family: Consolas, Monaco, courier, monospace, sans-serif;
}
blockquote{
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    border-left: 6px solid #bdbfbe;
    padding: 2px 10px;
    background: #f7f7f7;
}
.bbt-remarks{
  width: 80%;
  min-height:50px;
  position: relative;
  margin:20px auto;
  margin-top:30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius:30px;
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  box-shadow: 2px 4px 18px -2px #cccbcb;
}
.copied-text{
  padding:20px;
  color:#808080;
}
.copied-text a{
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.support-btn{
  width:150px;
  height:56px;
  position: relative;
  margin:0 auto;
  margin-bottom:20px;
  border-radius: 56px;
  background: #F43D16;
  text-align: center;
  font-size: 20px;
  line-height: 56px;
  color:#fff;
  user-select:none;
  cursor: pointer;
  box-shadow: 1px 2px 8px -2px #9b3823;
}
.supportcode-enter-active, .support-leave-active{
  transition: opacity 0.5s;
}
.supportcode-enter, .supportcode-leave-to{
  opacity: 0;
}

@media only screen and (max-width: 980px){
  .bbt-article{
    width:100%;
    margin-top:20px;
    border:none;
  }
  .bbt-remarks{
    width: 96%;
  }
}
</style>


