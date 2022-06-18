<template>
 <div class="SideBar">
  SideBar
 </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
.SideBar{
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  z-index: 1;
  padding-top: 90px;
  /* 头部header 60 大容器边框一般是30 合计 90px */
  box-sizing: border-box;
  background-color: gainsboro;
}
</style>