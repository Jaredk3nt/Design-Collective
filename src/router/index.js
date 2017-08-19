import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/pages/About'
import Community from '@/components/pages/Community'
import Events from '@/components/pages/Events'
import Collection from '@/components/pages/Collection'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Hello },
        { path: '/About', name: 'About', component: About },
        { path: '/Community', name: 'Community', component: Community },
        { path: '/Events', name: 'Events', component: Events },
        { path: '/Collection', name: 'Collection', component: Collection}
    ]
})
