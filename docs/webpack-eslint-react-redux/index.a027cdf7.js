(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1053:function(e,t,n){n(1052),e.exports=n(850)},759:function(e,t,n){"use strict";var r,o=n(758),a=(r=o)&&r.__esModule?r:{default:r};e.exports={list:a.default.mock({"list|1-10":[{"id|+1":1}]})}},760:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getData=void 0;var r,o=n(759),a=(r=o)&&r.__esModule?r:{default:r};t.getData=function(e){return t=regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.default.list;case 2:return(r=e.sent)&&t({type:"GET_DATA",data:r}),e.abrupt("return",Promise.resolve(r));case 5:case"end":return e.stop()}},e,void 0)}),n=function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,a){try{var u=e[o](a),l=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})},function(e,t){return n.apply(this,arguments)};var t,n}},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=f(a),l=n(760),c=n(276),i=f(n(0));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.componentDidMount=function(){r.props.getData()},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props.commonData.list||[];return u.default.createElement("div",{style:{background:"#fff",minHeight:"90vh",padding:"20px"}},"这里是列表",e.map(function(e,t){return u.default.createElement("li",{key:t},"列表",e.id)}))}}]),t}();p.propTypes={getData:i.default.func.isRequired},t.default=(0,c.connect)(function(e){return r({},e)},function(e){return{getData:function(){return e((0,l.getData)())}}})(p)},762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,"Home")}}]),t}();t.default=l},763:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(762)),o=a(n(761));function a(e){return e&&e.__esModule?e:{default:e}}var u=[{path:"/",component:r.default,exact:!0},{path:"/list",component:o.default,exact:!0}];t.default=u},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={commonData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"GET_DATA":return t.data;default:return e}}}},768:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=(r=a)&&r.__esModule?r:{default:r},l=n(192);n(767);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"notFoundContainer"},u.default.createElement("div",{className:"bg-404"}),u.default.createElement("div",{className:"goBack"},u.default.createElement(l.Link,{to:"/",className:"backHomeBtn"},"返回首页")))}}]),t}();t.default=c},795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(129)),o=f(n(14)),a=f(n(191)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(524),n(774),n(773);var l=n(1),c=f(l),i=n(192);function f(e){return e&&e.__esModule?e:{default:e}}n(770);var s=a.default.Content,p=a.default.Footer,d=a.default.Sider,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onCollapse=function(e){n.setState({collapsed:e})},n.state={collapsed:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),u(t,[{key:"render",value:function(){return c.default.createElement(a.default,null,c.default.createElement(d,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},c.default.createElement("div",{className:"logo"}),c.default.createElement(r.default,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},c.default.createElement(r.default.Item,{key:"1"},c.default.createElement(i.Link,{to:"/"},c.default.createElement(o.default,{type:"pie-chart"}),c.default.createElement("span",null,"首页"))),c.default.createElement(r.default.Item,{key:"2"},c.default.createElement(i.Link,{to:"/list"},c.default.createElement(o.default,{type:"desktop"}),c.default.createElement("span",null,"列表页"))))),c.default.createElement(a.default,{style:{minHeight:"100vh"}},c.default.createElement(s,null,this.props.children),c.default.createElement(p,{style:{textAlign:"center",fontSize:"16px",height:"80px"}},"webpack-eslint-react   ©2018 Created by SelinaYu")))}}]),t}();t.default=y},850:function(e,t,n){"use strict";var r=h(n(241)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};"function"==typeof Symbol&&Symbol.iterator;n(809);var a=h(n(1)),u=n(11),l=n(276),c=n(269),i=h(n(272)),f=n(525),s=n(192),p=h(n(799));n(223);var d=h(n(795)),y=h(n(768)),m=h(n(765)),b=h(n(764)),v=h(n(763));function h(e){return e&&e.__esModule?e:{default:e}}var _=c.compose;var w=(0,i.default)(),O=[b.default,(0,f.routerMiddleware)(w)],E=_(c.applyMiddleware.apply(void 0,O)),g=(0,c.createStore)((0,c.combineReducers)(o({},m.default,{router:f.routerReducer})),E),j=function(e){var t=e.component,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["component"]);return a.default.createElement(s.Route,o({exact:!0},n,{render:function(e){return a.default.createElement(t,e)}}))};(0,u.render)(a.default.createElement(l.Provider,{store:g},a.default.createElement(f.ConnectedRouter,{history:w},a.default.createElement(r.default,{locale:p.default},a.default.createElement(d.default,null,a.default.createElement(s.Switch,null,v.default.map(function(e,t){return a.default.createElement(j,o({key:t},e))}),a.default.createElement(s.Route,{path:"*",component:y.default})))))),document.getElementById("app"))}},[[1053,0,2,3,1]]]);