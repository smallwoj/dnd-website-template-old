<template>
  <v-card>
    <v-card-title>
      <span>{{ nation.name }}</span>
    </v-card-title>
    <v-card-text>
      <Editor
        :value="description"
        mode="viewer"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';
import nations from '../assets/nations.yaml';

export default {
  name: 'NationCard',

  components: {
    Editor,
  },

  props: {
    nationName: {
      type: String,
      required: true,
    },

    nationDescription: {
      type: Promise,
      required: false,
      default: () => Promise.resolve({ default: '' }),
    },
  },

  data() {
    return {
      nations,
      description: '',
    };
  },

  computed: {
    nation() {
      return this.nations.find((nation) => nation.name === this.nationName);
    },
  },

  watch: {
    nationDescription(newValue) {
      newValue.then((value) => {
        this.description = value.default;
      });
    },
  },

  mounted() {
    this.nationDescription.then((description) => {
      this.description = description.default;
    });
  },
};
</script>
