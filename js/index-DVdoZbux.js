import{a1 as o,a2 as u,e as i}from"./hooks-DxjADXf2.js";import"./dayjs@1.11.10-BYZwCyGy.js";import"./print-js@1.6.0-C3lAJnMa.js";import"./awesome-qr@2.1.5-rc.0-Ds7AaOTE.js";import"./vue-hooks-plus@1.9.0_vue@3.4.26-C_BRgauB.js";import"./lodash@4.17.21-CM7ROh5r.js";import"./js-cookie@3.0.5-Z_8Sd105.js";import"./screenfull@5.2.0-DuGDi0R7.js";import{g as a}from"./utils-XwSDXJUe.js";import"./currency.js@2.0.4-9OAR_aOO.js";import"./lodash-es@4.17.21-Dos9GOhk.js";import"./@vueuse_core@10.9.0_vue@3.4.26-BxvIaqQO.js";import"./@vueuse_shared@10.9.0_vue@3.4.26-7aSumFzu.js";import"./interactjs@1.10.26-DmsZVOf4.js";import"./pinia-plugin-persistedstate@3.2.1_pinia@2.1.7-RV7uh3T-.js";import"./dom-to-image@2.6.0-CaeIWam-.js";import"./echarts@5.5.0-BEyY33Zi.js";import"./zrender@5.5.0-JN1hODMT.js";import"./tslib@2.3.0-BDyQ-Jie.js";import"./@vue_runtime-core@3.4.26-Cq5aFJKF.js";import"./@vue_reactivity@3.4.26-DTbxPGxS.js";import"./@vue_shared@3.4.26-DWpY0PUk.js";import"./canvas@2.11.2-CVRTzJty.js";import"./js-binary-schema-parser@2.0.3-D0akQrQ7.js";const p=Vue.defineComponent({name:"PageResult",props:{...naive.resultProps},setup(){const{router:e}=u();return{goBack:()=>{const{appMenuKey:r}=i,t=a(r,"sessionStorage",{defaultValue:""});t&&e.replace(t)}}},render(){const{goBack:e}=this;return Vue.createVNode("div",{class:"error-page"},[Vue.createVNode(naive.NResult,Vue.mergeProps(this.$props,{status:"500",title:"404 资源不存在",description:"小调皮你走错地方了"}),{...this.$slots,footer:()=>Vue.createVNode(naive.NFlex,{align:"center",justify:"center"},{default:()=>[Vue.createVNode(naive.NButton,{onClick:o.bind(this,!0)},{default:()=>[Vue.createTextVNode("返回首页")]}),Vue.createVNode(naive.NButton,{type:"primary",onClick:e.bind(this)},{default:()=>[Vue.createTextVNode("返回上一页面")]})]})})])}}),K=Vue.defineComponent({name:"ErrorPage404",setup(){return{}},render(){return Vue.createVNode(p,{status:"404"},null)}});export{K as default};
