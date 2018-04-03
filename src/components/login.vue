<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="on">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" ref="userPassword" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
      <div class="back-index">
        <router-link to="/">首页>>></router-link>
      </div>
    </div>

    <!-- <form @submit.prevent='sendMessage' >
      <input type="text"  ref="textNew"  />
      <input type="submit" value="一键登入" />
    </form> -->
  </div>
</template>

<script>
import Axios from "axios";
import VueAxios from "vue-axios";

export default {
  name: "login",
  data() {
    return {};
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5abda425597f2f6d4d73af2c/testLirsts/testUrl"
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    //   sendLogin () {
    //       // 登录
    //     let userName = this.$refs.userInput.value;
    //     this.$local.save("miaov", {
    //         login: true,
    //         userName: userName
    //     })

    //     let redirect = this.$route.query.redirect

    //     if(!redirect){
    //       redirect = 'project'
    //     }

    //     this.$router.push({
    //       path: '/'+redirect
    //     })
    //   }

    sendLogin() {
      console.log(this.$local);
      let userName = this.$refs.userInput.value;
      let userPassword = this.$refs.userPassword.value;
      this.$local.save("userName", {
        login: true,
        userName: userName
      });
      this.$local.save(userPassword, {
        login: true,
        userPassword: userPassword
      });
      let redirectPath = this.$route.query.redirect;
      if (!redirectPath) {
        redirectPath = "project";
      }
      this.$router.push({
        path: "/" + redirectPath
      });
      console.log(this.$local.fetch(userName));
      console.log(this.$local.fetch(userPassword));
    }
    // sendMessage() {
    //  let userName = this.$refs.textNew.value
    //  let params = new FormData();
    //  params.append("username", "Groucho");
    //  console.log(params)
    //  console.log(params.get("username"))
    // }
  }
};
</script>
<style>

</style>
