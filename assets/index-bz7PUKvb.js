import{a as u}from"./vue-hooks-plus@1.8.5_vue@3.3.11-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import{s as o}from"./instance-_xgEFhdZ.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";import"./qs@6.11.2-wwOruwhc.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";import"./hooks-dYmBnPN9.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./currency.js@2.0.4--or6eeOG.js";import"./utils-BCFhJ9xZ.js";import"./lodash-es@4.17.21-B0eCOOcg.js";import"./@vueuse_core@10.6.1_vue@3.3.11-9HDuBd2S.js";import"./@vueuse_shared@10.6.1_vue@3.3.11-DJDYauAH.js";import"./interactjs@1.10.26-I0IiZoEj.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.7-fNhqB16x.js";import"./dom-to-image@2.6.0-eHYYUq-2.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.11-UFkELmxv.js";import"./@vue_reactivity@3.3.11-V69wa58A.js";import"./@vue_shared@3.3.11--wkmpvo9.js";function D(e,t){return u(()=>o(e),Object.assign({},t))}const F=e=>o({url:`https://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz&city=${e}`,method:"get"}),l=()=>o({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get"}),X=Vue.defineComponent({name:"RAxios",setup(){const e=Vue.reactive({weatherData:[],inputCityValue:null,throttleDemoInputValue:null,debounceDemoInputValue:null,weatherDemoInputValue:null}),{data:t,loading:a,run:r}=u(l,{throttleWait:1e3,manual:!0}),{data:n,loading:d,run:V}=u(l,{debounceWait:1e3,manual:!0}),{data:i,loading:c,run:m}=u(F,{throttleWait:1e3,manual:!0}),{data:p,loading:s,run:N}=D({url:"https://jsonplaceholder.typicode.com/todos/1",method:"get",cancelConfig:{needCancel:!0}},{manual:!0});return{...Vue.toRefs(e),throttleDemoValue:t,throttleDemoLoading:a,throttleDemoRun:r,debounceDemoValue:n,debounceDemoLoading:d,debounceDemoRun:V,weatherDemoValue:i,weatherDemoLoading:c,weatherDemoRun:m,demoData:p,demoLoading:s,demoRun:N}},render(){return Vue.createVNode(naive.NLayout,null,{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode("h1",null,[Vue.createTextVNode("请求")]),Vue.createVNode(naive.NCard,null,{default:()=>[Vue.createVNode("h2",null,[Vue.createTextVNode("useRequest")]),Vue.createVNode("p",null,[Vue.createTextVNode("支持配置化请求数据")]),Vue.createVNode("h2",null,[Vue.createTextVNode("useHookPlusRequest")]),Vue.createVNode("p",null,[Vue.createTextVNode("支持包裹一个拥有 promise 状态的异步函数，可以用来包裹一个 axios 请求返回值方法")])]}),Vue.createVNode("h1",null,[Vue.createTextVNode("使用 useRequest 获取")]),Vue.createVNode(naive.NCard,{title:"请求函数"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("1.基于 axios 封装，能够自动取消连续请求，避免重复渲染造成问题")]),Vue.createVNode("h3",null,[Vue.createTextVNode("2.打开控制台 => 网络 => 使用低速3g网络 => 查看控制台被取消的请求")]),Vue.createVNode("h3",null,[Vue.createTextVNode("3.详情请查看文档")])]}),Vue.createVNode(naive.NCard,{title:"useRequest示例（手动触发）"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>{var e;return[Vue.createVNode(naive.NButton,{onClick:this.demoRun.bind(this)},{default:()=>[Vue.createTextVNode("获取数据")]}),Vue.createVNode("h3",null,[Vue.createTextVNode("结果: "),this.demoLoading?"获取中...":(e=this.demoData)==null?void 0:e.title])]}})]}),Vue.createVNode("h1",null,[Vue.createTextVNode("使用 useHookPlusRequest 获取")]),Vue.createVNode(naive.NCard,{title:"节流"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.throttleDemoInputValue,"onUpdate:value":e=>this.throttleDemoInputValue=e,onUpdateValue:()=>{this.throttleDemoRun()}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("不论触发多少次，一秒钟之内仅会触发一次")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.throttleDemoLoading?"获取中...":"获取成功!!!"])]})]}),Vue.createVNode(naive.NCard,{title:"防抖"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.debounceDemoInputValue,"onUpdate:value":e=>this.debounceDemoInputValue=e,onUpdateValue:()=>{this.debounceDemoRun()}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("一秒后才会执行，如果中途重新请求，则会重新计时")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.debounceDemoLoading?"获取中...":"获取成功!!!"])]})]}),Vue.createVNode(naive.NCard,{title:"获取气候"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.weatherDemoInputValue,"onUpdate:value":e=>this.weatherDemoInputValue=e,onUpdateValue:e=>{this.weatherDemoRun(e)}},null),Vue.createVNode("h3",null,[Vue.createTextVNode("该示例演示了如何根据动态值获取数据")]),Vue.createVNode("h3",null,[Vue.createTextVNode("当前状态: "),this.weatherDemoLoading?"获取中...":"获取成功!!!"])]})]})]})]})}});export{X as default};
