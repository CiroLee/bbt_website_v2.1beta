<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  -webkit-tap-highlight-color: transparent;
}
body{
  margin:0;
  padding:0;
  background: #efefef;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/**滚动条美化**/
::-webkit-scrollbar {
    width:6px;
    height:6px;
    z-index:100;
	}
  /*滚动条整体样式*/
::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
	} /* 滚动条的滑轨背景颜色 */

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(105, 105, 105, 0.3);
	} /* 滑块颜色 */
::-webkit-scrollbar-thumb:hover{
  background: rgba(105, 105, 105, 0.6)
}
</style>
