import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserListView from "./../views/UserList.vue";
import UserProfile from "./../views/UserProfile.vue";
import NotFound from "./../views/NotFound.vue";
import RegisterView from "./../views/RegisterView.vue";
import LoginView from "./../views/LoginView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
