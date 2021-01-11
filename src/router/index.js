import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ulubione',
    name: 'Ulubione',
    component: () => import('../views/Ulubione.vue')
  },
  {
    path: '/moje-przedmioty',
    name: 'MojePrzedmioty',
    component: () => import('../views/MojePrzedmioty.vue')
  },
  {
    path: '/moje-licytacje',
    name: 'MojeLicytacje',
    component: () => import('../views/MojeLicytacje.vue')
  },
  {
    path: '/wygrane-licytacje',
    name: 'WygraneLicytacje',
    component: () => import('../views/WygraneLicytacje.vue')
  },
  {
    path: '/dodaj-ogloszenie',
    name: 'DodajOgloszenie',
    component: () => import('../views/DodajOgloszenie.vue')
  },
  {
    path: '/ustawienia',
    name: 'Ustawienia',
    component: () => import('../views/Ustawienia.vue')
  },
  {
    path: '/logowanie',
    name: 'Logowanie',
    component: () => import('../views/Logowanie.vue')
  },
  {
    path: '/rejestracja',
    name: 'Rejestracja',
    component: () => import('../views/Rejestracja.vue')
  },
  {
    path: '/oferty/:query',
    name: 'Oferty',
    component: () => import('../views/Oferty.vue')
  },
  {
    path: '/oferta/:auctionId',
    name: 'Oferta',
    component: () => import('../views/Oferta.vue')
  },
  {
    path: '/kategoria/:kategoria',
    name: 'OfertyKategoria',
    component: () => import('../views/OfertyKategoria.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/aukcje',
    name: 'Aukcje',
    component: () => import('../views/AdminAukcje.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
