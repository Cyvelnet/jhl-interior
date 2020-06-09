/*! For license information please see 5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(t,e,a){"use strict";a.r(e);var n=a(33),i=(a(85),{data:function(){return{settings:{site_name:"",slogan:"",copyright:""}}},props:{},methods:{save:function(){}},computed:{},components:{VueTabs:n.VueTabs,VTab:n.VTab},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){}}),s=(a(87),a(0)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-tabs",{attrs:{"active-tab-color":"#007bff","active-text-color":"white",type:"pills","start-index":1}},[a("v-tab",{attrs:{title:"Site Settings",icon:"ik ik-globe"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("ValidationObserver",{ref:"observer",attrs:{tag:"form"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;e.invalid;return[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),n(t.save)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{rules:"required",name:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.site_name,expression:"settings.site_name"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.settings.site_name},on:{input:function(e){e.target.composing||t.$set(t.settings,"site_name",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"",name:"Slogan"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Slogon")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.slogan,expression:"settings.slogan"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.settings.slogan},on:{input:function(e){e.target.composing||t.$set(t.settings,"slogan",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{rules:"required",name:"Copyright Text"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"optional"},[t._v("Copyright Text")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.copyright,expression:"settings.copyright"}],staticClass:"form-control",class:e.classes,attrs:{type:"text"},domProps:{value:t.settings.copyright},on:{input:function(e){e.target.composing||t.$set(t.settings,"copyright",e.target.value)}}}),t._v(" "),e.errors.length?a("span",{staticClass:"invalid-feedback"},[t._v(t._s(e.errors[0]))]):t._e()])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-md-6"},[t._v("\n\n                                    asdsadsad\n\n                                ")])])])]}}])})],1)])]),t._v(" "),a("v-tab",{attrs:{title:"Analytic Settings",icon:"ik ik-radio"}},[t._v("\n            Second tab content\n        ")]),t._v(" "),a("v-tab",{attrs:{title:"Project Settings",icon:"ik ik-archive"}},[t._v("\n            Project Settings\n        ")])],1)],1)}),[],!1,null,null,null);e.default=o.exports},28:function(t,e,a){var n=a(88);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,i);n.locals&&(t.exports=n.locals)},33:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=a(84))&&"object"==typeof n&&"default"in n?n.default:n,s={name:"vue-tabs",props:{activeTabColor:String,activeTextColor:String,disabledColor:String,disabledTextColor:String,textPosition:{type:String,default:"center"},type:{type:String,default:"tabs"},direction:{type:String,default:"horizontal"},centered:Boolean,value:[String,Number,Object]},data:function(){return{activeTabIndex:0,tabs:[]}},computed:{isTabShape:function(){return"tabs"===this.type},isStacked:function(){return"vertical"===this.direction},classList:function(){return"nav "+(this.isTabShape?"nav-tabs":"nav-pills")+" "+(this.centered?"nav-justified":"")+" "+(this.isStacked?"nav-stacked":"")},stackedClass:function(){return this.isStacked?"stacked":""},activeTabStyle:function(){return{backgroundColor:this.activeTabColor,color:this.activeTextColor}}},methods:{navigateToTab:function(t,e){this.changeTab(this.activeTabIndex,t,e)},activateTab:function(t){this.activeTabIndex=t;var e=this.tabs[t];e.active=!0,this.$emit("input",e.title)},changeTab:function(t,e,a){var n=this.tabs[t]||{},i=this.tabs[e];i.disabled||(this.activeTabIndex=e,n.active=!1,i.active=!0,this.$emit("input",this.tabs[e].title),this.$emit("tab-change",e,i,n),this.tryChangeRoute(a))},tryChangeRoute:function(t){this.$router&&t&&this.$router.push(t)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);this.tabs.splice(e,0,t)},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&e.splice(a,1)},getTabs:function(){return this.$slots.default?this.$slots.default.filter((function(t){return t.componentOptions})):[]},findTabAndActivate:function(t){var e=this.tabs.findIndex((function(e,a){return e.title===t||a===t}));e!==this.activeTabIndex&&(-1!==e?this.changeTab(this.activeTabIndex,e):this.changeTab(this.activeTabIndex,0))},renderTabTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",a=this.$createElement;if(0!==this.tabs.length){var n=this.tabs[t],i=n.active,s=n.title,o={color:this.activeTabColor};"center"===e&&(o.color=this.activeTextColor);var r=a("span",{class:"title title_"+e,style:i?o:{}},["center"===e&&this.renderIcon(t),s]);return n.$slots.title?n.$slots.title:n.$scopedSlots.title?n.$scopedSlots.title({active:i,title:s,position:e,icon:n.icon,data:n.tabData}):r}},renderIcon:function(t){var e=this.$createElement;if(0!==this.tabs.length){var a=this.tabs[t],n=a.icon,i=e("i",{class:n},[" "]);return!a.$slots.title&&n?i:void 0}},tabStyles:function(t){return t.disabled?{backgroundColor:this.disabledColor,color:this.disabledTextColor}:{}},renderTabs:function(){var t=this,e=this.$createElement;return this.tabs.map((function(a,n){if(a){var s=a.route,o=(a.id,a.title),r=(a.icon,a.tabId),l=t.activeTabIndex===n;return e("li",i([{attrs:{name:"tab",id:"t-"+r,"aria-selected":l,"aria-controls":"p-"+r,role:"tab"},class:["tab",{active:l},{disabled:a.disabled}],key:o},{on:{click:function(e){for(var i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];(function(){return!a.disabled&&t.navigateToTab(n,s)}).apply(void 0,[e].concat(o))}}}]),["top"===t.textPosition&&t.renderTabTitle(n,t.textPosition),e("a",i([{attrs:{href:"#",role:"tab"},style:l?t.activeTabStyle:t.tabStyles(a),class:[{active_tab:l},"tabs__link"]},{on:{click:function(t){for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];(function(t){return t.preventDefault(),!1}).apply(void 0,[t].concat(a))}}}]),["center"!==t.textPosition&&!a.$slots.title&&t.renderIcon(n),"center"===t.textPosition&&t.renderTabTitle(n,t.textPosition)]),"bottom"===t.textPosition&&t.renderTabTitle(n,t.textPosition)])}}))}},render:function(){var t=arguments[0],e=this.renderTabs();return t("div",{class:["vue-tabs",this.stackedClass]},[t("div",{class:[{"nav-tabs-navigation":!this.isStacked},{"left-vertical-tabs":this.isStacked}]},[t("div",{class:["nav-tabs-wrapper",this.stackedClass]},[t("ul",{class:this.classList,attrs:{role:"tablist"}},[e])])]),t("div",{class:["tab-content",{"right-text-tabs":this.isStacked}]},[this.$slots.default])])},watch:{tabs:function(t){t.length>0&&!this.value&&(t.length<=this.activeTabIndex?this.activateTab(this.activeTabIndex-1):this.activateTab(this.activeTabIndex)),t.length>0&&this.value&&this.findTabAndActivate(this.value)},value:function(t){this.findTabAndActivate(t)}}},o={name:"v-tab",props:{title:{type:String,default:""},icon:{type:String,default:""},tabData:{default:null},beforeChange:{type:Function},id:String,route:{type:[String,Object]},disabled:Boolean,transitionName:String,transitionMode:String},computed:{isValidParent:function(){return"vue-tabs"===this.$parent.$options.name},hash:function(){return"#"+this.id},tabId:function(){return this.id?this.id:this.title}},data:function(){return{active:!1,validationError:null}},mounted:function(){this.$parent.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$parent.removeTab(this)},render:function(){var t=arguments[0];return t("section",{class:"tab-container",attrs:{id:"p-"+this.tabId,"aria-labelledby":"t-"+this.tabId,role:"tabpanel"},directives:[{name:"show",value:this.active}]},[this.$slots.default])}},r={install:function(t){t.component("vue-tabs",s),t.component("v-tab",o)}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(r),window.VueTabs=r),e.default=r,e.VueTabs=s,e.VTab=o},84:function(t,e){var a=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,e){var i,s,o,r,l;for(o in e)if(i=t[o],s=e[o],i&&a.test(o))if("class"===o&&("string"==typeof i&&(l=i,t[o]=i={},i[l]=!0),"string"==typeof s&&(l=s,e[o]=s={},s[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(r in s)i[r]=n(i[r],s[r]);else if(Array.isArray(i))t[o]=i.concat(s);else if(Array.isArray(s))t[o]=[i].concat(s);else for(r in s)i[r]=s[r];else t[o]=e[o];return t}),{})}},85:function(t,e,a){var n=a(86);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,i);n.locals&&(t.exports=n.locals)},86:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,'.vue-tabs.stacked {\n  display: flex; }\n\n.vue-tabs .tabs__link {\n  text-decoration: none;\n  color: gray; }\n\n.vue-tabs .nav {\n  margin-bottom: 0;\n  margin-top: 0;\n  padding-left: 0;\n  list-style: none; }\n  .vue-tabs .nav:before, .vue-tabs .nav:after {\n    content: " ";\n    display: table; }\n  .vue-tabs .nav:after {\n    clear: both; }\n  .vue-tabs .nav > li {\n    position: relative;\n    display: block; }\n    .vue-tabs .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .vue-tabs .nav > li > a:hover, .vue-tabs .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .vue-tabs .nav > li span.title {\n      display: flex;\n      justify-content: center; }\n    .vue-tabs .nav > li.disabled > a {\n      color: #777777; }\n      .vue-tabs .nav > li.disabled > a:hover, .vue-tabs .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        cursor: not-allowed;\n        background-color: transparent;\n        border-color: transparent; }\n  .vue-tabs .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .vue-tabs .nav > li > a > img {\n    max-width: none; }\n\n.vue-tabs .nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .vue-tabs .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .vue-tabs .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .vue-tabs .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.vue-tabs .nav-pills > li {\n  float: left; }\n  .vue-tabs .nav-pills > li > a {\n    border-radius: 4px; }\n  .vue-tabs .nav-pills > li + li {\n    margin-left: 2px; }\n  .vue-tabs .nav-pills > li.active > a, .vue-tabs .nav-pills > li.active > a:hover, .vue-tabs .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.vue-tabs .nav-stacked > li {\n  float: none; }\n  .vue-tabs .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.vue-tabs .nav-justified, .vue-tabs .nav-tabs.nav-justified {\n  width: 100%; }\n  .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n    float: none; }\n    .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .vue-tabs .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.vue-tabs .nav-tabs-justified, .vue-tabs .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n  .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n  .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n    .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n    .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.vue-tabs .tab-content > .tab-pane {\n  display: none; }\n\n.vue-tabs .tab-content > .active {\n  display: block; }\n\n.vue-tabs section[aria-hidden="true"] {\n  display: none; }\n',""])},87:function(t,e,a){"use strict";var n=a(28);a.n(n).a},88:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,".vue-tabs .title .ik {\n  font-size: 18px;\n}",""])}}]);