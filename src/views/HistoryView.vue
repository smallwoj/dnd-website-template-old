<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in history"
      :key="item.header"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title
          class="text-h5"
          :style="`color: ${item.color}`"
        >
          {{ item.header }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import history from '../assets/history.yaml';

export default {
  data() {
    return {
      history,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-timeline::before {
  position: relative;
}
</style>
