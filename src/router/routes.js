import HomeView from '../views/HomeView.vue';

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
    component: () => import('../views/NationsView.vue'),
    children: [
      {
        path: '/nations',
        name: 'Nations Home',
        component: () => import('../views/Nations/NationsHome.vue'),
      },
      {
        path: '/nations/androvian-archipelago',
        name: 'Androvian Archipelago',
        component: () => import('../views/Nations/AndrovianArchipelago.vue'),
      },
      {
        path: '/nations/ampode-technocracy',
        name: 'Ampode Technocracy',
        component: () => import('../views/Nations/AmpodeTechnocracy.vue'),
      },
      {
        path: '/nations/edgeland',
        name: 'Edgeland',
        component: () => import('../views/Nations/EdgelandianNation.vue'),
      },
      {
        path: '/nations/festering-graveyard',
        name: 'The Festering Graveyard',
        component: () => import('../views/Nations/FesteringGraveyard.vue'),
      },
      {
        path: '/nations/geonotia',
        name: 'Geonotia',
        component: () => import('../views/Nations/GeonotianNation.vue'),
      },
      {
        path: '/nations/high-rollers-paradise',
        name: 'High Roller\'s Paradise',
        component: () => import('../views/Nations/HighRollersParadise.vue'),
      },
      {
        path: '/nations/phytic-federation',
        name: 'Phytic Federation',
        component: () => import('../views/Nations/PhyticFederation.vue'),
      },
      {
        path: '/nations/solar-empire',
        name: 'The Grand Solar Empire',
        component: () => import('../views/Nations/SolarEmpire.vue'),
      },
      {
        path: '/nations/tegarian-compact',
        name: 'Tegarian Compact',
        component: () => import('../views/Nations/TegarianCompact.vue'),
      },
      {
        path: '/nations/vulcania',
        name: 'Vulcania',
        component: () => import('../views/Nations/VulcanianNation.vue'),
      },
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
