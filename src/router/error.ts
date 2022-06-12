import Error404 from '@/modules/error/404.vue'

export default [{ path: '/:pathMatch(.*)*', name: '404', component: Error404 }]
