export default [
  {
    path: 'plugins',
    name: 'plugins',
    redirect: { name: 'loading' },
    component: () => import('./Page.vue'),
    children: [
      {
        path: 'loading',
        name: 'loading',
        component: () => import('./documents/Loading.vue'),
      },
      {
        path: 'toast',
        name: 'toast',
        component: () => import('./documents/Toast.vue'),
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: () => import('./documents/Confirm.vue'),
      },
      {
        path: 'fetch',
        name: 'fetch',
        component: () => import('./documents/Fetch.vue'),
      }
    ],
  },
];
