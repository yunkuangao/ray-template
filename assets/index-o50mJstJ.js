import{t as d,v as s,o as c,z as V}from"./hooks-RczNt3ZG.js";import"./vue-hooks-plus@1.8.5_vue@3.3.13-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./dayjs@1.11.10-IrZctHvJ.js";import"./print-js@1.6.0-gYKv6oGQ.js";import"./currency.js@2.0.4--or6eeOG.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./utils-dkpjxcgk.js";import"./lodash-es@4.17.21-xgd1l9mE.js";import"./@vueuse_core@10.6.1_vue@3.3.13--3XXA66M.js";import"./@vueuse_shared@10.6.1_vue@3.3.13-DJDYauAH.js";import"./interactjs@1.10.26-I0IiZoEj.js";import"./pinia-plugin-persistedstate@3.2.0_pinia@2.1.7-fNhqB16x.js";import"./dom-to-image@2.6.0-eHYYUq-2.js";import"./echarts@5.4.3-Vt5ZmFiA.js";import"./zrender@5.4.4-fafgp4mQ.js";import"./tslib@2.3.0-21A5UWR7.js";import"./@vue_runtime-core@3.3.13-ojP52dlL.js";import"./@vue_reactivity@3.3.13-3fMH8HkH.js";import"./@vue_shared@3.3.13--wkmpvo9.js";import"./side-channel@1.0.4-hl21th03.js";import"./get-intrinsic@1.2.1-NE0DZZ3B.js";import"./has-symbols@1.0.3-fNtejGuA.js";import"./has-proto@1.0.1-dzJH2Y5C.js";import"./function-bind@1.1.1-Y6-kkB5s.js";import"./has@1.0.3-rcPLRdvS.js";import"./call-bind@1.0.2-8lNE5ocE.js";import"./canvas@2.11.2-dZp4QMlu.js";import"./js-binary-schema-parser@2.0.3-CCV6nRej.js";function p(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Vue.isVNode(e)}const Y=Vue.defineComponent({name:"TableView",setup(){const e=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render:t=>t.tags.map(a=>Vue.createVNode(naive.NTag,{type:"info",bordered:!1,style:"margin-right: 6px"},p(a)?a:{default:()=>[a]}))},{title:"Remark",key:"remark",width:300},{title:"Action",key:"actions",render:t=>Vue.createVNode(naive.NSpace,{wrapItem:!1,align:"center"},{default:()=>[Vue.createVNode(naive.NButton,{size:"tiny"},{default:()=>[Vue.createTextVNode("查看")]}),Vue.createVNode(V,{options:[{label:"编辑",key:"edit"},{label:"新增",key:"add"}],onSelect:o=>{window.$message.info(`当前选择: ${o}`)}},null)]})}],r=Vue.ref([...e].map(t=>({...t,width:400}))),u=Vue.ref([{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],remark:"我是一条很长很长的备注"},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"],remark:"我是一条很长很长的备注"},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"],remark:"我是一条很长很长的备注"}]),n=[{label:"编辑",key:"edit"},{label:()=>Vue.createVNode("span",{style:"color: red;"},[Vue.createTextVNode("删除")]),key:"delete"}],i=Vue.reactive({gridItemCount:4,gridCollapsedRows:1,tableLoading:!1}),l=t=>{window.$message.info(`${t}`)};return{...Vue.toRefs(i),tableData:u,actionColumns:r,baseColumns:e,tableMenuOptions:n,handleMenuSelect:l}},render(){return Vue.createVNode(naive.NSpace,{wrapItem:!1,vertical:!0},{default:()=>[Vue.createVNode(naive.NCard,{title:"RTable"},{default:()=>[Vue.createTextVNode("基于 NDataTable 封装，继承该组件所有 props 属性。查看 RTable props 文件即可查看该组件拓展项")]}),Vue.createVNode(d,{bordered:!1,collapsedRows:this.gridCollapsedRows,cols:this.gridItemCount,onUpdateValue:e=>window.$message.info(`我是 RCollapseGrid 组件${e?"收起":"展开"}的回调函数`)},{action:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NButton,{type:"primary"},{default:()=>[Vue.createTextVNode("搜索")]}),Vue.createVNode(naive.NButton,null,{default:()=>[Vue.createTextVNode("重置")]})]),default:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(naive.NGridItem,null,{default:()=>[Vue.createVNode(naive.NSelect,null,null)]}),Vue.createVNode(naive.NGridItem,null,{default:()=>[Vue.createVNode(naive.NInput,null,null)]}),Vue.createVNode(naive.NGridItem,null,{default:()=>[Vue.createVNode(naive.NDatePicker,{type:"datetimerange",clearable:!0},null)]}),Vue.createVNode(naive.NGridItem,null,{default:()=>[Vue.createVNode(naive.NInput,null,null)]}),Vue.createVNode(naive.NGridItem,null,{default:()=>[Vue.createVNode(naive.NInput,null,null)]})])}),Vue.createVNode(s,{scrollX:2e3,title:Vue.createVNode(naive.NSpace,{align:"center"},{default:()=>[Vue.createVNode("span",null,[Vue.createTextVNode("标题插槽:")]),Vue.createVNode(naive.NSwitch,{onUpdateValue:e=>this.tableLoading=e},null)]}),data:this.tableData,columns:this.actionColumns,"onUpdate:columns":e=>this.actionColumns=e,pagination:{pageSize:10},contextMenuOptions:this.tableMenuOptions,loading:this.tableLoading,onContextMenuClick:this.handleMenuSelect.bind(this),toolOptions:[Vue.createVNode(naive.NPopover,null,{trigger:()=>Vue.createVNode(c,{name:"search",size:"18",cursor:"pointer",onClick:()=>{window.$message.info("点击了搜索按钮")}},null),default:()=>"我是自定义工具栏示例"})]},{tableFooter:()=>"表格的底部内容区域插槽，有时候你可能会用上",tableAction:()=>"表格的操作区域内容插槽，有时候可能会用上"})]})}});export{Y as default};