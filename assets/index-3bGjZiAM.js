import{v as m}from"./hooks-dYmBnPN9.js";import"./vue-hooks-plus@1.8.5_vue@3.3.11-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./currency.js@2.0.4--or6eeOG.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./utils-BCFhJ9xZ.js";import"./lodash-es@4.17.21-B0eCOOcg.js";import"./@vueuse_core@10.6.1_vue@3.3.11-9HDuBd2S.js";import"./@vueuse_shared@10.6.1_vue@3.3.11-DJDYauAH.js";import"./interactjs@1.10.26-I0IiZoEj.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.7-fNhqB16x.js";import"./dom-to-image@2.6.0-eHYYUq-2.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.11-UFkELmxv.js";import"./@vue_reactivity@3.3.11-V69wa58A.js";import"./@vue_shared@3.3.11--wkmpvo9.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";const P=Vue.defineComponent({name:"RouterDemoHome",setup(){const t=VueRouter.useRouter(),r=Vue.ref([{title:"姓名",key:"name"},{title:"地址",key:"address"},{title:"联系方式",key:"phone"},{title:"操作",key:"",render:e=>Vue.createVNode(naive.NSpace,{align:"center"},{default:()=>[Vue.createVNode(naive.NButton,{type:"info",text:!0,size:"tiny",onClick:()=>{t.push({path:"/router-demo/router-demo-detail",query:{name:e.name}})}},{default:()=>[Vue.createTextVNode("详情")]})]})}]),o=[];for(let e=0;e<10;e++)o.push({name:"张三",address:"New York No. 1 Lake Park",phone:"010-121212",key:e});return{dataSource:o,columns:r}},render(){return Vue.createVNode(naive.NSpace,{wrapItem:!1},{default:()=>[Vue.createVNode(m,{columns:this.columns,"onUpdate:columns":t=>this.columns=t,data:this.dataSource},null)]})}});export{P as default};
