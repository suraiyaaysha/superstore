(function(t){function e(e){for(var o,d,c=e[0],a=e[1],p=e[2],n=0,l=[];n<c.length;n++)d=c[n],Object.prototype.hasOwnProperty.call(f,d)&&f[d]&&l.push(f[d][0]),f[d]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);r&&r(e);while(l.length)l.shift()();return m.push.apply(m,p||[]),i()}function i(){for(var t,e=0;e<m.length;e++){for(var i=m[e],o=!0,c=1;c<i.length;c++){var a=i[c];0!==f[a]&&(o=!1)}o&&(m.splice(e--,1),t=d(d.s=i[0]))}return t}var o={},f={app:0},m=[];function d(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=t,d.c=o,d.d=function(t,e,i){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)d.d(i,o,function(e){return t[e]}.bind(null,o));return i},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var r=a;m.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var o=i("85ec"),f=i.n(o);f.a},"047e":function(t,e,i){},"221b":function(t,e,i){"use strict";var o=i("047e"),f=i.n(o);f.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Navbar",{on:{search:t.search}}),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-9"},[i("router-view")],1),i("div",{staticClass:"col-3"},[i("cart",{attrs:{items:t.cart},on:{itemRemoved:t.removeItem}})],1)])])],1)},m=[],d=(i("4de4"),i("c975"),i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[i("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("SuperStore")]),t._m(0),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])],1)}),c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})])}],a=i("bc3a"),p=i.n(a),r={name:"Navbar",data:function(){return{keyword:""}},methods:{search:function(){var t=this;p.a.get("http://localhost:3000/search/"+this.keyword).then((function(e){t.$store.commit("setInventory",e.data)}))}}},n=r,l=i("2877"),s=Object(l["a"])(n,d,c,!1,null,null,null),u=s.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list-group"},[t._m(0),i("hr"),t._l(t.items,(function(e,o){return i("li",{key:o,staticClass:"list-group-item"},[i("span",{staticClass:"item-name"},[t._v(t._s(e.title))]),i("span",{staticClass:"item-price float-right"},[t._v("$"+t._s(e.price))]),i("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.removeItem(o)}}},[t._v("-")])])})),i("hr"),i("li",{staticClass:"list-group-item"},[i("span",{staticClass:"item-name"},[t._v("Total")]),i("span",{staticClass:"item-price float-right"},[t._v("$"+t._s(t.totalPrice))])]),t.items.length>0?i("li",{staticClass:"list-group-item"},[i("button",{staticClass:"btn btn-block btn-success",on:{click:t.checkOut}},[t._v("Checkout")])]):t._e()],2)},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-group-item"},[i("span",{staticClass:"item-name"},[t._v("Name")]),i("span",{staticClass:"item-price float-right"},[t._v("Price")])])}],y=(i("4160"),i("b680"),i("159b"),{computed:{items:function(){return this.$store.getters.getCart},totalPrice:function(){var t=0;return this.items.forEach((function(e){t+=parseFloat(e.price)})),t.toFixed(2)}},methods:{removeItem:function(t){this.$store.commit("removeItem",t)},checkOut:function(){confirm("Are you sure you want to checkout?")&&this.$store.commit("clearCart")}}}),v=y,x=Object(l["a"])(v,h,g,!1,null,"2351d476",null),b=x.exports,C=[{id:1,title:"Audi",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"3.77"},{id:2,title:"Lexus",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"6.04"},{id:3,title:"Mitsubishi",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"7.85"},{id:4,title:"Mercury",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"0.42"},{id:5,title:"Suzuki",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"8.36"},{id:6,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"3.51"},{id:7,title:"Ford",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"7.66"},{id:8,title:"Porsche",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"6.34"},{id:9,title:"Maybach",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"9.58"},{id:10,title:"Chevrolet",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"7.46"},{id:11,title:"Morgan",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"8.47"},{id:12,title:"Kia",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"5.75"},{id:13,title:"Toyota",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"5.19"},{id:14,title:"Dodge",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"3.85"},{id:15,title:"GMC",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"5.57"},{id:16,title:"Lotus",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"0.16"},{id:17,title:"Mercury",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"7.86"},{id:18,title:"Suzuki",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"5.58"},{id:19,title:"GMC",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"6.42"},{id:20,title:"Dodge",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"0.04"},{id:21,title:"Chevrolet",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"4.96"},{id:22,title:"Ford",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"0.16"},{id:23,title:"Lincoln",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"4.06"},{id:24,title:"Suzuki",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"7.37"},{id:25,title:"Mercury",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"5.55"},{id:26,title:"Subaru",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"4.55"},{id:27,title:"Mercedes-Benz",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"8.59"},{id:28,title:"GMC",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"9.23"},{id:29,title:"Toyota",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"9.97"},{id:30,title:"Mitsubishi",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"2.98"},{id:31,title:"Lexus",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"2.59"},{id:32,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"2.99"},{id:33,title:"Volvo",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"3.19"},{id:34,title:"GMC",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"7.66"},{id:35,title:"Toyota",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"2.16"},{id:36,title:"Ford",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"3.22"},{id:37,title:"GMC",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"4.44"},{id:38,title:"Toyota",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"9.46"},{id:39,title:"BMW",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"6.44"},{id:40,title:"Toyota",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"3.01"},{id:41,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"7.35"},{id:42,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"6.66"},{id:43,title:"Dodge",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"5.52"},{id:44,title:"Mercedes-Benz",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"9.91"},{id:45,title:"Suzuki",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"4.99"},{id:46,title:"Dodge",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"9.77"},{id:47,title:"Eagle",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"3.15"},{id:48,title:"Chevrolet",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"2.82"},{id:49,title:"Ford",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"7.69"},{id:50,title:"Mazda",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"7.87"},{id:51,title:"Mazda",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"1.13"},{id:52,title:"Pontiac",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"7.40"},{id:53,title:"Ford",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"0.10"},{id:54,title:"Audi",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"5.16"},{id:55,title:"Cadillac",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"7.95"},{id:56,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"9.85"},{id:57,title:"Acura",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"8.75"},{id:58,title:"Honda",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"4.78"},{id:59,title:"Audi",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"5.45"},{id:60,title:"Lamborghini",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"0.28"},{id:61,title:"Toyota",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"6.92"},{id:62,title:"Nissan",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"8.79"},{id:63,title:"Plymouth",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"1.70"},{id:64,title:"Ford",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"7.35"},{id:65,title:"Chrysler",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"0.53"},{id:66,title:"Ford",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"9.95"},{id:67,title:"Jeep",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"1.93"},{id:68,title:"Volkswagen",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"5.05"},{id:69,title:"Ford",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"7.01"},{id:70,title:"Mercedes-Benz",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"9.49"},{id:71,title:"Volkswagen",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"1.04"},{id:72,title:"Pontiac",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"3.71"},{id:73,title:"Audi",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"6.91"},{id:74,title:"Toyota",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"6.88"},{id:75,title:"GMC",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"1.87"},{id:76,title:"Lincoln",photo:"http://dummyimage.com/100x100.png/ff4444/ffffff",price:"1.17"},{id:77,title:"Mercury",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"0.05"},{id:78,title:"Toyota",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"4.04"},{id:79,title:"Volkswagen",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"1.63"},{id:80,title:"GMC",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"8.56"},{id:81,title:"Chevrolet",photo:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",price:"5.10"},{id:82,title:"Chevrolet",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"7.44"},{id:83,title:"Plymouth",photo:"http://dummyimage.com/100x100.bmp/cc0000/ffffff",price:"9.67"},{id:84,title:"Saab",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"6.67"},{id:85,title:"Suzuki",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"9.02"},{id:86,title:"Isuzu",photo:"http://dummyimage.com/100x100.bmp/ff4444/ffffff",price:"5.40"},{id:87,title:"Chevrolet",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"6.28"},{id:88,title:"Infiniti",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"1.59"},{id:89,title:"Chevrolet",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"7.43"},{id:90,title:"Nissan",photo:"http://dummyimage.com/100x100.png/5fa2dd/ffffff",price:"5.86"},{id:91,title:"Toyota",photo:"http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",price:"3.89"},{id:92,title:"Chevrolet",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"7.99"},{id:93,title:"Pontiac",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"6.62"},{id:94,title:"Toyota",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"9.74"},{id:95,title:"Mercedes-Benz",photo:"http://dummyimage.com/100x100.png/cc0000/ffffff",price:"9.02"},{id:96,title:"Maybach",photo:"http://dummyimage.com/100x100.jpg/ff4444/ffffff",price:"5.88"},{id:97,title:"Ford",photo:"http://dummyimage.com/100x100.bmp/dddddd/000000",price:"6.12"},{id:98,title:"Dodge",photo:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",price:"7.25"},{id:99,title:"Cadillac",photo:"http://dummyimage.com/100x100.jpg/dddddd/000000",price:"8.66"},{id:100,title:"Dodge",photo:"http://dummyimage.com/100x100.png/dddddd/000000",price:"6.17"}],_={components:{Navbar:u,Cart:b},data:function(){return{items:[],cart:[]}},mounted:function(){this.items=C},methods:{addCartItem:function(t){this.cart.push(t)},removeItem:function(t){this.cart.splice(t,1)},search:function(t){this.items=C.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.toLowerCase())}))}}},j=_,w=(i("034f"),Object(l["a"])(j,f,m,!1,null,null,null)),k=w.exports,M=(i("4989"),i("ab8b"),i("8c4f")),T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.item?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("img",{attrs:{src:t.item.photo,alt:"photo"}})]),i("div",{staticClass:"col-sm-6"},[i("h4",[t._v(t._s(t.item.title))]),i("p",[t._v(t._s(t.item.description))]),i("p",{staticClass:"item-details-cart"},[t._v(t._s(t.item.price)),i("a",{staticClass:"btn btn-sm btn-primary float-right",on:{click:function(e){return t.addToCart(t.item)}}},[t._v("+add")])])])]):i("h3",[t._v("Loading...")])])},S=[],$={data:function(){return{item:null}},mounted:function(){this.fetchItem()},methods:{fetchItem:function(){var t=this;p.a.get("http://localhost:3000/item/"+this.$route.params.id).then((function(e){t.item=e.data}))},addToCart:function(t){this.$store.commit("addToCart",t)}}},O=$,I=(i("988a"),Object(l["a"])(O,T,S,!1,null,null,null)),P=I.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("h3",[t._v("Loading...")]):i("div",{staticClass:"row"},t._l(t.items,(function(e,o){return i("div",{key:o,staticClass:"card",staticStyle:{width:"10rem"}},[i("router-link",{attrs:{tag:"div",to:{path:"/item/"+e.id}}},[i("img",{staticClass:"card-img-top",attrs:{src:e.photo,alt:"Card image cap"}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(t._s(e.title))])])]),i("div",{staticClass:"card-footer"},[i("span",{staticClass:"card-text"},[t._v("$"+t._s(e.price))]),i("a",{staticClass:"btn btn-sm btn-primary float-right",on:{click:function(i){return t.addToCart(e)}}},[t._v("+add")])])],1)})),0)},F=[],L={data:function(){return{loading:!0}},computed:{items:function(){return this.$store.getters.getInventory}},mounted:function(){this.fetchInventory()},methods:{addToCart:function(t){this.$store.dispatch("addToCart",t)},fetchInventory:function(){var t=this;p.a.get("http://localhost:3000/items").then((function(e){t.$store.commit("setInventory",e.data),t.loading=!1}))}}},E=L,D=(i("221b"),Object(l["a"])(E,z,F,!1,null,null,null)),G=D.exports,N=[{path:"",component:G},{path:"/item/:id",component:P}],A=i("2f62"),B={state:{inventory:[],cart:[]},getters:{getInventory:function(t){return t.inventory},getCart:function(t){return t.cart}},mutations:{setInventory:function(t,e){t.inventory=e},addToCart:function(t,e){t.cart.push(e)},removeItem:function(t,e){t.cart.splice(e,1)},clearCart:function(t){t.cart=[]}},actions:{addToCart:function(t,e){t.commit("addToCart",e)}}};window.$=window.jQuery=i("1157"),o["a"].config.productionTip=!1,o["a"].use(M["a"]);var V=new M["a"]({routes:N});o["a"].use(A["a"]);var J=new A["a"].Store(B);new o["a"]({router:V,store:J,render:function(t){return t(k)}}).$mount("#app")},"7c0b":function(t,e,i){},"85ec":function(t,e,i){},"988a":function(t,e,i){"use strict";var o=i("7c0b"),f=i.n(o);f.a}});
//# sourceMappingURL=app.3c5bd5f0.js.map