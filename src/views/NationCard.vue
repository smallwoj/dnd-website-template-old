<template>
  <v-card :max-width="maxWidth">
    <v-card-title>
      <span>{{ nation.name }}</span>
    </v-card-title>
    <v-card-text>
      <v-carousel
        v-if="nation.images"
        v-model="currImg"
        cycle
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, i) in nation.images"
          :key="i"
          :src="item.url"
          class="pointer-click"
          @click="openDialog(item.url)"
        />
      </v-carousel>
      <p
        v-if="nation.images"
        style="text-align: center"
      >
        Caption: {{ nation.images[currImg].caption }}
      </p>
      <Editor
        :value="description"
        mode="viewer"
      />
    </v-card-text>
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
      currImg: 0,
      dialog: false,
      dialogSrc: '',
    };
  },

  computed: {
    nation() {
      return this.nations.find((nation) => nation.name === this.nationName);
    },

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
</style>
