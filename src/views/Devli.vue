<template>
  <div class="devli">
    <div class="devli-title">Device List</div>
    <div class="dev" ref="devTable">
      <el-table
        :data="devList"
        style="width: 100%"
        :max-height="devListHeight"
      >
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
      devListHeight: window.innerHeight * 0.8,
      devList: [
        {
          vidno: '1',
          vname: 'asd',
          vposi: 'asd',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        },
        {
          vidno: '2',
          vname: 'zxc',
          vposi: 'zxc',
          vdept: 'admin',
          vstat: 'open'
        }
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.dev
  border 1px solid #DCDFE6
</style>
