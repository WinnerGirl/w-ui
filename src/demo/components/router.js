export default [
  {
    path: 'components',
    name: 'components',
    redirect: { name: 'skeleton' },
    component: () => import('./Page.vue'),
    children: [
      {
        path: 'skeleton',
        name: 'skeleton',
        component: () => import('./documents/SkeletonPage.vue'),
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('./documents/Button.vue'),
      },
      {
        path: 'scroll',
        name: 'scroll',
        component: () => import('./documents/Scroll.vue'),
      }, {
        path: 'datepicker',
        name: 'datePicker',
        component: () => import('./documents/DatePicker.vue'),
      },
      {
        path: 'mate',
        name: 'mate',
        component: () => import('./documents/Mate.vue'),
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import('./documents/Slider.vue'),
      }
    ],
  },
];
