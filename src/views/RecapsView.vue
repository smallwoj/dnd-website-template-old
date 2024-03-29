<template>
  <v-container>
    <v-expansion-panels
      ref="expansion-panels"
      v-model="opened"
      multiple
    >
      <v-expansion-panel
        v-for="(recap, index) in recapEntries"
        :key="index"
      >
        <v-expansion-panel-header>
          <h3>Session {{ index + 1 }} - {{ recap.dateString }}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Editor
            :value="recap.content"
            mode="viewer"
            class="markdown"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn
      fab
      dark
      small
      fixed
      bottom
      right
      @click="scrollToBottom"
    >
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>
    <div ref="bottom" />
  </v-container>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';

const allFiles = ((ctx) => {
  const keys = ctx.keys();
  const values = keys.map(ctx);
  // eslint-disable-next-line no-param-reassign
  return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('raw-loader!@/assets/recaps', true, /.*/));

export default {
  name: 'RecapsView',

  components: {
    Editor,
  },

  data() {
    return {
      opened: [Object.keys(allFiles).length - 1],
    };
  },

  computed: {
    markdownFiles() {
      return allFiles;
    },

    recapEntries() {
      const entries = Object.keys(this.markdownFiles).map((fileName) => {
        const noExtension = this.stripExtension(fileName);
        const date = new Date(noExtension);
        const dateString = date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          timeZone: 'UTC',
        });

        return {
          date,
          dateString,
          content: this.markdownFiles[fileName].default,
        };
      });
      return entries.sort((a, b) => a.date - b.date);
    },
  },

  methods: {
    stripExtension(file) {
      const fileName = file.replace(/^\.\//, '');
      return fileName.replace(/\.[^/.]+$/, '');
    },

    scrollToBottom() {
      this.$refs.bottom.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/markdown";
</style>
