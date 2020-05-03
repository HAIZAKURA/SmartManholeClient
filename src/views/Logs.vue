<template>
  <div class="logs">
    <div class="title">
      <span class="title-text">日&nbsp;志</span>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: 'Logs'
}
</script>

<style lang="stylus" scoped>
.title
  text-align left
  &-text
    font-size 2em
  &-btn
    height 2em
    line-height 2em
    float right
</style>
