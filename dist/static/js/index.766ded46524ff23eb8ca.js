webpackJsonp([3],{0:function(e,t,n){"use strict";var a={hotLists:"index/hotLists",banner:"index/banner",topLists:"category/topList",subLists:"category/subList",rank:"category/rank",searchList:"search/list",details:"goods/details",deal:"goods/deal",addCart:"cart/add",cartLists:"cart/list",cartReduce:"cart/reduce",cartRemove:"cart/remove",cartMrremove:"cart/mrremove",addressLists:"address/list",addressAdd:"address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressDefault:"address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="http://rap2api.taobao.org/app/mock/7058/"+a[s]);t.a=a},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(80),s=(n.n(a),n(95)),i=n.n(s),r=n(9),o=(n.n(r),n(92)),c=(n.n(o),n(1)),d=n(2),l=n.n(d),u=n(0),f=n(19),p=n.n(f),h=n(20),g=n.n(h),m=n(17);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null,obj:{age:20}},created:function(){var e=this;this.getLists(),this.getBanner(),m.a.$on("change",function(t){console.log(t),e.obj.age=t})},methods:{getLists:function(){var e=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(t){var n=t.data.lists;n.length<e.pageSize&&(e.allLoaded=!0),e.lists?e.lists=e.lists.concat(n):e.lists=n,e.loading=!1,e.pageNum++}))},getBanner:function(){var e=this;l.a.get(u.a.banner).then(function(t){e.bannerLists=t.data.lists})}},components:{Foot:p.a,Swipe:g.a}})},17:function(e,t,n){"use strict";var a=n(1),s=new a.default;t.a=s},19:function(e,t,n){function a(e){n(41)}var s=n(7)(n(27),n(43),a,null,null);e.exports=s.exports},20:function(e,t,n){function a(e){n(40)}var s=n(7)(n(28),n(42),a,null,null);e.exports=s.exports},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(30),s=n.n(a),i=n(10),r=n.n(i),o=n(17),c=r.a.parse(location.search.substr(1)),d=c.index,l=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={props:["obj"],data:function(){return{navConfig:l,curIndex:parseInt(d)||0,ob:JSON.parse(s()(this.obj))}},created:function(){var e=this;setTimeout(function(){e.obj.age=18,o.a.$emit("change",18)},5e3)},methods:{changeIndex:function(e,t){location.href=e.href+"?index="+t,console.log(this.curIndex)}}}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),s=n(39);n.n(s);t.default={name:"swipe",props:{lists:{required:!0},name:{}},created:function(){},mounted:function(){new a.a(".swiper-container",{loop:!0,autoplay:{delay:5e3}})}}},39:function(e,t){},40:function(e,t){},41:function(e,t){},42:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])})),e._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},43:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,a){return n("li",{staticClass:"{active: index === curIndex}",on:{click:function(n){e.changeIndex(t,a)}}},[n("a",[n("i",{class:t.icon}),e._v(" "),n("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]}},80:function(e,t){},9:function(e,t){},92:function(e,t){}},[116]);
//# sourceMappingURL=index.766ded46524ff23eb8ca.js.map