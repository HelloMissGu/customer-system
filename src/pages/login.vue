<template>
  <div class="login-wrap">
      <div class="login-container">
          <div class="login-title">大客服系统</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="login-content" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名或手机">
                       <i slot="prefix" class="myicon icon-yonghu"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="param.password" placeholder="6-15位数字与字母组成">
                       <i slot="prefix" class="myicon icon-mima"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="vcode">
                    <el-input v-model="param.vcode" placeholder="请输入验证码">
                       <i slot="prefix" class="myicon icon-verify-fill"></i>
                       <i slot="suffix">
                       <canvas  class="codeimg" id="captcha"></canvas>
                       </i>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                  <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
          </el-form>
          <p class="login-tips">使用超级浏览器账号登录</p>
          <div class="login-foot">
            <router-link to="/register">立即注册</router-link>
            <router-link to="/forget">忘记密码？</router-link>
          </div>
      </div>
  </div>

  <!-- 功能说明：
  1，用户登录，可用用户名或手机号进行登录。
  2，密码，为6-15位数字与字母组成。
  3，可使用超浏账号直接登录。获取超浏账号，授权登录。

  错误提示：
  1，您输入的用户名或密码有误，请重新输入
  2，您输入的验证码错误 -->
</template>

<script>
  import Captcha from 'captcha-mini';
export default {
  data: function() {
      return {
          param: {},
          rules: {
              username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
              password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
              vcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
          },
          
      };
  },
  mounted(){
    this.getCode();
  },
  methods: {
      submitForm() {
          this.$refs.login.validate(valid => {
              if (valid) {
                  this.$message.success('登录成功');
                  localStorage.setItem('ms_username', this.param.username);
                  this.$router.push('/');
              } else {
                  this.$message.error('您输入的用户名或密码有误，请重新输入');
                  return false;
              }
          });
      },
       // 获取图形验证码
    getCode() {
        let captcha1 = new Captcha({
          lineWidth: 1, //线条宽度
          lineNum: 8, //线条数量
          dotR: 2, //点的半径
          dotNum: 30, //点的数量
          preGroundColor: [10, 80], //前景色区间
          backGroundColor: [150, 250], //背景色区间
          fontSize: 70, //字体大小
          fontStyle: "fill", //字体绘制方法，有fill和stroke
          content: "0123456789", //验证码内容
          length: 4 //验证码长度
        });
        captcha1.draw(document.querySelector("#captcha"), r => {
          this.vcode = r;
        });
      
    }
      
  },
};
</script>

<style lang="scss" scoped>
.myicon{
  color: #b2b2b2;
  font-size:16px;
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../../static/imgs/login-bg.png)no-repeat fixed center;
  background-size: cover;
  .login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 451px;
    height: 422px;
    border-radius: 10px;
    margin: -200px 0 0 180px;
    background-color: #fff;
    overflow: hidden;
    .login-title {
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: #58abfd;
      padding:37px 0 23px 0;
    }
    .login-content {
      padding: 0 52px 19px 52px;
      .codeimg{
        width: 80px;
        height: 38px;
        padding-top: 1px;
        padding-bottom: 1px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
      .login-btn {
        margin-top: 10px;
        button{
          width: 347px;
        }
      } 
    }
    .login-tips{
      color: #86bdfd;
      font-size: 16px;
    }
    .login-foot{
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 52px 0 52px;
      a{
        color: #b3b3b3;
      }
    }
  }
}



</style>