import Vue from 'vue'
import VueRouter from 'vue-router'
import board from '../views/board.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'board',
    component: board
}]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router