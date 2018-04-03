<template>
  <div>
      <input type="text" readonly='readonly' @click="showLists" :value="title">
  </div>
</template>
<script>
    export default{
        props:['isShow','title'],
        computed:{
            initShow(){
                return this.isShow
            }
        },
        methods:{
            showLists(){
                this.$emit('update:isShow',!this.initShow)
            }
        }
    }
</script>