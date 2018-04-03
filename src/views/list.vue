<template>
  <div>
      <ul>
          <li @click="getTitle(item.title)" v-for="(item,index) in datas" >{{item.title}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ["datas"],
  methods: {
    getTitle(title) {
      this.$emit("changeTitle", title);
      console.log(title)
    }
  }
};
</script>