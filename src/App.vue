<template>
  <div id="nav">
    <Header />
  </div>
  <transition name='view' appear enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__bounce">
    <router-view></router-view>
  </transition>
  
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
