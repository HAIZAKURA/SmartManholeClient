<template>
  <div class="devli">
    <div class="title">
      <span class="title-text">设&nbsp;备&nbsp;列&nbsp;表</span>
      <div class="title-btn">
        <el-button v-if="multipleSelection.length" type="danger" icon="el-icon-delete" round>批量删除</el-button>
        <!-- <el-button type="success" icon="el-icon-plus" circle></el-button> -->
      </div>
    </div>
    <el-divider></el-divider>
    <div class="dev" ref="devTable">
      <el-table
        :data="devList"
        style="width: 100%"
        :max-height="devListHeight"
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          min-width="20"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="vstat"
          label="状态"
          min-width="40"
        >
        </el-table-column>
        <el-table-column
          prop="vname"
          label="名称"
          min-width="120"
        >
        </el-table-column>
        <el-table-column
          prop="vidno"
          label="编号"
          min-width="120"
        >
        </el-table-column>
        <el-table-column
          prop="vdept"
          label="归属"
          min-width="80"
        >
        </el-table-column>
        <el-table-column
          prop="vposi"
          label="位置"
          min-width="120"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="80"
        >
          <template slot-scope="scope">
            <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.row.vidno)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.vidno)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Devli',
  data() {
    return {
      devListHeight: window.innerHeight * 0.75,
      devList: [],
      multipleSelection: [],
      loading: true
    }
  },
  created() {
    this.$axios.post('/api/dev', { 'vdept': 'all' })
      .then(res => {
        if (res.data.status == 'success') {
          this.devList = res.data.dev
          this.loading = false
        } else if (res.data.status == 'fail') {
          this.$message({
            message: '获取失败，请重试',
            type: 'warning'
          })
          this.loading = false
        } else {
          this.$message({
            message: '无权限，即将跳转至登录',
            type: 'error'
          })
          this.loading = false
          setTimeout(() => {
            this.$router.push({ path: '/login' })
          }, 1000)
        }
      })
  },
  mounted() {
    window.onresize = () => {
      return(() => {
        this.devListHeight = window.innerHeight * 0.75
      })()
    }
  },
  methods: {
    handleEdit(index) {
      console.log(index)
    },
    handleDelete(index) {
      console.log(index)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style lang="stylus" scoped>
.dev
  border 1px solid #EBEEF5

.title
  text-align left
  &-text
    font-size 2em
  &-btn
    height 2em
    line-height 2em
    float right

</style>
