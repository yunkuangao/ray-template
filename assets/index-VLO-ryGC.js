import{g as B,b as s,B as A,C as D,E,F as v,G as h}from"./hooks-dYmBnPN9.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./vue-hooks-plus@1.8.5_vue@3.3.11-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./currency.js@2.0.4--or6eeOG.js";import"./utils-BCFhJ9xZ.js";import"./lodash-es@4.17.21-B0eCOOcg.js";import"./@vueuse_core@10.6.1_vue@3.3.11-9HDuBd2S.js";import"./@vueuse_shared@10.6.1_vue@3.3.11-DJDYauAH.js";import"./interactjs@1.10.26-I0IiZoEj.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.7-fNhqB16x.js";import"./dom-to-image@2.6.0-eHYYUq-2.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.11-UFkELmxv.js";import"./@vue_reactivity@3.3.11-V69wa58A.js";import"./@vue_shared@3.3.11--wkmpvo9.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";const te=Vue.defineComponent({name:"TemplateHooks",setup(){const u=Vue.ref(""),t=B("layoutContentMaximize"),a=Vue.ref(s().getWatermarkConfig.value.content),{navigationTo:o}=A(),{maximize:r,isLayoutContentMaximized:i}=D(),{reload:n,openSpin:V,closeSpin:d}=E(),{showWatermark:l,hiddenWatermark:c,setWatermarkContent:m,toggleWatermark:F}=v(),{changeDarkTheme:N,changeLightTheme:e,toggleTheme:p,getAppTheme:C}=h();return{navigationTo:o,reload:n,currentMenuOption:u,maximize:r,maximizeRef:t,openSpin:V,closeSpin:d,showWatermark:l,hiddenWatermark:c,setWatermarkContent:m,watermark:a,toggleWatermark:F,changeDarkTheme:N,changeLightTheme:e,toggleTheme:p,getAppTheme:C,isLayoutContentMaximized:i}},render(){const{navigationTo:u,reload:t,maximize:a,openSpin:o,closeSpin:r,showWatermark:i,hiddenWatermark:n,setWatermarkContent:V,toggleWatermark:d,changeDarkTheme:l,changeLightTheme:c,toggleTheme:m,getAppTheme:F,isLayoutContentMaximized:N}=this;return Vue.createVNode(naive.NSpace,{wrapItem:!1,vertical:!0},{default:()=>[Vue.createVNode(naive.NCard,{title:"接口说明"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("hooks/template 包存放模板专属 hook 方法。这里不做过多的赘述，可以查看文档具体描述。")])]}),Vue.createVNode(naive.NCard,{title:"useTheme 主题"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("getAppTheme 获取当前主题色: "),F().themeLabel]),Vue.createVNode(naive.NSpace,null,{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>l()},{default:()=>[Vue.createTextVNode("切换暗黑主题")]}),Vue.createVNode(naive.NButton,{onClick:()=>c()},{default:()=>[Vue.createTextVNode("切换明亮主题")]}),Vue.createVNode(naive.NButton,{onClick:()=>m()},{default:()=>[Vue.createTextVNode("切换主题")]})]})]})]}),Vue.createVNode(naive.NCard,{title:"useWatermark 水印"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode(naive.NInput,{value:this.watermark,"onUpdate:value":e=>this.watermark=e,onInput:e=>{V(e)}},null),Vue.createVNode(naive.NSpace,null,{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>i()},{default:()=>[Vue.createTextVNode("显示水印")]}),Vue.createVNode(naive.NButton,{onClick:()=>n()},{default:()=>[Vue.createTextVNode("隐藏水印")]}),Vue.createVNode(naive.NButton,{onClick:()=>d()},{default:()=>[Vue.createTextVNode("切换水印")]})]})]})]}),Vue.createVNode(naive.NCard,{title:"useSpinning"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("手动刷新内容区域，会使得当前路由页面内容强制重新加载（会执行完整的 vue 生命周期）。默认 800ms 延迟。")]),Vue.createVNode("br",null,null),Vue.createVNode(naive.NSpace,null,{default:()=>[Vue.createVNode(naive.NButton,{onClick:()=>{t()}},{default:()=>[Vue.createTextVNode("刷新（强制刷新）")]}),Vue.createVNode(naive.NButton,{onClick:()=>{o(),setTimeout(()=>{r()},800)}},{default:()=>[Vue.createTextVNode("触发加载动画（不强制刷新）")]})]})]}),Vue.createVNode(naive.NCard,{title:"useMaximize 内容区域最大化"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("isLayoutContentMaximized 检测当前内容区域是否最大化:"),N?"最大化":"正常尺寸"]),Vue.createVNode(naive.NButton,{onClick:()=>{a(!this.maximizeRef)}},{default:()=>[Vue.createTextVNode("最大化内容区域")]})]}),Vue.createVNode(naive.NCard,{title:"useAppNavigation 导航方法"},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("navigationTo 参数为正整数时，会更具当前的菜单顺序进行自动导航匹配。但是此方法仅能导航一级菜单。并且如果导航菜单非根菜单项，会自动递归导航至一子菜单。")]),Vue.createVNode("br",null,null),Vue.createVNode(naive.NButton,{onClick:()=>u(16)},{default:()=>[Vue.createTextVNode("跳转至多级菜单")]})]})]})}});export{te as default};
