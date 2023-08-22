import './assets/main.css'

import { createApp } from 'vue'
import ElementUI from 'element-plus'

import mitt from 'mitt';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationDot, faEnvelope, faPhone, faBars, faGuitar, faShareNodes} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram, faLinkedin, faQq, faWeixin } from '@fortawesome/free-brands-svg-icons'

import 'element-plus/dist/index.css'

import App from './App.vue'

const emitter = mitt();

library.add(faLocationDot, faEnvelope, faPhone, faBars, faGuitar, faShareNodes,
    faFacebook, faInstagram, faLinkedin, faQq, faWeixin)

const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(ElementUI)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
