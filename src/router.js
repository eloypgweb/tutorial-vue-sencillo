import { createRouter, createWebHistory } from 'vue-router';
import ConsumoApi from './components/ConsumoApi.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/consumoapi',
    name: 'ConsumoApi',
    component: ConsumoApi
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
