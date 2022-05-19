<template>
  <v-container>
    <v-row>
      <v-col :cols="cols">
        <NavBar
          :routes="routes"
          :tabs-props="{
            vertical: true,
          }"
          :menu="$isMobile"
        />
      </v-col>
      <v-col>
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },

  computed: {
    cols() {
      return this.$isMobile ? '12' : 'auto';
    },

    routes() {
      // get child routes from current route
      return this.$router.options.routes
        .filter((route) => route.name === 'Nations')[0]
        .children
        .filter((route) => route.name !== 'Nations Home');
    },
  },
};
</script>
