<template>
  <div>
      <input type="text" readonly='readonly' @click="showLists" :value='title'>
  </div>
</template>
<script>
    export default{
        props:['isShow'],
        computed:{
            initShow(){
                return this.isShow
            },
            title(){
                return this.$store.state.selectModule.title
            }
        },
        methods:{
            showLists(){
                this.$emit('update:isShow',!this.initShow)
            }
        }
    }
</script>