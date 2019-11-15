<template>
  <div class="header">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
    >
        <el-menu-item index="1">
            深圳xxx公司
        </el-menu-item>
        <el-menu-item index="2">深圳xxx公司</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
      return{
          activeIndex: '1'
      }
  },

}
</script>

<style>

.el-menu-item .is-active{
    width: 96px;
	height: 61px;
	background-color: #1e87f0;
	border-radius: 3px;
}
</style>
