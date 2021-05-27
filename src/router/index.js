import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {layout: 'main', guest: true}
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {layout: 'main', guest: true}
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {layout: 'main', guest: true}
  },
  {
    path: '/select-role',
    name: 'select-role',
    component: () => import('../views/SelectRole'),
    meta: {layout: 'main', guest: true}
  },
  //Admin pages//
  {
    path: '/admin/registration',
    name: 'admin-registration',
    component: () => import('../views/Admin/Registration.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/Admin/Users.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/user-info',
    name: 'admin-user-info',
    component: () => import('../views/UserInfo.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/AdminMenu.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/orders',
    name: 'admin-orders',
    component: () => import('../views/Admin/AdminOrders.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/order-info',
    name: 'admin-order-info',
    component: () => import('../views/Admin/AdminOrderInfo.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/add-order',
    name: 'admin-add-order',
    component: () => import('../views/Admin/AdminAddOrder.vue'),
    meta: {layout: 'admin', auth: true}
  },
  {
    path: '/admin/category',
    name: 'admin-category',
    component: () => import('../views/Admin/Category.vue'),
    meta: {layout: 'admin', auth: true}
  },
  

  // Customer pages//
  {
    path: '/customer/order-info',
    name: 'customer-order-info',
    component: () => import('../views/Customer/CustomerOrderInfo.vue'),
    meta: {layout: 'customer', auth: true}
  },
  {
    path: '/customer/orders',
    name: 'customer-orders',
    component: () => import('../views/Customer/CustomerOrders.vue'),
    meta: {layout: 'customer', auth: true}
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer/CustomerMenu.vue'),
    meta: {layout: 'customer', auth: true}
  },

  //Executor page//

  {
    path: '/executor/order-info',
    name: 'executor-order-info',
    component: () => import('../views/Executor/ExecutorOrderInfo.vue'),
    meta: {layout: 'executor', auth: true}
  },
  {
    path: '/executor/orders',
    name: 'executor-orders',
    component: () => import('../views/Executor/ExecutorOrders.vue'),
    meta: {layout: 'executor', auth: true}
  },
  {
    path: '/executor',
    name: 'executor',
    component: () => import('../views/Executor/ExecutorMenu.vue'),
    meta: {layout: 'executor', auth: true}
  },


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router


