(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0dee":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("2877")),c={},o=Object(r["a"])(c,s,a,!1,null,null,null),l=o.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-3"},[n("p",[t._v("名稱: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"addInputSize",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("div",{staticClass:"col-3"},[n("p",[t._v("單價: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"addInputSize",attrs:{type:"text"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])]),n("div",{staticClass:"col-3"},[n("p",[t._v("數量: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"addInputSize",attrs:{type:"text"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})])]),n("div",{staticClass:"col-3"},[n("button",{staticClass:"btn btn-info",on:{click:function(e){return t.add()}}},[t._v("新增")])])]),t.nullStatus?n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-4"}),t._m(1),n("div",{staticClass:"col-4"})]):t._e()]),t._m(2),n("div",{attrs:{id:"list"}},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"container"},[n("div",{staticClass:"row pt-2 "},[n("div",{staticClass:"col-3"},[n("p",[t._v(t._s(e[0]))])]),n("div",{staticClass:"col-3"},[n("p",[t._v(t._s(e[1]))])]),n("div",{staticClass:"col-3"},[n("p",[t._v(t._s(e[2]))])]),n("div",{staticClass:"col-3"},[n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.del(i)}}},[t._v("刪除")])])])])})),0),n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("h3",[t._v("總價: "+t._s(t.sum))])])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row pt-5"},[n("div",{staticClass:"col-12"},[n("h3",[t._v("新增單筆:")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-4"},[n("p",{staticStyle:{color:"red"}},[t._v("不能輸入空值")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("h3",[t._v("購物清單:")])])])}],f=(n("ac1f"),n("5319"),n("b0c0"),n("a434"),{name:"ce",data:function(){return{name:"",price:"",count:"",sum:0,id:0,list:[],nullStatus:!1,fullW:0}},watch:{price:{immediate:!1,handler:function(){this.price=this.price.replace(/[^0-9]/g,""),"0"==this.price.charAt(0)&&(this.price="")}},count:{immediate:!1,handler:function(){this.count=this.count.replace(/[^0-9]/g,""),"0"==this.count.charAt(0)&&(this.count="")}},fullW:{immediate:!1,handler:function(){this.fullW<370?($(".btn-info").text("增"),$(".btn-danger").text("刪")):($(".btn-info").text("新增"),$(".btn-danger").text("刪除"))}}},mounted:function(){var t=this;t.fullW=window.innerWidth,window.onresize=function(){t.fullW=window.innerWidth}},methods:{add:function(){var t=this;""==this.name||""==this.price||""==this.count?(this.nullStatus=!0,setTimeout((function(){t.nullStatus=!1}),3e3)):(this.nullStatus=!1,this.list.push([this.name,this.price,this.count]),this.sum+=parseInt(this.price,10)*parseInt(this.count,10),this.name="",this.price="",this.count="",this.listH=$("#list").height())},del:function(t){this.sum-=parseInt(this.list[t][1],10)*parseInt(this.list[t][2],10),this.list.splice(t,1),this.listH=$("#list").height()}}}),v=f,h=(n("f6c3"),Object(r["a"])(v,d,p,!1,null,"980e5e9a",null)),m=h.exports;i["default"].use(u["a"]);var b=[{path:"/",name:"board",component:m}],_=new u["a"]({base:"",routes:b}),w=_,C=n("2f62");i["default"].use(C["a"]);var g=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=(n("f9e3"),n("7b17"),n("1157")),x=n.n(y),S=n("5f5b");window.$=window.jQuery=x.a,i["default"].use(S["a"]),i["default"].config.productionTip=!1,new i["default"]({router:w,store:g,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},f6c3:function(t,e,n){"use strict";n("0dee")}});
//# sourceMappingURL=app.js.map