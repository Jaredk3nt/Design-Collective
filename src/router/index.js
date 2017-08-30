import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Community from '@/components/pages/Community'
import Events from '@/components/pages/Events'
import Collection from '@/components/pages/Collection'
import Courses from '@/components/pages/collection/Courses'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/About', name: 'About', component: About },
        { path: '/Community', name: 'Community', component: Community },
        { path: '/Events', name: 'Events', component: Events },
        { path: '/Collection', name: 'Collection', component: Collection
            // ,
            // children: [
            //     { path: 'CourseList', component: Courses}
            // ]
        },
        { path: '/Collection/CourseList', component: Courses }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
