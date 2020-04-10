<template>
  <div>
    <!--个人信息 = {{$route.params.id}}-->
    个人信息 = {{id}}
  </div>
</template>

<script>
    export default {
      props:['id'],
        name: "userProfile",
      beforeRouteEnter:((to, from, next) => {
        console.log("准备进入个人信息");
        next(vm => {
          vm.getData();
        });
      }),
      beforeRouteLeave: ((to, from, next) => {
        console.log("准备离开个人信息页");
        next();
      }),
      methods:{
        getData: function () {
          this.axios({
            method: 'get',
            url: 'http://localhost:8081/data.json'
          }).then(function (repos) {
            console.log(repos);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    }
</script>

<style scoped>

</style>
