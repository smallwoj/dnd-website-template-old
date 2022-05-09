<template>
  <v-container>
    <v-expansion-panels
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
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';

const allFiles = (ctx => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
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
  },
}
</script>

<style lang="scss">
p {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>