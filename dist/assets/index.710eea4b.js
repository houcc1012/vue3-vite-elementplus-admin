var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&n(e,o,i[o]);if(t)for(var o of t(i))l.call(i,o)&&n(e,o,i[o]);return e};import{r as o,o as s,a as r,t as c,d as u,u as p,w as d,c as m,b as g,e as h,f,g as v,h as b,K as y,i as _,j as E,k as S,N as k,l as I,M as w,m as C,n as T,p as A,q as L,s as V,v as x,F as M,x as N,T as R,y as O,z as P,A as D,B as H,H as z,_ as K}from"./vendor.f21cd016.js";function j(e=[],t={keyName:"id",valueName:"name"}){let a={};if(0!=e.length)return t&&t.keyName&&t.valueName?(e.forEach((e=>{a[e[t.keyName]]=e[t.valueName]})),a):t&&t.keyName?(e.forEach((e=>{a[e[t.keyName]]=e})),a):void 0}function W(e){let t=Object.prototype.toString.call(e);return t=t.replace(/^\[object\s/,""),t=t.replace(/\]$/,""),t}function U(e=[],t="children",a){if(!Array.isArray(e))throw new error("请传入数组");e.forEach((e=>{"function"==typeof a&&a(e),e[t]&&Array.isArray(e[t])&&U(e[t],t,a)}))}const G=()=>{let e=document.documentElement.clientHeight||document.body.clientHeight;return{clientWidth:document.documentElement.clientWidth||document.body.clientWidth,clientHeight:e}};function B(){const e=o({clientHeight:G().clientHeight,clientWidth:G().clientWidth}),t=(a=()=>{e.clientHeight=G().clientHeight,e.clientWidth=G().clientWidth},l=300,n=null,function(){var e=this,t=arguments;clearTimeout(n),n=setTimeout((function(){a.apply(e,t)}),l)});var a,l,n;return s((()=>{window.addEventListener("resize",t)})),r((()=>{window.removeEventListener("resize",t)})),i({},c(e))}const $=u({name:"App",setup(){const e=p(),{clientWidth:t,clientHeight:a}=B();return t.value<=750&&e.commit("app/SET_DEVICE","mobile"),t.value>750&&e.commit("app/SET_DEVICE","desktop"),d([t,a],(t=>{t[0]<=750&&e.commit("app/SET_DEVICE","mobile"),t[0]>750&&e.commit("app/SET_DEVICE","desktop"),e.commit("app/SET_WINDOW_RECT",{clientWidth:t[0],clientHeight:t[1]})})),{pageKeepAlive:m((()=>e.state.app.pageKeepAlive))}}});let J;$.render=function(e,t,a,l,n,i){const o=g("router-view"),s=g("AdminLayout");return e.$route.meta.layout&&"admin"==e.$route.meta.layout?(h(),f(s,{key:0,ref:"adminLayout"},{default:v((()=>[b(o,{class:"router-view"},{default:v((({Component:t})=>[1==e.pageKeepAlive?(h(),f(y,{key:0},[(h(),f(_(t)))],1024)):(h(),f(_(t),{key:1}))])),_:1})])),_:1},512)):(h(),f(o,{key:1,class:"router-view"}))};const F={},Y=function(e,t){if(!t||0===t.length)return e();if(void 0===J){const e=document.createElement("link").relList;J=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in F)return;F[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":J,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))},q={"/home":()=>Y((()=>import("./index.cc670981.js")),["assets/index.cc670981.js","assets/index.efa6b091.css","assets/vendor.f21cd016.js"]),"/system/user-management":()=>Y((()=>import("./index.d41203df.js")),["assets/index.d41203df.js","assets/index.b06ca65d.css","assets/useTableData.6da28c31.js","assets/vendor.f21cd016.js","assets/index.ffebf55c.js"]),"/system/role-management":()=>Y((()=>import("./index.0282d2bf.js")),["assets/index.0282d2bf.js","assets/index.3d6b04f8.css","assets/vendor.f21cd016.js","assets/index.ffebf55c.js","assets/useTableData.6da28c31.js"])},Q=[{name:"登录",path:"/login",component:()=>Y((()=>import("./index.930d31c9.js")),["assets/index.930d31c9.js","assets/index.1cb7eec7.css","assets/vendor.f21cd016.js","assets/index.ffebf55c.js"]),meta:{title:"登录",auth:!1,tagsView:!1,tagsViewAffix:!1}},{name:"404",path:"/404",component:()=>Y((()=>import("./index.e46c323d.js")),["assets/index.e46c323d.js","assets/vendor.f21cd016.js"]),meta:{title:"404页面未找到",auth:!1,tagsView:!1,tagsViewAffix:!1}},{path:"/:patchAll(\\S+)",redirect:"/404"}],X=E({routes:Q,history:S()});function Z(e){if(e&&0!=e.length){for(let t=0;t<e.length;t++){let a=e[t];"group"===a.type?Z(a.children):X.addRoute({name:a.name,path:a.url||"",component:a.url?q[a.url]:"",meta:{title:a.name||"",auth:!0,layout:a.layout||"admin",tagsView:a.tagsView||!0,tagsViewAffix:a.tagsViewAffix||!1,breadcrumb:a.breadcrumb||[]}})}X.addRoute({path:"/",redirect:"/home"})}}X.beforeEach(((e,t,a)=>{k.start(),e.meta&&e.meta.title&&(document.title=e.meta.title);let l=localStorage.getItem("userInfo")||null;"/"!=e.fullPath||l?e.meta.auth?l?a():X.push({path:"/login"}):a():X.replace("/login")})),X.afterEach((()=>{k.done()}));let ee=localStorage.getItem("menu");function te(){const e=E({routes:Q,history:S()});X.matcher=e.matcher}ee&&Z(JSON.parse(ee));const ae=()=>{let e=localStorage.getItem("visitedRoutes");return e?JSON.parse(e):[]},le=e=>{localStorage.setItem("visitedRoutes",JSON.stringify(e))};var ne=I({modules:{app:{namespaced:!0,state:()=>({appName:"Vue3-Element+管理系统",appLogo:"./assets/logo.61ee5eb1.png",device:"desktop",pageIndicator:localStorage.getItem("pageIndicator")||"面包屑",menuCollapse:localStorage.getItem("menuCollapse")||0,pageKeepAlive:localStorage.getItem("getCachePageKeepAlive")||0,windowRect:{clientHeight:G().clientHeight,clientWidth:G().clientWidth}}),getters:{userInfo(){let e=localStorage.getItem("userInfo");return e?JSON.parse(e):{}},menu(){let e=localStorage.getItem("menu");return e?JSON.parse(e):[]}},mutations:{SET_DEVICE(e,t){e.device=t,"mobile"===t&&this.commit("app/TOGGLE_MENU_COLLAPSE",1),"desktop"===t&&this.commit("app/TOGGLE_MENU_COLLAPSE",0)},TOGGLE_MENU_COLLAPSE(e,t){e.menuCollapse!==t&&(e.menuCollapse=t,localStorage.setItem("menuCollapse",e.menuCollapse))},SET_MENU_TAG_SWITCHER(e,t="面包屑"){e.pageIndicator=t,localStorage.setItem("pageIndicator",e.pageIndicator)},SET_PAGE_KEEP_ALIVE(e,t=0){e.pageKeepAlive=t,localStorage.setItem("pageKeepAlive",e.pageKeepAlive)},SET_WINDOW_RECT(e,t){e.windowRect={clientHeight:t.clientHeight||0,clientWidth:t.clientWidth||0}}},actions:{}},tagsView:{namespaced:!0,state:()=>({visitedRoutes:ae()}),mutations:{ADD_VISITED_ROUTE(e,t){let a=e.visitedRoutes.find((e=>e.path===t.path));a?t.fullPath!==a.fullPath&&Object.assign(a,t):(e.visitedRoutes.push(i(i({},a),t)),le(e.visitedRoutes))},DELETE_VISITED_ROUTE(e,t){e.visitedRoutes.forEach(((a,l)=>{a.path===t.path&&e.visitedRoutes.splice(l,1)})),le(e.visitedRoutes)},DELETE_OTHERS_VISITED_ROUTE(e,t){e.visitedRoutes=e.visitedRoutes.filter((e=>e.path==t.path)),le(e.visitedRoutes)},UPDATE_VISITED_ROUTE(e,t){e.visitedRoutes.forEach((e=>{e.path===t.path&&(e=Object.assign(e,t))}))}}}},devtools:!0});w.setup({timeout:500}),w.mock("/login","post",(e=>{let t=e.body&&JSON.parse(e.body);return"admin"===t.username&&"admin"===t.password?{success:!0,msg:"登录成功",data:{userInfo:{id:"32hnhszj22872hwkjae",name:"系统管理员",role:"管理员",avatar:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3305298991,2024211813&fm=26&gp=0.jpg"},menu:[{id:"1",name:"系统管理",icon:"el-icon-setting",url:"/system",breadcrumb:["系统管理"],type:"group",children:[{id:"1-1",name:"用户管理",icon:"",type:"page",url:"/system/user-management",children:null,breadcrumb:["系统管理","用户管理"]},{id:"1-2",name:"角色管理",icon:"",type:"page",url:"/system/role-management",children:null,breadcrumb:["系统管理","角色管理"]}]}]}}:"2"===t.username&&"2"===t.password?{success:!0,msg:"登录成功",data:{userInfo:{id:"ashwh2872dkjsahhwkjae",name:"张三",role:"普通用户",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2448425926,3379370176&fm=11&gp=0.jpg"},menu:[{id:"2",name:"统计",icon:"",type:"page",url:"/chart",children:null,breadcrumb:[{name:"统计",url:"/chart"}]}]}}:{success:!1,msg:"密码错误！",data:{}}}));let ie=new Array(100).fill({id:"",name:""}).map(((e,t)=>({id:t,img:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3305298991,2024211813&fm=26&gp=0.jpg",userName:"张三"+t,sex:"男",role:"管理员",phone:"13323131321",loginTime:"32",lastLoginTime:"2020-12-12 01:00:00"})));const oe=(e,t)=>{let a=[];for(let l=0;l<e.length;l+=t)a.push(e.slice(l,l+t));return a},se=e=>e?JSON.parse(e):{};w.mock("/userList","post",(e=>{let t=se(e.body);const a=t.pageSize,l=t.currentPage,n=t.keyword;let i=ie.filter((e=>new RegExp(n).test(e.userName)));return{success:!0,msg:"",data:{list:oe(i,a)[l-1],currentPage:l,totalCount:i.length,totalPage:oe(i,a).length,pageSize:a}}})),w.mock("/userList/add","post",(e=>{let t=se(e.body);return ie.unshift({id:Math.random(),name:t.username}),{success:!0,msg:"",data:{}}})),w.mock("/userList/delete","post",(e=>{let t=se(e.body);return ie=ie.filter((e=>e.id!==t.id)),{success:!0,msg:"",data:{}}}));let re=[{id:1,roleName:"管理员",remark:"--"},{id:2,roleName:"超级管理员",remark:"--"},{id:3,roleName:"普通用户",remark:"--"}];const ce=(e,t)=>{let a=[];for(let l=0;l<e.length;l+=t)a.push(e.slice(l,l+t));return a},ue=e=>e?JSON.parse(e):{};w.mock("/roleList","post",(e=>{let t=ue(e.body);const a=t.pageSize,l=t.currentPage,n=t.keyword;let i=re.filter((e=>new RegExp(n).test(e.name)));return{success:!0,msg:"",data:{list:ce(i,a)[l-1],currentPage:l,totalCount:i.length,totalPage:ce(i,a).length,pageSize:a}}})),w.mock("/roleList/add","post",(e=>{let t=ue(e.body);return re.unshift({id:Math.random(),name:t.name}),{success:!0,msg:"",data:{}}})),w.mock("/roleList/delete","post",(e=>{let t=ue(e.body);return re=re.filter((e=>e.id!==t.id)),{success:!0,msg:"",data:{}}}));const pe=u({name:"AdminLayout",setup(){const e=p();return{sideMenuCollapse:m((()=>e.state.app.menuCollapse)),pageSwither:m((()=>e.state.app.pageIndicator)),sideMenu:m((()=>e.getters["app/menu"])),device:m((()=>e.state.app.device))}}}),de={class:"layout"},me={class:"layout-main"},ge={class:"app-main"},he={class:"app-main-top"},fe={class:"app-main-content"};pe.render=function(e,t,a,l,n,i){const o=g("AppHeader"),s=g("MobileAppHeader"),r=g("AppSideBar"),c=g("AppBreadcrumb"),u=g("AppTagsViewSwitcher");return h(),f("div",de,["desktop"==e.device?(h(),f(o,{key:0})):C("",!0),"mobile"==e.device?(h(),f(s,{key:1})):C("",!0),b("div",me,[b("aside",null,[b(r,{menu:e.sideMenu,sideMenuCollapse:1==e.sideMenuCollapse},null,8,["menu","sideMenuCollapse"])]),b("div",ge,[b("div",he,["面包屑"===e.pageSwither?(h(),f(c,{key:0,class:"breadcrumb-container"})):C("",!0),"标签切换"===e.pageSwither?(h(),f(u,{key:1})):C("",!0)]),b("main",fe,[T(e.$slots,"default")])])])])};const ve=u({name:"TagsViewSwitcher",setup(){const e=p(),t=A(),a=L(),l=V();let n=e.state.tagsView.visitedRoutes;const i=x(""),r=()=>{t.meta.tagsView&&e.commit("tagsView/ADD_VISITED_ROUTE",t)},c=()=>{i.value=t.path,r()};d((()=>t.fullPath),(()=>{c()})),s((()=>{c()}));const u=o({display:"none",left:"",top:""});return window.addEventListener("click",(function(){u.display="none"})),{tabsActive:i,visitedRoutes:n,onTabsSwitch:e=>{e.paneName!=t.path&&(a.push({path:e.paneName}),r())},onTabsDelete:i=>{let o=n.find((e=>e.path===i)),s=n.findIndex((e=>e.path===i));if(o.path==t.path){if(n.length-1==0)return e.commit("tagsView/DELETE_VISITED_ROUTE",o),void l.ctx.$nextTick((()=>{a.replace("/"),"/home"==t.path&&e.commit("tagsView/ADD_VISITED_ROUTE",t)}));n.length-1==s&&a.push(n[s-1]),l.ctx.$nextTick((()=>{n[s]&&a.push(n[s])}))}e.commit("tagsView/DELETE_VISITED_ROUTE",o)},contextMenuBehavior:u,onContextMenuClick:e=>{u.display="block",u.left=e.pageX+10+"px",u.top=e.pageY+"px",e.preventDefault()},onContextMenuItemClick:l=>{switch(l.currentTarget.dataset.name){case"删除其他标签":e.commit("tagsView/DELETE_OTHERS_VISITED_ROUTE",t),a.go(0)}}}}}),be=b("i",{class:"el-icon-delete"},null,-1),ye=b("span",null,"删除其他标签",-1);ve.render=function(e,t,a,l,n,i){const o=g("el-tab-pane"),s=g("el-tabs");return h(),f("div",{id:"tags-view-container",class:"tags-view-container",onContextmenu:t[3]||(t[3]=(...t)=>e.onContextMenuClick&&e.onContextMenuClick(...t))},[b(s,{modelValue:e.tabsActive,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tabsActive=t),type:"card",style:{width:"100%"},onTabClick:e.onTabsSwitch,onTabRemove:e.onTabsDelete},{default:v((()=>[(h(!0),f(M,null,N(e.visitedRoutes,(e=>(h(),f(o,{closable:!e.meta.tagsViewAffix,key:e.fullPath,label:e.meta.title,name:e.fullPath},null,8,["closable","label","name"])))),128))])),_:1},8,["modelValue","onTabClick","onTabRemove"]),(h(),f(R,{to:"body"},[b("div",{class:"context-menu",style:e.contextMenuBehavior},[b("div",{class:"menu-item",onClick:t[2]||(t[2]=(...t)=>e.onContextMenuItemClick&&e.onContextMenuItemClick(...t)),"data-name":"删除其他标签"},[be,ye])],4)]))],32)};const _e=u({name:"MenuItem",props:{menuList:{type:Array,default:()=>[]}},setup(){const e=L(),t=A();return{onSelectItem:a=>{t.path!==a.url&&e.push({path:a.url})}}}});_e.render=function(e,t,a,l,n,i){const o=g("MenuItem",!0),s=g("el-submenu"),r=g("el-menu-item");return h(!0),f(M,null,N(e.menuList,(t=>(h(),f(M,null,["group"==t.type?(h(),f(s,{key:t.url,index:t.id,style:{"user-select":"none"}},{title:v((()=>[b("i",{class:[t.icon]},null,2),b("span",null,O(t.name),1)])),default:v((()=>[b(o,{menuList:t.children},null,8,["menuList"])])),_:2},1032,["index"])):(h(),f(r,{key:t.id,index:t.url,style:{"user-select":"none"},onClick:a=>e.onSelectItem(t)},{default:v((()=>[b("i",{class:[t.icon]},null,2),b("span",null,O(t.name),1)])),_:2},1032,["index","onClick"]))],64)))),256)};const Ee=u({name:"AdminSideBar",props:{sideMenuCollapse:{type:Boolean,default:!1},menu:{type:Array,default:()=>[]}},components:{MenuItem:_e},setup:(e,t)=>({onMenuSelect:e=>{t.emit("menuSelect",e)}})});Ee.render=function(e,t,a,l,n,i){const o=g("MenuItem"),s=g("el-menu");return h(),f(s,{style:{transition:"all 0.5s"},"unique-opened":"",mode:"vertical","active-text-color":"#fff",collapse:e.sideMenuCollapse,class:"admin-aside-menu","text-color":"#fff","collapse-transition":"","default-active":e.$route.path,onSelect:e.onMenuSelect},{default:v((()=>[b(o,{menuList:e.menu},null,8,["menuList"])])),_:1},8,["collapse","default-active","onSelect"])};const Se={},ke=P("data-v-f2923716"),Ie=ke(((e,t)=>{const a=g("el-breadcrumb-item"),l=g("el-breadcrumb");return h(),f(l,{class:"app-breadcrumb",separator:"/"},{default:ke((()=>[(h(!0),f(M,null,N(e.$route.meta.breadcrumb,(e=>(h(),f(a,{key:e},{default:ke((()=>[b("span",null,O(e),1)])),_:2},1024)))),128))])),_:1})}));Se.render=Ie,Se.__scopeId="data-v-f2923716";const we=u({name:"AdminHeader",setup(){const e=L(),t=p(),a=x([{id:1,content:"这是一条短通知。",time:"2021-6-10"},{id:2,content:"这是一条短通知。",time:"2021-6-10"},{id:3,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"},{id:4,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"},{id:5,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"}]),l=x("0"),n=x(""),i=o({loading:!1,result:[]});d(n,(e=>{e||(i.result=[])}));const s=x(!1);return{noticeList:a,onClearNoticeClick:()=>{a.value.splice(0,a.value.length)},onLogoutClick:()=>{localStorage.clear(),t.commit("tagsView/delAllVisitedRoutes"),te(),e.push({path:"/login"})},onMenuTagSwitcherChange:e=>{t.commit("app/SET_MENU_TAG_SWITCHER",e)},onToggleMenuCollapse:e=>{t.commit("app/TOGGLE_MENU_COLLAPSE",e)},onTogglePageKeepAlive:e=>{t.commit("app/SET_PAGE_KEEP_ALIVE",e)},appName:m((()=>t.state.app.appName)),appLogo:m((()=>t.state.app.appLogo)),menuCollapse:m((()=>t.state.app.menuCollapse)),pageIndicator:m((()=>t.state.app.pageIndicator)),pageKeepAlive:m((()=>t.state.app.pageKeepAlive)),userInfo:m((()=>t.getters["app/userInfo"])),getType:W,keyword:n,onSearchSelect:t=>{t.url&&e.push({path:t.url})},search:e=>{if(!e)return void(i.result=[]);i.loading=!0;let t=JSON.parse(localStorage.getItem("menu")),a=[],l=new RegExp(e,"i");U(t,"children",(e=>{"page"===e.type&&l.test(e.name)&&a.push(e)})),i.result=a,i.loading=!1},onToggleSearch:()=>{n.value="",s.value=!s.value},searchVisible:s,searchInstance:i,noticeTabActive:l,onNoticeTabChange:e=>{l.value=e.paneName}}}}),Ce={class:"admin-header"},Te={class:"header--left"},Ae={class:"logo-container"},Le={class:"admin-title"},Ve={class:"header--right"},xe=b("i",{class:"el-icon-search",style:{margin:"0 10px"}},null,-1),Me={style:{"margin-right":"10px"}},Ne={style:{color:"#ccc"}},Re={class:"user-info-section"},Oe=b("i",{class:"el-icon-message-solid header-icon",style:{margin:"0"}},null,-1),Pe={key:0,class:"notice-popover-panel"},De=b("i",{class:"el-icon-message-solid message-icon"},null,-1),He={class:"notify-content"},ze={key:2,class:"panel-btn-group"},Ke=D("清除消息"),je=b("i",{class:"el-icon-s-tools header-icon"},null,-1),We={class:"setting-popover-panel"},Ue={class:"setting-item"},Ge=b("h2",null,"页面指示",-1),Be={key:0,class:"setting-item"},$e=b("h2",null,"页面状态",-1),Je=D("缓存"),Fe=D("不缓存"),Ye={class:"setting-item"},qe=b("h2",null,"侧边菜单",-1),Qe=D("折叠"),Xe=D("不折叠"),Ze={class:"avatar"},et={class:"username"},tt=b("i",{class:"el-icon-arrow-down"},null,-1),at={class:"userInfo-popover-panel"},lt={class:"panel-title",style:{"text-align":"center"}},nt={class:"info-item"},it=D("退出登录");we.render=function(e,t,a,l,n,i){const o=g("el-option"),s=g("el-select"),r=g("el-badge"),c=g("el-tab-pane"),u=g("el-tabs"),p=g("el-empty"),d=g("el-button"),m=g("el-popover"),y=g("el-radio-button"),_=g("el-radio-group"),E=g("el-avatar"),S=g("el-tag");return h(),f("header",Ce,[b("div",Te,[b("section",Ae,[e.appLogo?(h(),f("img",{key:0,class:"admin-logo",src:e.appLogo,alt:e.appName},null,8,["src","alt"])):C("",!0),b("h1",Le,O(e.appName),1)])]),b("div",Ve,[e.searchVisible?(h(),f(s,{key:1,modelValue:e.keyword,"onUpdate:modelValue":t[2]||(t[2]=t=>e.keyword=t),filterable:"",style:{"margin-right":"20px"},remote:"","reserve-keyword":"",placeholder:"搜索页面","filter-method":e.search,loading:e.searchInstance.loading,size:"small",clearable:""},{prefix:v((()=>[xe])),default:v((()=>[(h(!0),f(M,null,N(e.searchInstance.result,(t=>(h(),f(o,{key:t.name,label:t.name,value:t.name,onClick:a=>e.onSearchSelect(t)},{default:v((()=>[b("div",null,[b("span",Me,O(t.name),1),b("span",Ne,O(t.breadcrumb.join(" / ")),1)])])),_:2},1032,["label","value","onClick"])))),128))])),_:1},8,["modelValue","filter-method","loading"])):(h(),f("i",{key:0,class:"el-icon-search search-btn fun-btn",onClick:t[1]||(t[1]=(...t)=>e.onToggleSearch&&e.onToggleSearch(...t))})),b("section",Re,[b(m,{placement:"bottom",width:300,trigger:"hover",class:"header-icon",style:{padding:"0"}},{reference:v((()=>[b(r,{value:e.noticeList.length,max:99,type:"success",hidden:0===e.noticeList.length},{default:v((()=>[Oe])),_:1},8,["value","hidden"])])),default:v((()=>[b(u,null,{default:v((()=>[b(c,{label:"未读消息",name:"0"})])),_:1}),0!==e.noticeList.length?(h(),f("div",Pe,[(h(!0),f(M,null,N(e.noticeList,(e=>(h(),f("div",{key:e.id,class:"notice-item"},[De,b("div",He,[b("h2",null,O(e.content),1),b("p",null,O(e.time),1)])])))),128))])):(h(),f(p,{key:1,description:"暂无消息"})),0!==e.noticeList.length?(h(),f("div",ze,[b(d,{type:"text",size:"mini",onClick:e.onClearNoticeClick},{default:v((()=>[Ke])),_:1},8,["onClick"])])):C("",!0)])),_:1}),b(m,{placement:"bottom",width:250,trigger:"hover"},{reference:v((()=>[je])),default:v((()=>[b(u,null,{default:v((()=>[b(c,{label:"设置",name:"0"})])),_:1}),b("div",We,[b("div",Ue,[Ge,b(_,{size:"mini",modelValue:e.pageIndicator,onChange:e.onMenuTagSwitcherChange},{default:v((()=>[b(y,{label:"标签切换"}),b(y,{label:"面包屑"})])),_:1},8,["modelValue","onChange"])]),"标签切换"==e.pageIndicator?(h(),f("div",Be,[$e,b(_,{size:"mini",modelValue:e.pageKeepAlive,onChange:e.onTogglePageKeepAlive},{default:v((()=>[b(y,{label:1},{default:v((()=>[Je])),_:1}),b(y,{label:0},{default:v((()=>[Fe])),_:1})])),_:1},8,["modelValue","onChange"])])):C("",!0),b("div",Ye,[qe,b(_,{size:"mini",modelValue:e.menuCollapse,onChange:e.onToggleMenuCollapse},{default:v((()=>[b(y,{label:1},{default:v((()=>[Qe])),_:1}),b(y,{label:0},{default:v((()=>[Xe])),_:1})])),_:1},8,["modelValue","onChange"])])])])),_:1}),b(m,{placement:"bottom-end",width:150,trigger:"hover","popper-class":"info-popper"},{reference:v((()=>[b("div",Ze,[b(E,{icon:"el-icon-user-solid",src:e.userInfo.avatar,size:"small"},null,8,["src"]),b("span",et,O(e.userInfo.name||"--"),1),tt])])),default:v((()=>[b("div",at,[b("div",lt,[b(E,{icon:"el-icon-user-solid",src:e.userInfo.avatar,size:"medium"},null,8,["src"]),b("div",null,O(e.userInfo.name||"--"),1),b(S,{size:"mini",style:{"margin-top":"5px"}},{default:v((()=>[D(O(e.userInfo.role||"--"),1)])),_:1})]),b("div",nt,[b(d,{type:"text",size:"mini",icon:"el-icon-warning-outline",onClick:e.onLogoutClick,style:{color:"red"}},{default:v((()=>[it])),_:1},8,["onClick"])])])])),_:1})])])])};const ot=u({name:"AdminHeader",setup(){const e=L(),t=p(),a=x([{id:1,content:"这是一条短通知。",time:"2021-6-10"},{id:2,content:"这是一条短通知。",time:"2021-6-10"},{id:3,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"},{id:4,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"},{id:5,content:"这是一条长长长长长长长长长长长长长长长长长长长长长长长长通知。",time:"2021-6-10"}]),l=x("0"),n=x(null);return{noticeList:a,onClearNoticeClick:()=>{a.value.splice(0,a.value.length)},onLogoutClick:()=>{localStorage.clear(),t.commit("tagsView/delAllVisitedRoutes"),te(),e.push({path:"/login"})},userInfo:m((()=>t.getters["app/userInfo"])),noticeTabActive:l,onNoticeTabChange:e=>{l.value=e.paneName},mobileAppSideBar:n,onShowMobileMenu:()=>{n.value.show()}}}}),st={class:"mobile-admin-header"},rt={class:"header--left"},ct={class:"header--right"},ut={class:"user-info-section"},pt=b("i",{class:"el-icon-message-solid",style:{"font-size":"20px"}},null,-1),dt={key:0,class:"notice-popover-panel"},mt=b("i",{class:"el-icon-message-solid message-icon"},null,-1),gt={class:"notify-content"},ht={key:2,class:"panel-btn-group"},ft=D("清除消息"),vt={class:"avatar"},bt=b("i",{class:"el-icon-arrow-down"},null,-1),yt={class:"userInfo-popover-panel"},_t={class:"panel-title",style:{"text-align":"center"}},Et={class:"info-item"},St=D("退出登录");ot.render=function(e,t,a,l,n,i){const o=g("el-badge"),s=g("el-tab-pane"),r=g("el-tabs"),c=g("el-empty"),u=g("el-button"),p=g("el-popover"),d=g("el-avatar"),m=g("el-tag"),y=g("MobileAppSideBar");return h(),f("header",st,[b("div",rt,[b("i",{class:"el-icon-s-fold fold-btn",onClick:t[1]||(t[1]=(...t)=>e.onShowMobileMenu&&e.onShowMobileMenu(...t))})]),b("div",ct,[b("section",ut,[b(p,{placement:"bottom",width:300,trigger:"hover",class:"header-icon",style:{padding:"0"}},{reference:v((()=>[b(o,{value:e.noticeList.length,max:99,type:"success",hidden:0===e.noticeList.length,style:{"margin-right":"20px"}},{default:v((()=>[pt])),_:1},8,["value","hidden"])])),default:v((()=>[b(r,null,{default:v((()=>[b(s,{label:"未读消息",name:"0"})])),_:1}),0!==e.noticeList.length?(h(),f("div",dt,[(h(!0),f(M,null,N(e.noticeList,(e=>(h(),f("div",{key:e.id,class:"notice-item"},[mt,b("div",gt,[b("h2",null,O(e.content),1),b("p",null,O(e.time),1)])])))),128))])):(h(),f(c,{key:1,description:"暂无消息"})),0!==e.noticeList.length?(h(),f("div",ht,[b(u,{type:"text",size:"mini",onClick:e.onClearNoticeClick},{default:v((()=>[ft])),_:1},8,["onClick"])])):C("",!0)])),_:1}),b(p,{placement:"bottom-end",width:150,trigger:"hover","popper-class":"info-popper"},{reference:v((()=>[b("div",vt,[b(d,{icon:"el-icon-user-solid",src:e.userInfo.avatar,size:"small"},null,8,["src"]),bt])])),default:v((()=>[b("div",yt,[b("div",_t,[b(d,{icon:"el-icon-user-solid",src:e.userInfo.avatar,size:"medium"},null,8,["src"]),b("div",null,O(e.userInfo.name||"--"),1),b(m,{size:"mini",style:{"margin-top":"5px"}},{default:v((()=>[D(O(e.userInfo.role||"--"),1)])),_:1})]),b("div",Et,[b(u,{type:"text",size:"mini",icon:"el-icon-warning-outline",onClick:e.onLogoutClick,style:{color:"red"}},{default:v((()=>[St])),_:1},8,["onClick"])])])])),_:1})])]),b(y,{ref:"mobileAppSideBar"},null,512)])};const kt=u({name:"MobileAppSideBar",setup(){const e=L(),t=p(),a=x(""),l=o({loading:!1,result:[]});d(a,(e=>{e||(l.result=[])}));const n=x(!1),i=x(!1);return{onMenuTagSwitcherChange:e=>{t.commit("app/SET_MENU_TAG_SWITCHER",e)},onTogglePageKeepAlive:e=>{t.commit("app/SET_PAGE_KEEP_ALIVE",e)},appName:m((()=>t.state.app.appName)),appLogo:m((()=>t.state.app.appLogo)),pageIndicator:m((()=>t.state.app.pageIndicator)),pageKeepAlive:m((()=>t.state.app.pageKeepAlive)),sideMenu:m((()=>t.getters["app/menu"])),keyword:a,onSearchSelect:t=>{t.url&&e.push({path:t.url})},search:e=>{if(!e)return void(l.result=[]);l.loading=!0;let t=JSON.parse(localStorage.getItem("menu")),a=[],n=new RegExp(e,"i");U(t,"children",(e=>{"page"===e.type&&n.test(e.name)&&a.push(e)})),l.result=a,l.loading=!1},onToggleSearch:()=>{a.value="",n.value=!n.value},searchVisible:n,searchInstance:l,hide:()=>{i.value=!1},show:()=>{i.value=!0},visible:i}}}),It={class:"logo-container"},wt={class:"admin-title"},Ct=b("i",{class:"el-icon-search",style:{margin:"0 10px"}},null,-1),Tt={style:{"margin-right":"10px"}},At={style:{color:"#ccc"}},Lt={class:"setting-bar"},Vt=b("i",{class:"el-icon-s-tools header-icon"},null,-1),xt={class:"setting-popover-panel"},Mt={class:"setting-item"},Nt=b("h2",null,"页面指示",-1),Rt={key:0,class:"setting-item"},Ot=b("h2",null,"页面状态",-1),Pt=D("缓存"),Dt=D("不缓存");kt.render=function(e,t,a,l,n,i){const o=g("el-option"),s=g("el-select"),r=g("app-side-bar"),c=g("el-tab-pane"),u=g("el-tabs"),p=g("el-radio-button"),d=g("el-radio-group"),m=g("el-popover");return h(),f(M,null,[b("aside",{class:["mobile-side-menu",e.visible?"show-mobile-menu":"hide-mobile-menu"]},[b("section",It,[e.appLogo?(h(),f("img",{key:0,class:"admin-logo",src:e.appLogo,alt:e.appName},null,8,["src","alt"])):C("",!0),b("h1",wt,O(e.appName),1)]),b(s,{modelValue:e.keyword,"onUpdate:modelValue":t[1]||(t[1]=t=>e.keyword=t),filterable:"",style:{width:"90%","margin-bottom":"10px"},remote:"","reserve-keyword":"",placeholder:"搜索页面","filter-method":e.search,loading:e.searchInstance.loading,size:"small",clearable:""},{prefix:v((()=>[Ct])),default:v((()=>[(h(!0),f(M,null,N(e.searchInstance.result,(t=>(h(),f(o,{key:t.name,label:t.name,value:t.name,onClick:a=>e.onSearchSelect(t)},{default:v((()=>[b("div",null,[b("span",Tt,O(t.name),1),b("span",At,O(t.breadcrumb.join(" / ")),1)])])),_:2},1032,["label","value","onClick"])))),128))])),_:1},8,["modelValue","filter-method","loading"]),b(r,{menu:e.sideMenu,style:{width:"100%","padding-bottom":"50px"},onMenuSelect:e.hide},null,8,["menu","onMenuSelect"]),b("div",Lt,[b(m,{placement:"top",width:250,trigger:"hover"},{reference:v((()=>[Vt])),default:v((()=>[b(u,null,{default:v((()=>[b(c,{label:"设置",name:"0"})])),_:1}),b("div",xt,[b("div",Mt,[Nt,b(d,{size:"mini",modelValue:e.pageIndicator,onChange:e.onMenuTagSwitcherChange},{default:v((()=>[b(p,{label:"标签切换"}),b(p,{label:"面包屑"})])),_:1},8,["modelValue","onChange"])]),"标签切换"==e.pageIndicator?(h(),f("div",Rt,[Ot,b(d,{size:"mini",modelValue:e.pageKeepAlive,onChange:e.onTogglePageKeepAlive},{default:v((()=>[b(p,{label:1},{default:v((()=>[Pt])),_:1}),b(p,{label:0},{default:v((()=>[Dt])),_:1})])),_:1},8,["modelValue","onChange"])])):C("",!0)])])),_:1})])],2),e.visible?(h(),f("div",{key:0,class:"mobile-side-menu-mask",onClick:t[2]||(t[2]=(...t)=>e.hide&&e.hide(...t))})):C("",!0)],64)},k.configure({showSpinner:!1,easing:"ease",speed:500});const Ht=H($);Ht.config.errorHandler=(e,t,a)=>{},Ht.config.warnHandler=function(e,t,a){},Ht.config.performance=!0,Ht.component("AdminLayout",pe),Ht.component("AppTagsViewSwitcher",ve),Ht.component("AppSideBar",Ee),Ht.component("AppBreadcrumb",Se),Ht.component("AppHeader",we),Ht.component("MobileAppHeader",ot),Ht.component("MobileAppSideBar",kt),Ht.use(z,{locale:K}),Ht.use(X),Ht.use(ne),Ht.mount("#app");export{j as a,Z as c,W as g};
