<template>
  <v-container>
    <v-tabs
      v-if="!menu"
      :vertical="tabsProps.vertical"
      center-active
      show-arrows
    >
      <v-tab
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >
        {{ route.name }}
      </v-tab>
    </v-tabs>
    <v-menu
      v-else
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ $route.name }}
        </v-btn>
      </template>
      <v-list v-model="currRoute">
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
        >
          {{ route.name }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
export default {
  name: 'NavBar',

  props: {
    routes: {
      type: Array,
      required: true,
    },

    tabsProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },

    menu: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      currRoute: -1,
    };
  },

  mounted() {
    this.currRoute = this.routes.map((x) => x.name).indexOf(this.$route.name);
  },
};
</script>
