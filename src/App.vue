<template>
  <div id="app">
    <NavBar :routes="routes" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import routes from '@/router/routes';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data() {
    return {
      routes,
    };
  },
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
