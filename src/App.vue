<template>
  <div id="nav">
    <Header />
  </div>
  <router-view></router-view>  
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>
<style>
#app {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
