import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// import HomePage from '@/components/HomePage/HomePage.vue'
import HomePage from '~cp/HomePage/HomePage.vue'

Vue.use( Router )

export default new Router( {
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        }
    ]
} )
