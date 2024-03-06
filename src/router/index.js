import { createRouter, createWebHistory } from 'vue-router';
import TodoListView from '../views/TodoListView.vue'
import CalendarView from '../views/CalendarView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoListView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;