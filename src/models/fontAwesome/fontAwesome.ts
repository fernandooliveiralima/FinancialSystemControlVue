import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
     faArrowDown,
     faArrowUp,
     faScaleBalanced,
     faUser,
     faUserSecret,
     faBell,
     faTrash,
     faDollarSign, 
     faCircleCheck} from '@fortawesome/free-solid-svg-icons'

export default {
    install(Vue: any) {
        library.add(faUserSecret,
            faUser,
            faScaleBalanced,
            faArrowUp,
            faArrowDown,
            faBell,
            faTrash,
            faDollarSign,
            faCircleCheck)
        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}
     