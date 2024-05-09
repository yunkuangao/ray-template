var g={pkg:{dependencies:{"@vueuse/core":"^10.9.0","awesome-qr":"2.1.5-rc.0",axios:"^1.6.7",clipboard:"^2.0.11","currency.js":"^2.0.4",dayjs:"^1.11.10","dom-to-image":"2.6.0",echarts:"^5.5.0",interactjs:"1.10.26",jsbarcode:"3.11.6","lodash-es":"^4.17.21",mockjs:"1.1.0","naive-ui":"^2.38.2",pinia:"^2.1.7","pinia-plugin-persistedstate":"^3.2.0","print-js":"^1.6.0",vue:"^3.4.26","vue-demi":"0.14.6","vue-hooks-plus":"1.9.0","vue-i18n":"^9.13.1","vue-router":"^4.3.0"},devDependencies:{"@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@interactjs/types":"1.10.21","@intlify/unplugin-vue-i18n":"^2.0.0","@types/crypto-js":"^4.1.1","@types/dom-to-image":"2.6.7","@types/jsbarcode":"3.11.4","@types/lodash-es":"^4.17.11","@types/mockjs":"1.0.7","@typescript-eslint/eslint-plugin":"^6.5.0","@typescript-eslint/parser":"^6.5.0","@vitejs/plugin-vue":"^5.0.4","@vitejs/plugin-vue-jsx":"^3.1.0","@vitest/ui":"1.4.0","@vue/eslint-config-prettier":"^9.0.0","@vue/eslint-config-typescript":"^12.0.0","@vue/test-utils":"2.4.3",autoprefixer:"^10.4.15",depcheck:"^1.4.5",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-config-standard-with-typescript":"^43.0.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-promise":"^6.1.1","eslint-plugin-vue":"^9.25.0","happy-dom":"14.3.1",husky:"8.0.3","lint-staged":"^15.1.0",postcss:"^8.4.31","postcss-px-to-viewport-8-plugin":"1.2.3",prettier:"^3.2.5",sass:"1.71.1","svg-sprite-loader":"^6.0.11",typescript:"^5.2.2","unplugin-auto-import":"^0.17.5","unplugin-vue-components":"^0.26.0",vite:"^5.2.11","vite-bundle-analyzer":"0.9.4","vite-plugin-cdn2":"1.1.0","vite-plugin-compression":"^0.5.1","vite-plugin-ejs":"^1.7.0","vite-plugin-eslint":"1.8.1","vite-plugin-imp":"^2.4.0","vite-plugin-inspect":"^0.8.3","vite-plugin-mock-dev-server":"1.4.7","vite-plugin-svg-icons":"^2.0.1","vite-svg-loader":"^4.0.0","vite-tsconfig-paths":"4.3.2",vitest:"1.5.2","vue-tsc":"^2.0.11"},name:"ray-template",version:"4.8.3"},layout:{copyright:"Copyright © 2022-present Ray",sideBarLogo:{icon:"ray",title:"Ray Template",url:"/dashboard",jumpType:"station"}},appPrimaryColor:{primaryColor:"#2d8cf0",primaryFadeColor:"rgba(45, 140, 240, 0.3)"}};function a(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Vue.isVNode(t)}const V=Vue.defineComponent({name:"RelyAbout",setup(){const{pkg:t}=g,{dependencies:i,devDependencies:n,name:e,version:d}=t,c=[{title:"依赖名称",key:"name"},{title:"依赖版本",key:"relyVersion"},{title:"依赖地址",key:"relyAddress"}],l=Vue.ref([]),o=Vue.ref([]),v=[{name:"项目名称",label:e},{name:"版本信息",label:d},{name:"项目地址",label:"GitHub",url:"https://github.com/XiaoDaiGua-Ray/ray-template"}],m=()=>{const s=r=>Object.keys(r).reduce((p,u)=>(p.push({name:u,relyVersion:r[u],relyAddress:""}),p),[]);l.value=s(i),o.value=s(n)},y=s=>{s.url&&window.open(s.url)};return Vue.onBeforeMount(()=>{m()}),{columns:c,dependenciesOptions:l,devDependenciesOptions:o,templateOptions:v,handleTagClick:y}},render(){let t,i,n;return Vue.createVNode("div",{class:"rely-about"},[Vue.createVNode(naive.NCard,{title:"关于项目"},{default:()=>[Vue.createTextVNode("ray template 是一个基于: tsx pinia vue3.x vite sass 的中后台解决方案. 项目干净与轻巧, 已经集成了很多项目中可能需要的搬砖工具可以让你快速起一个相关项目, 并且不需要剔除大量无用页面与组件.")]}),Vue.createVNode(naive.NCard,{title:"项目信息"},{default:()=>[Vue.createVNode(naive.NDescriptions,{bordered:!0,labelPlacement:"left"},a(t=this.templateOptions.map(e=>Vue.createVNode(naive.NDescriptionsItem,{key:e.name,label:e.name},{default:()=>[Vue.createVNode(naive.NTag,Vue.mergeProps({bordered:!1,type:"info"},{onClick:this.handleTagClick.bind(this,e)},{style:[e.url?"cursor: pointer":""]}),{default:()=>[e.label]})]})))?t:{default:()=>[t]})]}),Vue.createVNode(naive.NCard,{title:"生产依赖"},{default:()=>[Vue.createVNode(naive.NDescriptions,{bordered:!0,labelPlacement:"left"},a(i=this.dependenciesOptions.map(e=>Vue.createVNode(naive.NDescriptionsItem,{key:e.name,label:e.name},{default:()=>[e.relyVersion]})))?i:{default:()=>[i]})]}),Vue.createVNode(naive.NCard,{title:"开发依赖"},{default:()=>[Vue.createVNode(naive.NDescriptions,{bordered:!0,labelPlacement:"left"},a(n=this.devDependenciesOptions.map(e=>Vue.createVNode(naive.NDescriptionsItem,{key:e.name,label:e.name},{default:()=>[e.relyVersion]})))?n:{default:()=>[n]})]})])}});export{V as default};