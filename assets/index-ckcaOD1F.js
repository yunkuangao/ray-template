import{o as V,a as s}from"./@vueuse_core@10.6.1_vue@3.4.0-exgqMBL6.js";import"./@vueuse_shared@10.6.1_vue@3.4.0-DJDYauAH.js";const f=(e,n)=>{const u=Vue.ref(0),o=Vue.ref(0),t=Vue.ref(!1),a=r=>{r.preventDefault(),t.value=!1,Vue.nextTick().then(()=>{const{clientX:i,clientY:d}=r;u.value=i,o.value=d,t.value=!0})};V(e,()=>{t.value=!1});const c=s(e,"contextmenu",a,n),l=s(e,"click",()=>{t.value=!1});return{stop:()=>{c(),l()},x:Vue.readonly(u),y:Vue.readonly(o),show:t}},y=Vue.defineComponent({name:"ContextMenuDemo",setup(){const e=Vue.ref(),n=Vue.ref(!1),u=Vue.ref([{label:"杰·盖茨比",key:"jay gatsby"},{label:"黛西·布坎南",key:"daisy buchanan"},{type:"divider",key:"d1"},{label:"尼克·卡拉威",key:"nick carraway"}]),{x:o,y:t,show:a}=f(e);return{demoOneRef:e,demoOneShow:n,x:o,y:t,show:a,options:u}},render(){const{x:e,y:n,show:u}=this;return Vue.createVNode(naive.NSpace,{vertical:!0,wrapItem:!1},{default:()=>[Vue.createVNode(naive.NCard,{title:"useContextmenuCoordinate + NDropdown 实现右键菜单"},{default:()=>[Vue.createVNode(naive.NSpace,{vertical:!0},{default:()=>[Vue.createVNode("h3",null,[Vue.createTextVNode("默认点击元素外部会关闭菜单。")]),Vue.createVNode("div",{ref:"demoOneRef",style:"width: 100%; height: 200px; background-color: rgba(0, 128, 0, 0.5)"},[Vue.createTextVNode("右击")])]})]}),Vue.createVNode(naive.NDropdown,{show:u,x:e,y:n,options:this.options,trigger:"manual",placement:"bottom-start"},null)]})}});export{y as default};