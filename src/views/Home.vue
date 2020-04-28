<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <el-menu
          class="aside-menu"
          background-color="#242327"
          text-color="#fff"
          active-text-color="#ffd04b"
          default-active="/"
          unique-opened
          router
        >
          <div class="aside-logo">
            <div class="blank10"></div>
            <img src="../assets/logo.png" />
            <div class="blank20"></div>
          </div>
          <el-menu-item class="aside-menu-item" index="/">
            <i class="el-icon-odometer"></i>
            <span>&nbsp;监&nbsp;控</span>
          </el-menu-item>
          <el-submenu class="aside-menu-item" index="2">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>&nbsp;设&nbsp;备</span>
            </template>
            <el-menu-item class="aside-submenu-item" index="dev-list">
              <span>设&nbsp;备&nbsp;列&nbsp;表</span>
            </el-menu-item>
            <el-menu-item class="aside-submenu-item" index="dev-map">
              <span>设&nbsp;备&nbsp;地&nbsp;图</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu class="aside-menu-item" index="3">
            <template slot="title">
              <i class="el-icon-suitcase"></i>
              <span>&nbsp;组&nbsp;织</span>
            </template>
            <el-menu-item class="aside-submenu-item" index="dep-list">
              <span>组&nbsp;织&nbsp;列&nbsp;表</span>
            </el-menu-item>
            <el-menu-item class="aside-submenu-item" index="dep-info">
              <span>组&nbsp;织&nbsp;信&nbsp;息</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu class="aside-menu-item" index="4">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>&nbsp;用&nbsp;户</span>
            </template>
            <el-menu-item class="aside-submenu-item" index="usr-list">
              <span>用&nbsp;户&nbsp;列&nbsp;表</span>
            </el-menu-item>
            <el-menu-item class="aside-submenu-item" index="usr-info">
              <span>个&nbsp;人&nbsp;信&nbsp;息</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item class="aside-menu-item" index="logs">
            <i class="el-icon-document"></i>
            <span>&nbsp;日&nbsp;志</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-menu
            class="header-menu"
            mode="horizontal"
            background-color="#242327"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <div class="header-menu-item">
              <span class="header-user">USERNAME</span>
              <el-button type="danger" size="medium" round @click="logout">登出</el-button>
            </div>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    defaultActive() {
      return '/' + this.$route.path.split('/').reverse()[0];
    },
    ...mapGetters(['uname', 'uauth', 'udept'])
  },
  methods: {
    logout() {
      this.$axios.post('/api/user/logout').then(() => {
        this.setUname(null)
        this.setUauth(null)
        this.setUdept(null)
        this.$router.push({ path: '/login' })
      })
    },
    ...mapActions(['setUname', 'setUauth', 'setUdept'])
  }
}
</script>

<style lang="stylus" scoped>
.el-menu-item.is-active
  background-color #393a3e !important

.blank10
  height 10px

.blank20
  height 20px

.aside
  height 100%
  max-width 180px
  overflow-x hidden

.aside-menu
  height 100vh
  border-right none

.aside-menu-item
  text-align left

.aside-submenu-item
  text-align center

.aside-logo
  margin-top 20px
  width 180px
  display grid
  border-bottom 1px solid #2b2c30
  img
    width 80px
    margin auto

.header
  padding 0
  margin 0
  width 100%

.header-menu
  height 60px
  padding-right 32px
  &-item
    float right
    line-height 60px
    height 48px
    margin auto

.header-user
  color #ffffff
  margin-right 32px

</style>
