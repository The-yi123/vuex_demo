<template>
  <div id="app">
      {{$store.getters.showNum}}
      <button @click="btnHander">+3</button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
      btnHander(){
       this.$store.commit('add',3)
      }
  }
}
</script> 

<style>
</style>
