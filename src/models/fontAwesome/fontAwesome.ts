import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
     faArrowDown,
     faArrowUp,
     faScaleBalanced,
     faUser,
     faUserSecret,
     faBell,
     faTrash } from '@fortawesome/free-solid-svg-icons'

export default {
    install(Vue: any) {
        library.add(faUserSecret,
            faUser,
            faScaleBalanced,
            faArrowUp,
            faArrowDown,
            faBell,
            faTrash)
        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}
     