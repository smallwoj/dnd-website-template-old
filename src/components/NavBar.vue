<template>
  <v-container>
    <v-tabs
      :vertical="tabsProps.vertical"
    >
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
  },
};
</script>
