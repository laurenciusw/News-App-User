import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/HomePage.vue'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import bookmarkPage from '../views/bookmarkPage.vue'
import detailPage from '../views/detailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: bookmarkPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name == 'whislist' && !isAuthenticated) {
    next('login')
  } else if (
    (to.name == 'login' && isAuthenticated) ||
    (to.name == 'register' && isAuthenticated)
  ) {
    next('/')
  } else if (!to.name) {
    next('/pageNotFound')
  } else {
    next()
  }
})

export default router
