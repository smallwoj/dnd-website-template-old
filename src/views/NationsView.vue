<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <NavBar
          :routes="routes"
          :tabsProps="{
            vertical: true,
          }"
        />
      </v-col>
      <v-col>
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar },

  computed: {
    routes() {
      // get child routes from current route
      return this.$router.options.routes
        .filter(route => route.name === 'Nations')[0]
        .children
        .filter(route => route.name !== 'Nations Home');
    },
  },
}
</script>
