import tabbar from "./tabbar/src/tabbar";
import header from "./header/src/header";
import plateNumber from "./plateNumber/src/plateNumber";
import Loading from './loading'

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
    plateNumber
}

var uses={
    Loading
}

export default {
    components,
    uses
}