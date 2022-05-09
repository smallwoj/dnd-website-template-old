<template>
  <v-container>
    <h1>Okay come get your freaking recap</h1>
    <Editor
      :value="markdown"
      mode="viewer"
    />
  </v-container>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';
import recapMarkdown from 'raw-loader!@/assets/recap.md'

export default {
  name: 'RecapsView',

  components: {
    Editor,
  },

  computed: {
    markdown() {
      return recapMarkdown;
    }
  },
}
</script>

<style lang="scss">
p {
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}
</style>