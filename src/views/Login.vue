<template>
  <div class="login">
    <el-container>
      <div class="login-div">
        <el-card class="login-box box-card">
          <div slot="header" class="clearfix">
            <span>Login</span>
          </div>
          <div class="item">
            <el-form label-position="left" label-width="60px" :model="loginForm">
              <el-form-item label="用户名">
                <el-input type="text" clearable v-model="loginForm.uname"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" show-password clearable v-model="loginForm.upass"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="loginFunc">登&nbsp;&nbsp;录</el-button>
          </div>
        </el-card>
      </div>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        uname: '',
        upass: ''
      }
    }
  },
  computed: {
    ...mapGetters(['uname', 'uauth', 'udept'])
  },
  created: function() {
    // if (this.uname != 'null' && this.uauth != 'null' && this.udept != null) {
    //   this.$router.push({ path: '/' })=
    // }
    this.$axios.get('/api/check')
      .then(res => {
        if (res.data.status == 'success') {
          this.setUname(res.data.uname)
          this.setUauth(res.data.uauth)
          this.setUdept(res.data.udept)
          this.$router.push({ path: '/' })
        }
      })
  },
  methods: {
    loginFunc() {
      // this.setUname(this.loginForm.uname)
      // this.$router.push({ path: '/' })
      this.$axios.post('/api/user/login', this.loginForm)
        .then(res => {
          if (res.data.status == 'success') {
            this.setUname(res.data.uname)
            this.setUauth(res.data.uauth)
            this.setUdept(res.data.udept)
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({ path: '/' })
            }, 1000)
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'error'
            })
          }
        })
    },
    ...mapActions(['setUname', 'setUauth', 'setUdept'])
  }
}
</script>

<style lang="stylus" scoped>
.clearfix:before,
.clearfix:after
  display table
  content ""

.clearfix:after
  clear both

.item
  margin-bottom 18px

.login-div
  margin-left auto
  margin-right auto
  margin-top 10%

.login-box
  min-width 400px

</style>
