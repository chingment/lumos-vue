import tabbar from "./tabbar/src/tabbar";
import header from "./header/src/header";
import plateNumber from "./plateNumber/src/plateNumber";
import cityselect from "./cityselect/src/cityselect";
import Loading from './loading'
import Confirm from './confirm'

// import loading from "./loading/src/loading";
// const components={
//     install(Vue){
//         Vue.component("lumos-tabbar",tabbar)
//         Vue.component("lumos-header",header)
//     }
// };

// if(typeof window !=='undefined'&&window.Vue){
//     window.Vue.use(components)
// }

// export default components;


var components={
    tabbar,
    header,
    cityselect,
    plateNumber
}

var uses={
    Loading,
    Confirm
}

export default {
    components,
    uses
}