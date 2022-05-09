<template>
  <v-container>
    <v-tabs>
      <v-tab
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >
        {{ route.name }}
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'NavBar',
  data() {
    return {
      routes: routes,
    };
  },
};
</script>
