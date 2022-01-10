import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ulubione',
    name: 'FavoritesAuctions',
    component: () => import('../views/FavoritesAuctions.vue')
  },
  {
    path: '/moje-przedmioty',
    name: 'MyAuctionsView',
    component: () => import('../views/MyAuctionsView.vue')
  },
  {
    path: '/wygrane-licytacje',
    name: 'WonAuctionsView',
    component: () => import('../views/WonAuctionsView.vue')
  },
  {
    path: '/dodaj-ogloszenie',
    name: 'NewAuction',
    component: () => import('../views/NewAuction.vue')
  },
  {
    path: '/ustawienia',
    name: 'SettingsView',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/logowanie',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/rejestracja',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/oferty/:query',
    name: 'Auctions',
    component: () => import('../views/Auctions.vue')
  },
  {
    path: '/oferta/:auctionId',
    name: 'Auction',
    component: () => import('../views/Auction.vue')
  },
  {
    path: '/kategoria/:kategoria',
    name: 'AuctionsByCategory',
    component: () => import('../views/AuctionsByCategory.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/aukcje',
    name: 'AdminAuctions',
    component: () => import('../views/AdminAuctions.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
