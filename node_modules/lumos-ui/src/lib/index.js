import tabbar from "./tabbar/src/tabbar";
import header from "./header/src/header";
const components={
    install(Vue){
        Vue.component("lumos-tabbar",tabbar)
        Vue.component("lumos-header",header)
    }
};

if(typeof window !=='undefined'&&window.Vue){
    window.Vue.use(components)
}

export default components;