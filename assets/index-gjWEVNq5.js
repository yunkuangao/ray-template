function a(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Vue.isVNode(t)}const n=Vue.defineComponent({name:"RayLink",setup(){return{handleLinkClick:o=>{window.open(o.src)},avatarOptions:[{key:"yunhome",src:"https://yunkuangao.me/",tooltip:"云之家",icon:"https://r2chevereto.yka.moe/avatar.jpeg"},{key:"yun-cloud-images",src:"https://yunkuangao.com/",tooltip:"云图床",icon:"https://r2chevereto.yka.moe/avatar.jpeg"},{key:"ray-js-note",src:"https://note.youdao.com/s/ObWEe2BB",tooltip:"Ray的前端学习笔记",icon:"https://r2chevereto.yka.moe/longmao.navigator.png"},{key:"ray-js-cover",src:"https://note.youdao.com/s/IC8xKPdB",tooltip:"Ray的面试题总结",icon:"https://r2chevereto.yka.moe/longmao.navigator.png"},{key:"ray-template-doc",src:"https://xiaodaigua-ray.github.io/ray-template-doc/",tooltip:"Ray Template Doc",icon:"https://r2chevereto.yka.moe/longmao.navigator.png"},{key:"ray-template-doc-out",src:"https://ray-template.yunkuangao.com/",tooltip:"Ray Template Doc (国内地址)",icon:"https://r2chevereto.yka.moe/longmao.navigator.png"}]}},render(){let t;return Vue.createVNode(naive.NSpace,null,a(t=this.avatarOptions.map(e=>Vue.createVNode(naive.NTooltip,{key:e.key},{trigger:()=>Vue.createVNode(naive.NAvatar,Vue.mergeProps({round:!0,src:e.icon,style:["cursor: pointer"]},{onClick:this.handleLinkClick.bind(this,e)},{objectFit:"cover",size:24}),null),default:()=>e.tooltip})))?t:{default:()=>[t]})}});export{n as R};