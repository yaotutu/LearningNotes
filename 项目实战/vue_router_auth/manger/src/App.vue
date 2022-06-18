<template>
  <div id="app">
    <h1>aaa</h1>
    <Mheader/>
    <SideBar />
    <PageBoard />
  </div>
</template>

<script>
import Mheader from "./components/Mheader"
import SideBar from "./components/SideBar"
import PageBoard from "./components/PageBoard"
import "./assets/css/common.css"
export default {
  name: 'App',
  components: {
    Mheader,
    SideBar,
    PageBoard
  }
}
</script>
<style lang="less">


</style>
