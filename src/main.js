import Vue from 'vue'
import App from './App'

import DecoNavbar from './components/Navbar'
import DecoFooter from './components/Footer'
import ImgGrid from './components/ImgGrid'
import ContactForm from './components/ContactForm'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Community from './components/pages/Community'
import Events from './components/pages/Events'
import Collection from './components/pages/Collection'

import router from './router'

require("./main.scss");

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, DecoNavbar, DecoFooter, ImgGrid, ContactForm, Home, About, Community, Events, Collection }
})
