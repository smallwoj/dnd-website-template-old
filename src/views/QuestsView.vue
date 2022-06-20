<template>
  <v-container>
    <v-row>
      <v-col>
        <v-tabs
          v-model="tab"
          grow
        >
          <v-tab>
            <span> In Progress </span>
          </v-tab>
          <v-tab>
            <span> Completed </span>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="quest in quests"
                    :key="quest.name"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ quest.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ quest.desc }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-tab-item>
              <v-tab-item>
                <v-list>
                  <v-list-item
                    v-for="quest in completedQuests"
                    :key="quest.name"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ quest.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ quest.desc }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import quests from '../assets/quests.yaml';

export default {
  data() {
    return {
      tab: 0,
    };
  },

  computed: {
    quests() {
      return quests.filter((quest) => !quest.completed);
    },

    completedQuests() {
      return quests.filter((quest) => quest.completed);
    },
  },
};
</script>
