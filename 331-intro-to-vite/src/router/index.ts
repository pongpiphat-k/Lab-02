import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'  
import StudentListView from '../views/StudentListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/students',
      name: 'student-list-view',
      component: StudentListView,
    },
    {
      path: '/events/:id',
      name: 'event-detail-view',
      component: EventDetailView,
      props: true, 
    }
  ],
})

export default router
