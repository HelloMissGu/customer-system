<template>
  <div class="login-wrap">
      <div class="login-container">
          <div class="login-title">注册</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="login-content" >
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名或手机">
                       <i slot="prefix" class="myicon icon-yonghu"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="company">
                    <el-input v-model="param.company" placeholder="公司名">
                       <i slot="prefix" class="myicon icon-gongsi"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model="param.phone" placeholder="请输入手机号" maxlength="11">
                       <i slot="prefix" class="myicon icon-shouji"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="param.email" placeholder="请输入邮箱地址">
                       <i slot="prefix" class="myicon icon-youxiang"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="param.password" placeholder="请输入密码，6-15位数字与字母组成" type="password" minlength="6" maxlength="15">
                       <i slot="prefix" class="myicon icon-mima"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="repassword">
                    <el-input v-model="param.repassword" type="password" placeholder="确认密码">
                       <i slot="prefix" class="myicon icon-mima"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="vcode">
                    <el-input v-model="param.vcode" placeholder="请输入手机验证码"  @keyup.enter.native="submitForm('param')">
                       <i slot="prefix" class="myicon icon-verify-fill"></i>
                        <i slot="suffix">
                          <el-button class="mcode" :class="disabled?'disable-color':''" @click="getCode()" :disabled="disabled">
                            {{countdown}}
                            <span v-show="timestatus">秒后获取</span>
                          </el-button>
                        </i>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                  <el-button type="primary" @click="submitForm('param')">注册</el-button>
              </div>
          </el-form>
          <router-link class="login-tips" to="/">已有账号，立即登录</router-link> 
      </div>  
  </div>

  <!-- 功能说明：
1，用户注册，如图都是必填。
2，手机和邮箱需要做唯一性验证，已注册过的手机或邮箱不能再次注册。
3，手机验证码120S内有效，点击获取验证码后，120S倒计时。

错误提示：
1，您输入的手机号有误，请重新输入。
2，您输入的邮箱有误，请重新输入。
3，密码需要6-15位数字与字母组成
4，您输入的密码不一致
5，您输入的验证码不对，请重新输入。
6，您输入的验证码已失效，请重新获取。
7，您输入的手机号已注册
8，您输入的邮箱已注册 -->
</template>


<script>
export default {
  data: function() {
      var checkPass = (rule, value, callback) => {
        if (value.length>15 || value.length<6) {
          return callback(new Error('密码需要6-15位数字与字母组成'));
        }
      };
      var checkPhone = (rule, value, callback) => {
        if ( !/^1[0-9]{10}$/.test(value)) {
          return callback(new Error('您输入的手机号有误，请重新输入'));
        }
      };
      var rePass = (rule, value, callback) => {
        if ( value != this.param.password) {
          return callback(new Error('您输入的密码不一致'));
        }
      };
      return {
          param: {},
          rules: {
              username: [{ required: true, message: '请输入用户名或手机号', trigger: 'blur' }],
              company: [{ required: true, message: '请输入公司名', trigger: 'blur' }],
              phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                { validator: checkPhone, required: true, trigger: 'blur' }
              ],
              email: [
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '您输入的邮箱有误，请重新输入', trigger: ['blur', 'change'] }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: checkPass, required: true, trigger: 'blur' }
              ],
              repassword: [
                { required: true, message: '请确认密码', trigger: 'blur' },
                { validator: rePass, required: true, trigger: 'blur' }
              ],
              vcode: [{  required: true, message: '请输入手机验证码', trigger: 'blur' }],
          },
          countdown:'获取验证码',
          timestatus: false,
          clear: '',
          disabled:false
      };
  },
  onUnload() {
			clearInterval(this.clear);
	},
  methods: {
      submitForm() {
          this.$refs.login.validate(valid => {
              if (valid) {
                  this.$message.success('登录成功');
                  localStorage.setItem('ms_username', this.param.username);
                  this.$router.push('/');
              } else {
                  this.$message.error('请输入完整信息');
                  return false;
              }
          });
      },
      validMobile(mobile) {
				if (!mobile) {
					return false;
				}
				var vm = /^1[0-9]{10}$/;
				return vm.test(mobile);
			},
      getCode(){
          if(this.validMobile(this.param.phone)){
            this.countdown = 120;
            this.timestatus = true;
            this.disabled = true;
            this.clear = setInterval(this.countDown, 1000);
          } else if(!this.param.phone){
             this.$message.error('请输入手机号');
          }else{
              this.$message.error('请输入正确的手机号');
              return false;
          }
      },
      countDown() {
				if (this.countdown <= 0) {
					this.disabled = false;
					this.timestatus = false;
					this.countdown = '获取验证码';
					clearInterval(this.clear);
				} else {
					--this.countdown;
				}
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
    height: 662px;
    border-radius: 10px;
    margin: -300px 0 0 180px;
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
      .mcode{
        // width: 92px;
        height: 38px;
        padding-top: 1px;
        padding-bottom: 1px;
        background-color: #58abfd;
        color: #fff;
        border-radius: 0px 5px 5px 0;
        // text-align: center;
      }
      .disable-color{
        background-color: #ccc;
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
      span{
        color: #b3b3b3;
      }
    }
  }
}

</style>
