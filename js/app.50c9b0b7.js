(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],u=0,v=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&v.push(l[a][0]),l[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==l[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},l={app:0},o=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1dc6129a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=l[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=l[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=l[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}l[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/minesweeper/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("5c0b"),n("2877")),i={},s=Object(a["a"])(i,l,o,!1,null,null,null),c=s.exports,u=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container mx-auto "},[n("div",{staticClass:"flex flex-col items-center"},[n("ControlBar"),n("Board")],1)])])},v=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},m=g,b=(n("ebb5"),Object(a["a"])(m,p,d,!1,null,"ad0ee508",null)),h=(b.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center "},[n("div",{staticClass:"box-content border-4 border-gray-400"},e._l(e.cells,(function(t,r){return n("div",{staticClass:"flex"},e._l(t,(function(t,l){return n("Tile",{attrs:{value:t.value,"is-flag":t.isFlag,"is-bomb":t.isBomb,"is-open":t.isOpen},nativeOn:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.openCell({row:r,col:l})},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.openNeighbors({row:r,col:l}):null}],contextmenu:function(t){return t.preventDefault(),e.flagCell({row:r,col:l})}}})})),1)})),0)])}),_=[],w=n("5530"),O=n("2f62"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-5 h-5 box-content border border-white text-base leading-none text-center flex items-center rounded ",class:{"bg-gray-400 hover:bg-gray-500":!e.isOpen,"bg-gray-200":e.isOpen,"bg-red-300":e.isOpen&&e.isBomb,"bg-yellow-300":e.isOpen&&e.isFlag}},[n("span",{staticClass:"flex-1 text-center select-none"},[e._v(e._s(e.valueText))])])])},y=[],j={name:"Tile",props:["value","isBomb","isFlag","isOpen"],computed:{valueText:function(){return!this.isOpen&&this.isFlag?"🚩":this.isOpen?this.isBomb?"💣":0===this.value?"":this.value:""}}},x=j,k=Object(a["a"])(x,C,y,!1,null,"6f1d4016",null),F=k.exports,B={name:"Board",components:{Tile:F},computed:{cells:function(){return this.$store.state.game.cells}},methods:Object(w["a"])({tap:function(){console.log("TAP")}},Object(O["b"])("game",{generateCells:"generateCells",openCell:"openCell",flagCell:"flagCell",openNeighbors:"openNeighbors"})),mounted:function(){var e={cols:16,rows:16,mines:40};this.generateCells(e)}},E=B,$=Object(a["a"])(E,h,_,!1,null,"77783340",null),A=$.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row my-4 space-x-10 items-center"},[n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"text-3xl font-semibold"},[e._v(e._s(e.remainingFlags))]),n("span",[e._v("Mines Remaining")])]),n("LevelSelector"),n("button",{staticClass:"flex flex-col items-center hover:bg-blue-300 p-2 focus:outline-none",on:{click:e.recreateGame}},[n("div",{staticClass:"text-3xl font-semibold"},[e._v("↻")]),n("span",[e._v("Restart")])]),n("div",{staticClass:"text-3xl font-semibold text-gray-400"},[e._v("00:00")])],1)},T=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("button",{staticClass:"p-2 hover:bg-blue-300 focus:outline-none",on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v(e._s(e.selected))]),e.isOpen?n("button",{staticClass:"fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-25",on:{click:function(t){e.isOpen=!1}}}):e._e(),e.isOpen?n("div",{staticClass:"bg-white rounded-lg absolute py-3 px-1 shadow-md flex flex-col"},[n("button",{staticClass:"py-1 px-3  hover:bg-blue-300 rounded",on:{click:function(t){return e.selectLevel("Beginner")}}},[e._v("Beginner")]),n("button",{staticClass:"py-1 px-3 hover:bg-blue-300 rounded",on:{click:function(t){return e.selectLevel("Intermediate")}}},[e._v("Intermediate")]),n("button",{staticClass:"py-1 px-3 hover:bg-blue-300 rounded",on:{click:function(t){return e.selectLevel("Advanced")}}},[e._v("Advanced")])]):e._e()])},P=[],S={name:"LevelSelector",data:function(){return{isOpen:!1,selected:"Intermediate",configs:{Intermediate:{cols:16,rows:16,mines:40},Beginner:{cols:10,rows:10,mines:10},Advanced:{cols:30,rows:16,mines:99}}}},methods:Object(w["a"])(Object(w["a"])({},Object(O["b"])("game",{generateCells:"generateCells"})),{},{selectLevel:function(e){this.generateCells(this.configs[e]),this.selected=e,this.isOpen=!1}})},K=S,I=Object(a["a"])(K,L,P,!1,null,null,null),N=I.exports,G={name:"ControlBar",components:{LevelSelector:N},computed:Object(w["a"])({},Object(O["c"])("game",{remainingFlags:"remainingFlags"})),methods:Object(w["a"])({},Object(O["b"])("game",{recreateGame:"recreateGame"}))},H=G,D=Object(a["a"])(H,M,T,!1,null,null,null),J=D.exports,R={name:"Home",components:{ControlBar:J,Board:A}},q=R,z=Object(a["a"])(q,f,v,!1,null,null,null),W=z.exports;r["a"].use(u["a"]);var Q=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],U=new u["a"]({mode:"history",base:"/minesweeper/",routes:Q}),V=U,X=(n("4de4"),n("0481"),n("4069"),n("b85c")),Y=(n("99af"),n("7db0"),n("5db7"),n("a630"),n("d81d"),n("73d9"),n("3ca3"),n("ddb0"),n("3835"));n("fb6a");function Z(e,t){var n,r,l=e.slice(0),o=e.length;while(o--)r=Math.floor((o+1)*Math.random()),n=l[r],l[r]=l[o],l[o]=n;return l.slice(0,t)}function ee(e){var t=e.row,n=e.col;return[{row:t+1,col:n+1},{row:t+1,col:n},{row:t+1,col:n-1},{row:t,col:n+1},{row:t,col:n},{row:t,col:n-1},{row:t-1,col:n+1},{row:t-1,col:n},{row:t-1,col:n-1}]}function te(e){var t=e.rows,n=e.cols;return Array.from({length:t}).map((function(e){return Array.from({length:n}).map((function(e){return{value:-1,isBomb:!1,isFlag:!1,isOpen:!1}}))}))}function ne(e){var t,n=Object(X["a"])(e.entries());try{for(n.s();!(t=n.n()).done;){var r,l=Object(Y["a"])(t.value,2),o=l[0],a=l[1],i=Object(X["a"])(a.entries());try{for(i.s();!(r=i.n()).done;){var s=Object(Y["a"])(r.value,2),c=s[0],u=s[1];if(!u.isBomb){var f=ee({row:o,col:c}),v=f.filter((function(t){var n,r;return null===(n=e[t.row])||void 0===n||null===(r=n[t.col])||void 0===r?void 0:r.isBomb}));u.value=v.length}}}catch(p){i.e(p)}finally{i.f()}}}catch(p){n.e(p)}finally{n.f()}}function re(e,t){var n,r=e.length,l=e[0].length,o=Array.from({length:r*l},(function(e,t){return t})),a=Z(o,t),i=Object(X["a"])(a);try{for(i.s();!(n=i.n()).done;){var s=n.value,c=[Math.floor(s/l),s%l],u=c[0],f=c[1];e[u][f].isBomb=!0}}catch(v){i.e(v)}finally{i.f()}return ne(e),e}var le=function(e){return function(t){var n,r=Object(X["a"])(e.entries());try{for(r.s();!(n=r.n()).done;){var l,o=Object(Y["a"])(n.value,2),a=(o[0],o[1]),i=Object(X["a"])(a.entries());try{for(i.s();!(l=i.n()).done;){var s=Object(Y["a"])(l.value,2),c=(s[0],s[1]);if(!t(c))return!1}}catch(u){i.e(u)}finally{i.f()}}}catch(u){r.e(u)}finally{r.f()}return!0}},oe=function(e){return function(t){var n,r=Object(X["a"])(e.entries());try{for(r.s();!(n=r.n()).done;){var l,o=Object(Y["a"])(n.value,2),a=(o[0],o[1]),i=Object(X["a"])(a.entries());try{for(i.s();!(l=i.n()).done;){var s=Object(Y["a"])(l.value,2),c=(s[0],s[1]);if(t(c))return!0}}catch(u){i.e(u)}finally{i.f()}}}catch(u){r.e(u)}finally{r.f()}return!1}};function ae(e){var t=oe(e),n=function(e){return e.isOpen&&e.isBomb};return ie(e)||t(n)}function ie(e){var t=le(e),n=oe(e),r=function(e){return!e.isBomb&&e.isFlag||e.isBomb&&!e.isFlag},l=function(e){return e.isOpen||e.isFlag};return t(l)&&!n(r)}function se(e,t){var n=t.row,r=t.col,l=ee({row:n,col:r}),o=e[n][r];if(l.filter((function(t){var n;return null===(n=e[t.row])||void 0===n?void 0:n[t.col].isFlag})).length!==o.value)return[];var a=l.filter((function(t){var n,r,l,o=null!==(n=null===(r=e[t.row])||void 0===r?void 0:r[t.col])&&void 0!==n&&n,a=!(null===(l=e[t.row])||void 0===l?void 0:l[t.col].isFlag);return o&&a}));return a.flatMap((function(t){return ce(e,t)}))}function ce(e,t){var n=t.row,r=t.col,l=e[n][r],o=[{row:n,col:r}],a=[];if(l.isOpen||l.isFlag)return[];if(l.value>0)return[{row:n,col:r}];while(o.length){var i,s,c=o.pop();if(a.push(c),0===(null===(i=e[c.row])||void 0===i||null===(s=i[c.col])||void 0===s?void 0:s.value)){var u=ee(c).filter((function(t){var n,r,l,o,i=a.find((function(e){return e.row===t.row&&e.col===t.col})),s=null!==(n=null===(r=e[t.row])||void 0===r?void 0:r[t.col])&&void 0!==n&&n,c=null===(l=e[t.row])||void 0===l||null===(o=l[t.col])||void 0===o?void 0:o.isFlag;return s&&!i&&!c}));o=o.concat(u)}}return a}var ue={cells:[],currentConfig:{}},fe={setCells:function(e,t){e.cells=t},setCurrentConfig:function(e,t){e.currentConfig=t},openCell:function(e,t){var n=t.row,r=t.col;e.cells[n][r].isFlag||(e.cells[n][r].isOpen=!0)},flagCell:function(e,t){var n=t.row,r=t.col;e.cells[n][r].isFlag=!e.cells[n][r].isFlag},openMultipleCells:function(e,t){var n,r=Object(X["a"])(t);try{for(r.s();!(n=r.n()).done;){var l=n.value;e.cells[l.row][l.col].isOpen=!0}}catch(o){r.e(o)}finally{r.f()}},openAllCells:function(e){for(var t=0;t<e.cells.length;t++)for(var n=0;n<e.cells[0].length;n++)e.cells[t][n].isOpen=!0}},ve={recreateGame:function(e){e.dispatch("generateCells",e.state.currentConfig)},generateCells:function(e,t){var n=te(t);re(n,t.mines),e.commit("setCurrentConfig",t),e.commit("setCells",n)},openCell:function(e,t){var n=t.row,r=t.col;if(!e.state.cells[n][r].isOpen){var l=ce(e.state.cells,{row:n,col:r});e.commit("openMultipleCells",l),e.getters.ended&&!e.getters.won&&e.commit("openAllCells")}},openNeighbors:function(e,t){var n=t.row,r=t.col;if(e.state.cells[n][r].isOpen){var l=se(e.state.cells,{row:n,col:r});e.commit("openMultipleCells",l),e.getters.ended&&!e.getters.won&&e.commit("openAllCells")}},flagCell:function(e,t){var n=t.row,r=t.col;e.state.cells[n][r].isOpen||e.commit("flagCell",{row:n,col:r})}},pe={won:function(e){return ie(e.cells)},ended:function(e){return ae(e.cells)},remainingFlags:function(e){return e.cells.flat().filter((function(e){return e.isBomb})).length-e.cells.flat().filter((function(e){return e.isFlag})).length}},de={namespaced:!0,state:ue,actions:ve,mutations:fe,getters:pe};r["a"].use(O["a"]);var ge=new O["a"].Store({state:{},mutations:{},actions:{},modules:{game:de}});n("c898");r["a"].config.productionTip=!1,new r["a"]({router:V,store:ge,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),l=n.n(r);l.a},"9c0c":function(e,t,n){},c1c5:function(e,t,n){},c898:function(e,t,n){},ebb5:function(e,t,n){"use strict";var r=n("c1c5"),l=n.n(r);l.a}});
//# sourceMappingURL=app.50c9b0b7.js.map