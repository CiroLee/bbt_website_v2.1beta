<template>
    <div class="sidecatalog">
        <div class="author-brief">
            <img src="../assets/images/logo.jpg" alt="" @click="avatarEvent">
            <span class="breif-text">彩虹棉花棒棒糖</span>
            <span class="breif-text" style="color:#e8e8e8">ciromail@126.com</span>
            <!-- <i class="bbt_qrcode fa fa-qrcode"></i> -->
        </div>
        <router-link to="/home" tag="li" class="catalog-item" @click.native="closeSide">
            <i class="fa fa-home"></i>主页
        </router-link>
        <router-link to="articlelist" tag="li" class="catalog-item" @click.native="closeSide">
            <i class="fa fa-book"></i>文章
        </router-link>
        <a href="https://github.com/CiroLee" @click="closeSide">
            <li class="catalog-item">
                <i class="fa fa-github-alt"></i>Github
            </li>
        </a>
    </div>
</template>
<script>
export default {
  name:'sidecatalog',
  data(){
      return {
          
      }
  },
  methods:{
      closeSide(){
          this.$emit('closeside',false);
      },
      avatarEvent(){
        this.$router.push({name:'article',query:{url:'aboutme'}});
        this.closeSide();
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
a{
    text-decoration: none;
}
.sidecatalog{
    width: 240px;
    height:100%;
    position:fixed;
    background: #fcfcfc;
    z-index: 13;
}
.author-brief{
    width: 100%;
    height:180px;
    position: relative;
    background: #3cb87c;
}
.author-brief img{
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 80px;
    box-sizing: border-box;
    border:2px solid #fff;
    margin:10% 10px 10px 20px;
    cursor: pointer;
}
.breif-text{
    display: block;
    color:#fff;
    text-indent: 20px;
}
.bbt_qrcode{
    font-size: 24px;
    position: absolute;
    right: 8px;
    bottom: 10px;
    color:#636464;
    cursor: pointer;
}
.catalog-item{
    padding:10px;
    cursor: pointer;
    font-size: 18px;
    color:#636464;
}
.catalog-item i{
    padding:0 10px;
    font-size: 20px;
}
.catalog-item:hover{
    background: #EFEFEF;
    color:#2E895C;
}

</style>


