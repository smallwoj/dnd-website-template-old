<template>
  <v-card :max-width="maxWidth">
    <v-card-title>
      <span>{{ item.name }}</span>
    </v-card-title>
    <v-card-text>
      <v-carousel
        v-if="item.images"
        v-model="currImg"
        cycle
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(img, i) in item.images"
          :key="i"
          :src="img.url"
          class="pointer-click"
          @click="openDialog(img.url)"
        />
      </v-carousel>
      <p
        v-if="item.images && item.images[currImg].caption"
        style="text-align: center"
      >
        Caption: {{ item.images[currImg].caption }}
      </p>
    </v-card-text>
    <v-container>
      <Editor
        :value="descriptionMD"
        mode="viewer"
        class="markdown"
      />
    </v-container>
    <v-dialog
      v-model="dialog"
    >
      <v-img
        :src="dialogSrc"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor';

export default {
  name: 'NationCard',

  components: {
    Editor,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },

    description: {
      type: Promise,
      required: false,
      default: () => Promise.resolve({ default: '' }),
    },
  },

  data() {
    return {
      descriptionMD: '',
      currImg: 0,
      dialog: false,
      dialogSrc: '',
    };
  },

  computed: {
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return '675px';
        default:
          return '900px';
      }
    },
  },

  watch: {
    description(newValue) {
      newValue.then((value) => {
        this.descriptionMD = value.default;
      });
    },
  },

  mounted() {
    this.description.then((description) => {
      this.descriptionMD = description.default;
    });
  },

  methods: {
    openDialog(src) {
      this.dialogSrc = src;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer-click {
  cursor: pointer;
}

.markdown >>> p {
  padding: inherit !important;
  margin: inherit !important;
}
</style>
