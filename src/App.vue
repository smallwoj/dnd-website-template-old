<template>
  <div id="app" data-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <NavBar :routes="routes" />
        </v-col>
        <v-col cols="12">
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import routes from '@/router/routes';
import Vue from 'vue';

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

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm;
    },
  },

  created() {
    // Make global breakpoints available on Vue prototype
    Object.defineProperty(Vue.prototype, '$isMobile', {
      get: () => this.isMobile,
    });
  }
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
