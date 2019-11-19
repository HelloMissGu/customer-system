<template>
  <div class="header">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1f2731"
        text-color="#fff"
    >
    <el-row class="head-bar">
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="4" class="display grid-content">
        <div class="head-msg">
            <p class="head-title">深圳xxx公司</p>
            <p class="head-time">2019-09-25 12:00</p>
        </div>
        <div class="head-img grid-content">
          <img class="round" src="../../static/imgs/head.jpg" alt="">
        </div>
      </el-col>
      <el-col :span="8" class="display">
        <el-menu-item  index="1" :class="this.activeIndex==1?'itemStyle':''">
          <div class="item-img">
            <img src="../../static/imgs/message.png" alt="">
          </div>
          消息
        </el-menu-item>
        <el-menu-item index="2" :class="this.activeIndex==2?'itemStyle':''">
          <div class="item-img">
          <img src="../../static/imgs/devide.png" alt="">
          </div>
          客服分配
        </el-menu-item>
        <el-menu-item index="3" :class="this.activeIndex==3?'itemStyle':''">
          <div class="item-img">
          <img src="../../static/imgs/contant.png" alt="">
          </div>
          通讯录
        </el-menu-item>
        <el-menu-item index="4" :class="this.activeIndex==4?'itemStyle':''">
          <div class="item-img">
          <img src="../../static/imgs/setting.png" alt="">
          </div>
          店铺设置
        </el-menu-item>
        <el-menu-item index="5" :class="this.activeIndex==5?'itemStyle':''">
          <div class="item-img">
          <img src="../../static/imgs/product.png" alt="">
          </div>
          产品介绍
        </el-menu-item>
      </el-col>
      <el-col :span="4"  class="display grid-content">
        <div></div>
         <el-button  type="primary" plain>退出</el-button>
      </el-col>
      <el-col :span="4">
         <div class="grid-content"></div>
      </el-col>
    </el-row>
  
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
      return{
          activeIndex: 1,
         
      }
  },
  methods:{
     handleSelect(key, keyPath) {
        this.activeIndex = key
    }
  }

}
</script>

<style lang="scss">
.head-bar{
  height: 72px;
  .grid-content{
    height:72px;
  }
  .head-msg{
    color: #fff;
    cursor: pointer;
    .head-title{
      font-size: 20px;
      padding-bottom: 5px;
    }
    .head-time{
      font-size: 14px;
    }
  }
  .head-img{
    width: 40px;
    height: 40px;
    .round{
      border-radius: 20px;
    }
  }
  .itemStyle  {
    background-color:rgb(30, 135, 240) !important;
    border-radius:10px;
    height:60px !important;
    line-height:60px !important;
    color:#fff !important;
    
  }
}

.item-img{
    width: 24px;
    height: 24px;
    img{
      width: 24px;
      height: 24px;
    }
}


.el-menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72px;
  line-height: 72px;
}

.el-button--primary.is-plain{
  background: none;
  border-color: #1e87f0;
}

</style>
