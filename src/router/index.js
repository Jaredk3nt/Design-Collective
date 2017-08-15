import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Community from '@/components/Community'
import Events from '@/components/Events'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Hello },
        { path: '/About', name: 'About', component: About },
        { path: '/Community', name: 'Community', component: Community },
        { path: '/Events', name: 'Events', component: Events }
    ]
})
