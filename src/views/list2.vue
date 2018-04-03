<template>
  <div>
      <ul>
          <li @click="getTitle(item.title)" v-for="(item,index) in datas" >{{item.title}}</li>
      </ul>
  </div>
</template>
<script>
var str='<div>132123</div><div>132123</div><div>132123</div><div>132123</div><div>46546456</div>'
var n=str.indexOf("46546456");
export default {
  computed:{
      datas(){
          return this.$store.state.selectModule.list
      }
  },
  methods: {
    getTitle(title) {
      // 改变vuex 中的状态
      this.$store.commit("changeTitle", { title });
    }
  },
  //   获取数据
  created() {
      this.$store.dispatch('getlists')
  }
};
</script>