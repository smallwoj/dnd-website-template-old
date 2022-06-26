import characters from '../assets/characters.yaml';
import divinity from '../assets/divinity.yaml';
import factions from '../assets/factions.yaml';
import nations from '../assets/nations.yaml';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/SingleMarkdownView.vue'),
    props: {
      file: import(`raw-loader!@/assets/${'home.md'}`),
    },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/HistoryView.vue'),
  },
  {
    path: '/divinity',
    name: 'Divinity',
    component: () => import('../views/SubNavigationView.vue'),
    props: {
      baseRoute: 'Divinity',
    },
    children: [
      ...divinity.map((divine) => ({
        path: divine.default ? '/divinity' : `/divinity/${divine.name.toLocaleLowerCase().replace(/\s/g, '-')}`,
        name: divine.name,
        component: () => import('../views/InfoCard.vue'),
        props: {
          item: divine,
          description: import(`raw-loader!@/assets/divinity/${divine.description_file_name}`),
        },
        meta: {
          default: divine.default,
        },
      })),
    ],
  },
  {
    path: '/current-events',
    name: 'Current Events',
    component: () => import('../views/SingleMarkdownView.vue'),
    props: {
      file: import(`raw-loader!@/assets/${'current_events.md'}`),
    },
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
    component: () => import('../views/SubNavigationView.vue'),
    props: {
      baseRoute: 'Characters',
    },
    children: [
      ...characters.map((character) => ({
        path: character.default ? '/characters' : `/characters/${character.name.toLocaleLowerCase().replace(/\s/g, '-')}`,
        name: character.name,
        component: () => import('../views/InfoCard.vue'),
        props: {
          item: character,
          description: import(`raw-loader!@/assets/characters/${character.description_file_name}`),
        },
        meta: {
          default: character.default,
        },
      })),
    ],
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
