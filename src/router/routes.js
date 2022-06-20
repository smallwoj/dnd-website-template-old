import HomeView from '../views/HomeView.vue';
import nations from '../assets/nations.yaml';

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
    component: () => import('../views/FactionsView.vue'),
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
