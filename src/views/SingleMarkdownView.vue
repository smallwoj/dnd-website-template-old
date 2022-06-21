<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col>
          <Editor
            :value="markdown"
            mode="viewer"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';

export default {
  components: {
    Editor,
  },

  props: {
    file: {
      type: Promise,
      required: false,
      default: () => Promise.resolve({ default: '' }),
    },
  },

  data() {
    return {
      markdown: '',
    };
  },

  watch: {
    file(newValue) {
      newValue.then((value) => {
        this.markdown = value.default;
      });
    },
  },

  mounted() {
    this.file.then((value) => {
      this.markdown = value.default;
    });
  },
};
</script>
