<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px;" class="login-box">
      <h3 class="login-title">欢迎</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="textarea" placeholder="请粘贴今天通知群里的聊天内容" class="textarea-box" v-model="form.username"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">验证</el-button>
        <!--<el-button>取消</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: []
        },
        stu: {
          name: "",
          no: ""
        },
        rules: {
          username: [
            {required: true, message: '请粘贴今天通知群里的聊天内容', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem('isLogin', 'true');
            this.axios({
              method: 'post',
              /*url: 'ryhc/jk1602/list',*/
              url: 'test.json',
              /*params: {
                s: this.form.username,
              }*/
              data: {
                s: this.form.username,
              }
            }).then(res => {
              //this.stu= res.data;
              for (var i = 0; i < res.data.length; i++) {
                this.stu = res.data[i];
                this.form.password.push(this.stu);
                console.log("res.data:", res.data[i]);
              }
              console.log("password:", this.form.password);
              var user = {
                username: "1",
                password: '2'
              }
              debugger
              this.$store.dispatch('asyncUpdateUser', {password: this.form.password})
              //编程式导航
              this.$router.push({name: 'Main'});
            })
          } else {
            //  alert('验证失败 !!');
            this.$message({
              message: '验证失败 !!',
              type: 'warning'
            });
            return false;
          }
        });

      },
    }
  }
</script>
<style lang="scss" scoped>
  .login-box {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }

  .login-title {
    /* text-align: center;
     height: 80%;*/

  }

</style>
