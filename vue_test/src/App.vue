<template>
 <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
export default {
  name: 'App',
  components: {
    School
  }
}
</script>

<style>

</style>
