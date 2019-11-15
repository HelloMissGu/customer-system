<template>
  <div class="login-wrap">
      <div class="login-container">
          <div class="login-title">找回密码</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="login-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入手机号码">
                       <i slot="prefix" class="myicon icon-yonghu"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="param.email" placeholder="请输入密保邮箱">
                       <i slot="prefix" class="myicon icon-youxiang"></i>
                    </el-input>
                </el-form-item>
                <p v-show="tips" class="msg-tips">新密码已发送至您的邮箱，请注意查收</p>
                <div class="login-btn">
                  <el-button type="primary" @click="submitForm()">找回密码</el-button>
                </div>
          </el-form>
          <router-link class="login-tips" to="/">返回登录</router-link>
         
      </div>
  </div>

  <!-- 功能说明：

  1，找回密码，需输入用户名或手机号。
  2，邮箱做为找回密码的唯一方式。
  3，点击找回密码后，重置旧密码，并发送新的密码到用户的邮箱中。
  4，找回密码时，同一账号，一天内只允许输入密保邮箱错误5次。超过后，当天无法修改密码。

  错误提示：

  1，您输入的用户名不对
  2，您输入的手机号不对
  3，您输入的密保邮箱不对
  4，您输入的错误次数太多，该账号已被锁定，请明天再试。 -->
  
</template>

<script>
export default {
  data: function() {
      return {
          param: {},
          rules: {
              username: [{ required: true, message: '请输入用户名或手机', trigger: 'blur' }],
              email: [
                { required: true, message: '请输入密保邮箱', trigger: 'blur' },
                { type: 'email', message: '您输入的密保邮箱不对，请重新输入', trigger: ['blur', 'change'] }
              ],
          },
          tips:false
      };
  },
  methods: {
      submitForm() {
        this.tips = true
          // this.$refs.login.validate(valid => {
          //     if (valid) {
          //         this.$message.success('登录成功');
          //         localStorage.setItem('ms_username', this.param.username);
          //         this.$router.push('/');
          //     } else {
          //         this.$message.error('请输入账号和密码');
          //         console.log('error submit!!');
          //         return false;
          //     }
          // });
      },
      
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
    height: 326px;
    border-radius: 10px;
    margin: -170px 0 0 180px;
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
      .msg-tips{
          color: #db5353;
          font-size: 12px;
          margin-top: -15px;
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
    
  }
}


.el-input__prefix{
  left:8px;
}
</style>