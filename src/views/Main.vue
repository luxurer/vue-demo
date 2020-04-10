<template>
  <div>
    <el-container>
      <el-aside class="el-aside-right"><!--width="200px"-->
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--<router-link to="/user/userProfile/1">个人信息</router-link>-->
                <router-link :to="{name:'UserProfile',params:{id:3}}">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/userList">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">内容分类</el-menu-item>
              <el-menu-item index="2-2">内容列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>


      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span><!--{{$store.getters.getUser.username}}--></span>
        </el-header>

        <el-main>
          <div>
            <div>今日未提交的同学：</div>
            <br/>
            <br/>
            <!--{{$store.getters.getUser.user}}-->
            <!--{{$store.getters.getUser.password}}-->

            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="no" label="学号">
              </el-table-column>
            </el-table>
          </div>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>


<script>
  export default {
    name: "Main",
    password: [],
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {

      this.password = this.$store.getters.getUser.password;
      console.log("this.password", this.$store.getters.getUser.password);
      return {
        tableData: this.password
        /* [{
          name: '王小虎',
          no: '上海市普陀区金沙江路 1518 弄',
        }, {
          name: '王小虎',
          no: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          no: '上海市普陀区金沙江路 1518 弄',
        }, {
          name: '王小虎',
          no: '上海市普陀区金沙江路 1518 弄'
        }]*/
      }
    }
  }
</script>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-aside-right{
    width: 10%;
  }
</style>
