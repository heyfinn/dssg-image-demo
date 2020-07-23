// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

// Ant Design
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Antd)

const store = new Vuex.Store({
  state: {
    // image: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
    image: 'https://i.pinimg.com/474x/61/8a/cd/618acdf88be886a1c87b9f58a33569cb.jpg'
  },
  
  mutations: {
    updateImage (state, image) {
      state.image = image
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
