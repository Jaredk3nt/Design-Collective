import Vue from 'vue'
import App from './App'
import DecoNavbar from './components/Navbar'
import DecoFooter from './components/Footer'
import About from './components/About'
import router from './router'

require("./main.scss");

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, DecoNavbar, DecoFooter, About }
})
