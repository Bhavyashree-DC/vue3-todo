import { createRouter, createWebHistory } from 'vue-router';
import TodoListView from '../views/TodoListView.vue'
import CalendarView from '../views/CalendarView.vue'
import SignInView from '@/views/SignInView.vue';
import AddTaskView from '@/views/AddTaskView.vue';
import ProgressView from '../views/ProgressView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoListView,
    meta:{
       auth:null
    }
  },
  {
    path:'/add-task',
    name:'/add-task',
    component:AddTaskView,
    meta:{
       auth:true
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta:{
       auth:true
    }
  },
  {
    path: '/progress',
    name: 'progress',
    component: ProgressView,
    meta:{
       auth:true
    }
  },
  {
     path:'/login',
     name:'login',
     component: SignInView,
     meta:{
       auth:false
     }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from) => {
    console.log(`Going from ${from.name} to ${to.name}`)
    const authorized = localStorage.getItem('Auth')
    const parseAuth = authorized ? JSON.parse(authorized) : null;
    // auth login
    if(to.meta.auth){
        if(parseAuth && parseAuth.token){
          return true;
        }else{
          return false;
        }
    }else{
      if(parseAuth && parseAuth.token){
        return false
      }
    }
    
  })
export default router;