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

  props: {
    baseRoute: {
      type: String,
      required: true,
    },
  },

  computed: {
    cols() {
      return this.$isMobile ? '12' : 'auto';
    },

    routes() {
      // get child routes from current route
      return this.$router.options.routes
        .filter((route) => route.name === this.baseRoute)[0]
        .children;
    },
  },
};
</script>
