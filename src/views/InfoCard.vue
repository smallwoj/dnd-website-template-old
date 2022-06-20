<template>
  <v-card :max-width="maxWidth">
    <v-card-title>
      <span>{{ item.name }}</span>
    </v-card-title>
    <v-card-text v-if="item.images">
      <v-row
        align="center"
      >
        <v-col
          v-if="item.images && item.images.length > 1"
          cols="1"
        >
          <v-btn
            fab
            x-small
            class="centered"
            @click="nextImg"
          >
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col :cols="item.images && item.images.length > 1 ? '10' : '12'">
          <v-hover
            v-if="item.images"
            v-slot="{ hover }"
          >
            <v-carousel
              v-model="currImg"
              :cycle="!hover"
              :show-arrows="false"
              :hide-delimiters="item.images.length <= 1"
            >
              <v-carousel-item
                v-for="(img, i) in item.images"
                :key="i"
                :src="img.url"
                class="pointer-click"
                @click="openDialog(img.url)"
              />
            </v-carousel>
          </v-hover>
        </v-col>
        <v-col
          v-if="item.images && item.images.length > 1"
          cols="1"
        >
          <v-btn
            fab
            x-small
            class="centered"
            @click="nextImg"
          >
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
        fill-height
      >
        <v-col>
          <p
            v-if="item.images && item.images[currImg].caption"
            style="text-align: center"
          >
            Caption: {{ item.images[currImg].caption }}
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider v-if="item.images && item.images.length > 0" />
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
  name: 'InfoCard',

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

    item() {
      this.currImg = 0;
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

    nextImg() {
      this.currImg = (this.currImg + 1) % this.item.images.length;
    },

    prevImg() {
      if (this.currImg > 0) {
        this.currImg -= 1;
      } else {
        this.currImg = this.item.images.length - 1;
      }
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

.centered {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
