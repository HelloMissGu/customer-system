<template>
<div class="contact">
    <my-header></my-header>
    <el-row class="con-content">
        <el-col :span="4">
            <div class="extra"></div>
        </el-col>
        <el-col :span="16">
            <div class="con-main">
                <div class="display-between back-white line">
                    <div class="display con-top">
                        <p class="all-contact" @click="showAll" >所有联系人</p>
                        <input type="text" placeholder="请输入订单号/客户手机号">
                        <el-button type="primary">查询</el-button>
                    </div>
                    <div class="add-btn">
                         <el-button type="primary">新增</el-button>
                    </div>
                </div>
                
                <el-col :span="6" class="back-white heigth-vh border-right">
                <el-menu
                    default-active="2"
                >
                     <el-menu-item index="1">
                         <div class="display">
                            <i class="myicon icon-lianxiren"></i>
                            <span slot="title">常用联系人</span>
                         </div>
                    </el-menu-item>

                     <el-submenu index="2">
                        <template slot="title">
                        <i class="myicon icon-zuzhi"></i>
                        <span>按组织架构</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1" >
                            <div>
                                <span class="com-title">
                                    深圳xxx公司
                                </span>
                                <div class="edit-btn">
                                    <img class="jia-jian" src="../../static/imgs/jia.png" alt="">
                                </div>
                               
                            </div>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <div>
                                <span class="com-title">
                                客服部1
                                </span>
                                <div class="edit-btn">
                                    <img class="jia-jian" src="../../static/imgs/jia.png" alt="">
                                    <img class="jia-jian" src="../../static/imgs/jian.png" alt="">
                                </div>
                            </div>
                        </el-menu-item>
                        <el-menu-item index="1-3">
                            <div>
                                <span class="com-title">
                                客服部2
                                </span>
                                <div class="edit-btn">
                                    <img class="jia-jian" src="../../static/imgs/jia.png" alt="">
                                    <img class="jia-jian" src="../../static/imgs/jian.png" alt="">
                                </div>
                            </div>
                        </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                 </el-menu>
                 </el-col>

                <el-col :span="18">
                    <div class="user-container">
                        <div  v-for="(item,index) in userList" :key="index"  @click="sendMsg(index)"  @contextmenu.prevent="actionsEdit(index)">
                        <el-col :xl="6" class="back-white card display"   >
                            <img class="user-head" :src="item.img" alt="">
                            <span>{{item.userName}}</span>
                        </el-col>
                        <el-col class="send-msg" v-if="initIndex == index ">
                            <div  >
                            
                            </div>
                        </el-col>
                        
                        </div>
                    </div>
                    
                    <el-popover
                        placement="bottom"
                        title="标题"
                        width="200"
                        trigger="click"
                        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                        <el-button slot="reference">click 激活</el-button>
                    </el-popover>
                </el-col>

            </div>
        </el-col>
        <el-col :span="4">
            <div  class="extra"></div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import myHeader from '../components/header'
export default {
    components:{myHeader},
    data(){
        return{
             showAll:true ,
             userList:[
                 {img:'../../static/imgs/head.jpg',userName:'张三疯'},
                 {img:'../../static/imgs/head.jpg',userName:'张三疯'},
                 {img:'../../static/imgs/head.jpg',userName:'张三疯'},
                 {img:'../../static/imgs/head.jpg',userName:'张三疯'},
                 {img:'../../static/imgs/head.jpg',userName:'张三疯'},
             ],
            showMsg:false,
            initIndex:''
        }
    },
    methods:{
        sendMsg(index){
            console.log(1)
            this.initIndex = index
            this.showMsg = !this.showMsg
        },
        actionsEdit(index){
            this.initIndex = index
            console.log(2)
        },
    }
}
</script>
<style lang="scss">
.myicon{
    font-size: 20px;
    padding-right: 15px;
}
    .contact{
        .con-content{
            .extra{
                height: 100vh;
            }
           .con-main{
               height: 100vh;
               background-color: #f4f7f9;
               border: 1px solid #f1f3f4;
               .line{
                   border-bottom: 1px solid #eaeaea;
               }
               .con-top{
                   height: 92px;
                   input{
                       width: 277px;
                       height: 32px;
                       box-shadow: 0px 0px 18px 0px rgba(155, 155, 155, 0.15);
                       border-radius: 3px;
                       border: 1px solid #f1f1f1;
                       padding-left: 15px;
                       outline: none;
                   }
                   .all-contact{
                       width: 144px;
                       cursor: pointer;
                   }
                   .active{
                       color: #1e87f0;
                   }
               }
                .add-btn{
                    padding-right: 60px;
                }
               .com-title{
                   padding-left: 80px;
               }
                .edit-btn{
                    float: right;
                    padding-left: 60px;
                }
                .jia-jian{
                    width: 24px;
                    height: 24px;
                }
                .user-container{
                    padding: 30px;
                    .card{
                        position: relative;
                        width: 214px;
                        height: 80px;
                        margin: 0 10px 10px 0;
                        .user-head{
                            width: 50px;
                            height: 50px;
                            border-radius: 25px;
                        }
                    }
                    .send-msg{
                        position: relative;
                        top: 90px;
                        left: -214px;
                        width: 277px;
                        height: 231px;
                        background-color: #ffffff;
                        box-shadow: 0px 2px 18px 0px 
                            rgba(85, 85, 85, 0.14);
                        border-radius: 3px;
                        z-index: 100;
                    }
                }
           }
        }
    }

    .el-button--primary{
        height: 32px;
        line-height: 8px;
    }
    .el-menu{
        border:none;
    }
    .el-menu-item{
        border-bottom:1px solid #eaeaea;
    }
    .el-submenu .el-menu-item{
        padding:0;
    }
</style>