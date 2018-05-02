export default [
  {
    path: 'styles',
    name: 'styles',
    redirect: { name: 'label' },
    component: () => import('./Page.vue'),
    children: [
      {
        path: 'label',
        name: 'label',
        component: () => import('./documents/Label.vue'),
      }, {
        path: 'flex',
        name: 'flex',
        component: () => import('./documents/Flex.vue'),
      }, {
        path: 'margin',
        name: 'margin',
        component: () => import('./documents/Margin.vue'),
      }, {
        path: 'padding',
        name: 'padding',
        component: () => import('./documents/Padding.vue'),
      }, {
        path: 'font',
        name: 'font',
        component: () => import('./documents/Font.vue'),
      },
    ],
  },
];
