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

    hasDefault() {
      return this.routes.some((route) => route.meta.default);
    },
  },

  watch: {
    $route: {
      handler() {
        if (this.$route.name === this.baseRoute && !this.hasDefault) {
          this.$router.push({ name: this.routes[0].name });
        }
      },
      immediate: true,
    },
  },

  mounted() {
    if (this.$route.name === this.baseRoute && !this.hasDefault) {
      this.$router.push({ name: this.routes[0].name });
    }
  },
};
</script>
