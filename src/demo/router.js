import Vue from 'vue';
import Router from 'vue-router';
import components from './components/router';
import plugins from './plugins/router';
import styles from './styles/router';
// const Demo = r => require.ensure([], () => r(require('./Demo.vue')), 'Demo');

const routes = [
  {
    path: '/',
    name: 'demo',
    // redirect: { name: 'skeleton' },
    component: () => import('./Demo.vue'),
    children: [
      ...components,
      ...plugins,
      ...styles
    ],
  }
];

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes,
});
