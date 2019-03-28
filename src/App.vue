<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/Demo">demo</router-link>
    <router-link to="/Book">Book</router-link>
    <router-link to="/Sel">Sel</router-link>
    <router-link to="/Sel1">Sel1</router-link>
    <router-view/>
  </div>
</template>

<script>
import hello from '@/components/HelloWorld'
export default {
  name: 'App',
  components:{
    hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
