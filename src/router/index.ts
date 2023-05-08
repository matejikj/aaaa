import { createRouter, createWebHistory } from 'vue-router'
import ParserView from '../views/ParserView.vue'
import VisualisationView from '../views/VisualisationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'csv',
      component: ParserView
    },
    {
      path: '/visualisation',
      name: 'visualisation',
      component: VisualisationView
    }
  ]
})

export default router
