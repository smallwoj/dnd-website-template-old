import HomeView from '../views/HomeView.vue';
import nations from '../assets/nations.yaml';
import factions from '../assets/factions.yaml';

export default [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/HistoryView.vue'),
  },
  {
    path: '/current-events',
    name: 'Current Events',
    component: () => import('../views/CurrentEventsView.vue'),
  },
  {
    path: '/nations',
    name: 'Nations',
    component: () => import('../views/SubNavigationView.vue'),
    props: {
      baseRoute: 'Nations',
    },
    children: [
      ...nations.map((nation) => ({
        path: nation.default ? '/nations' : `/nations/${nation.name.toLocaleLowerCase().replace(/\s/g, '-')}`,
        name: nation.name,
        component: () => import('../views/InfoCard.vue'),
        props: {
          item: nation,
          description: import(`raw-loader!@/assets/nations/${nation.description_file_name}`),
        },
        meta: {
          default: nation.default,
        },
      })),
    ],
  },
  {
    path: '/factions',
    name: 'Factions',
    component: () => import('../views/SubNavigationView.vue'),
    props: {
      baseRoute: 'Factions',
    },
    children: [
      ...factions.map((faction) => ({
        path: faction.default ? '/factions' : `/factions/${faction.name.toLocaleLowerCase().replace(/\s/g, '-')}`,
        name: faction.name,
        component: () => import('../views/InfoCard.vue'),
        props: {
          item: faction,
          description: import(`raw-loader!@/assets/factions/${faction.description_file_name}`),
        },
        meta: {
          default: faction.default,
        },
      })),
    ],
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/CharactersView.vue'),
  },
  {
    path: '/quests',
    name: 'Quests',
    component: () => import('../views/QuestsView.vue'),
  },
  {
    path: '/recap',
    name: 'Recap',
    component: () => import('../views/RecapsView.vue'),
  },
];
