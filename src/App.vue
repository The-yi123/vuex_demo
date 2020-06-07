<template>
  <div id="app">
    <my-addition></my-addition>
    <p>------------</p>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
export default {
  data() {
    return {}
  },
  components: {
    'my-addition': Addition
  }
}
</script>

<style>
</style>
