import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faTerminal, faChalkboard, faUserFriends, faStickyNote, faUndo, faPlay, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'quill/dist/quill.snow.css'
import 'codemirror/lib/codemirror.css'

library.add(faPlay, faChevronDown, faTerminal, faChalkboard, faUserFriends, faStickyNote, faUndo, faPhoneAlt, faNodeJs)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')