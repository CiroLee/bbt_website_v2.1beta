<template>
  <div class="coding-container">
      <div class="coding-snippet" v-if="isPC">
        <div class="chat-block" ref="chatblock">
            <ul ref="licontent">
                <li class="chat-output" v-for="(item,index) in robotchat" :key="index">
                    <img class="robot-avatar" src="../assets/images/robot.png" alt="">
                    <span class="bubble-bot">▲</span>
                    <span class="text-bubble">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="input-block">
            <div class="inputbar">
                <div class="outer-input">
                    <input type="text" placeholder="input something,like Hello " v-model="textinput" @keyup.enter="questionFormat">
                </div>
                <span class="text-send fa fa-send" @click="questionFormat"></span>
            </div>
        </div>
      </div>
      <div class="coding-phone" v-else>
          <p>手机无法体验聊天机器人，如需体验，请切换PC或平板电脑！</p>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import axios from 'axios';
export default {
  name:'codingsnippet',
  data(){
      return {
          textinput:'',
          isPC:true,
          defaultAnswer:'我不能回答这个问题~',
          robotchat:[],
          dictionary:[]
      }
  },
  created(){
      let ua = navigator.userAgent;
      if(ua.match(/(iPhone|iPod|Android|ios)/i)){
          this.isPC = !this.isPC;
      }

  },
  mounted(){
      //初始化滚动
      this.$nextTick(()=>{
          if(this.isPC){
              let selector = this.$refs.chatblock;
              this.scroll = new BScroll(selector,{
                  click:true
              });
          }
      });
      //获取语料库
      axios.get('static/mydata/corpora/corpora.json').then(res=>{
          this.dictionary = res.data.dictionary;
      })
  },
  methods:{
      scrollToLastElement(){
        if(this.scroll){
            this.scroll.refresh();
            let toelement = this.$refs.licontent.lastChild;
            this.scroll.scrollToElement(toelement,500);
            // console.log(toelement)
        }
      },
      questionFormat(){
          let dic = this.dictionary;
          let question = this.textinput.toLowerCase();
          let keys = [];
          for(let index in dic){
              keys = keys.concat(dic[index].keys);
          }
          
          if(keys.indexOf(question) > -1){
              dic.forEach(element=>{
                  if(element.keys.indexOf(question) > -1){
                      this.textinput = element.answer;
                      this.robotchat.push(this.textinput);
                      this.textinput = "";
                  }
              })
          }
          else if(this.textinput != ""){
              this.textinput = this.defaultAnswer;
              this.robotchat.push(this.textinput);
              this.textinput = "";
          }
          
      }
  },
  updated(){
      this.scrollToLastElement();
  }
}
</script>
<style scoped>
.coding-snippet{
    width: 100%;
    height:300px;
    position: relative;
    display: flex;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
ul, li{
  list-style-type: none;
  list-style: none;
  margin:0;
  padding:0;
  overflow: hidden;
}
.chat-block, .input-block{
    flex:1;
    height:100%;
    display: inline-block;
    position: relative;
}
.chat-block{
    width:50%;
    position: relative;
    overflow: hidden;
    border-right:2px dashed #46535f;
    box-sizing: border-box;
}

.chat-output{
    width:80%;
    margin:8px 2px;
    position: relative;
    overflow: hidden;
}
.robot-avatar{
    width:50px;
    height:50px;
    position: absolute;
}
.bubble-bot{
    position: absolute;
    left:46px;
    top:10px;
    font-size:18px;
    color:#e5e4e3;
    transform: rotate(-90deg);
}
.text-bubble{
    display: inline-block;
    position: relative;
    padding:10px;
    margin:8px;
    margin-left:58px;
    background: #e5e4e3;
    border-radius: 4px;
    user-select: text;
}
.inputbar{
    width:60%;
    height:60px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border:1px solid rgba(65, 65, 65, 0.66);
    box-sizing: border-box;
    display: flex;
}
.outer-input{
    flex:1;
}
.inputbar input{
    width:100%;
    height:100%;
    border:0;
    padding:0 10px;
    font-size:20px;
    outline: none;
    background: rgba(11, 11, 11, 0.3);
    box-sizing: border-box;
    color:#edeaea;
}
.inputbar span{
    width:60px;
    height:100%;
    background: #2f9362;
    cursor: pointer;
}
.text-send{
    text-align: center;
    line-height: 60px;
    font-size:2em;
    color:#f3f3f3;
}
.coding-phone{
    overflow: hidden;
    background: #46535f;
}
.coding-phone p{
    margin:10px 0;
    color:#d7d7d7;
    padding:2px 10px;
    
}
</style>



