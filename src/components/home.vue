<template>
    <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img  v-if="isLogin" src="../assets/portrait.png" alt="">
      </div>

    </div>
    <div class="phrase" id='phrase'>
      一起学习Vue-router
      <div>
        <input @click='minhandle({de:5})' type="button" value="-">
        <span>{{num}}</span>
        <input @click='addHandle' type="button" value="+">
        <span>{{num2}}</span>
      </div>
      <div>
          <select-input :is-show.sync='listShow' :title='title'></select-input>
           <list v-show="listShow" :datas='listdata' @changeTitle="putTitle"></list>
      </div>
      <div>
        <select-input2 :is-show.sync='listShow' ></select-input2>
        <list2 v-show="listShow"  ></list2>
      </div>
    </div>
    <div class="btns">
      <router-link to="/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>

<script>
import selectInput from "../views/selectInput";
import selectInput2 from "../views/selectInput2";
import list from "../views/list";
import list2 from "../views/list2";
import http from "../axios";

// 用vuex的辅助方法
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
$(function() {
  $("#phrase").click(function() {
    console.log($("#phrase"));
  });
});
let lists = [
  {
    title: "123123"
  },
  {
    title: "222222222222"
  },
  {
    title: "3333333"
  }
];
export default {
  name: "home",
  components: {
    selectInput,
    list,
    selectInput2,
    list2
  },
  data() {
    return {
      isLogin: false,
      listShow: false,
      listdata: lists,
      title: ""
    };
  },
  created() {
    let info = this.$local.fetch("userName");
    this.isLogin = info.login;
    console.log(111);
    http
      .post("test", {
        miaov: "123"
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  computed: {
    num() {
      return this.$store.state.count;
    },
    num2() {
      return this.$store.getters.filterCount;
    }
  },
  // 辅助的写法
  /*
  computed:mapState({
    num:state=>state.count,
    // 或者
    // num:"count"
    // 或者
    // num(state){
    //   return state.count+100
    // }    
  }) 
  */
  /*
computed:{
  ...mapGetters({
    num2:"filterCount"
  }),
    ...mapState(['count'])
}
  */
  methods: {
    addHandle() {
      //提交
      // this.$store.commit("addNumber");
      //提交
      this.$store.dispatch("addAction");
    },
    // 辅助方法
    /*
    ...mapActions({
      addHandle:"addAction"
    }),
    */
    // minhandle() {
    //   //提交
    //   this.$store.commit({
    //     type: "minNumber",
    //     de: 5
    //   });
    // },
    // 辅助方法
    ...mapMutations({
      minhandle: "minNumber"
    }),
    putTitle(title) {
      console.log(title);
      this.title = title;
      this.listShow = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
