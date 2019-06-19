import tabbar from "./tabbar/src/tabbar";

const components={
    install(Vue){
        Vue.component("lumos-tabbar",tabbar)
    }
};

if(typeof window !=='undefined'&&window.Vue){
    window.Vue.use(components)
}

export default components;