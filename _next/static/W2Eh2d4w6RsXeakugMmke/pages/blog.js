(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return h})),n.d(t,"default",(function(){return v}));var r=n("q1tI"),o=n("8Kt/"),a=n.n(o),i=n("yE/o"),u=n("3mGJ"),c=n("Mt1y"),l=n("aQu0"),f=n("QetY"),s=n("AnCH"),d=n("0Ti5"),p=n("fjV5"),y=n("Q201"),m=r.createElement,h=!0;function v(e){var t=e.posts;return m(r.Fragment,null,m(a.a,null,m("title",null,"The Federated Blog | ",s.title)),m(p.a,{menuItems:d.a.menuItems,secondaryMenuItems:d.a.secondaryMenuItems,heading:function(){return m(y.a,null,m(i.a,{text:!0},m("h1",null,"The Federated Blog"),m("h2",null,"stay up to date with the latest in module federation")))}},m(u.a,{style:{padding:"8em 0em"},vertical:!0},m(i.a,{text:!0},t.map((function(e,t){return m(r.Fragment,{key:e.slug},t>0&&m(c.a,{style:{margin:"3em 0em"}}),m(l.a,{as:"h3",style:{fontSize:"2em"}},e.title),m("p",null,e.secondary_title),m(f.a,{as:"a",size:"large",href:"/blog/".concat(e.slug),className:"no-print"},"Read Post"))}))))))}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;d.has(f)?a=!1:(d.add(f),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function y(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}y.rewind=p.rewind,t.default=y},AnCH:function(e){e.exports=JSON.parse('{"title":"Module Federation ","description":"Official site for all things related to Webpack 5 Module Federation","repositoryUrl":"https://github.com/module-federation/site"}')},"C+bE":function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},Mt1y:function(e,t,n){"use strict";var r=n("pVnL"),o=n.n(r),a=n("TSYQ"),i=n.n(a),u=(n("17x9"),n("q1tI")),c=n.n(u),l=n("ZeOK"),f=n("ICNK"),s=n("Y53p"),d=n("H+2d");function p(e){var t=e.children,n=e.className,r=e.clearing,a=e.content,u=e.fitted,y=e.hidden,m=e.horizontal,h=e.inverted,v=e.section,b=e.vertical,_=i()("ui",Object(l.a)(r,"clearing"),Object(l.a)(u,"fitted"),Object(l.a)(y,"hidden"),Object(l.a)(m,"horizontal"),Object(l.a)(h,"inverted"),Object(l.a)(v,"section"),Object(l.a)(b,"vertical"),"divider",n),g=Object(f.a)(p,e),w=Object(s.a)(p,e);return c.a.createElement(w,o()({},g,{className:_}),d.a.isNil(t)?a:t)}p.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],p.propTypes={},t.a=p},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("tCBg"),u=n("T0f4"),c=n("48fX"),l=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(y,l);var s,p=(s=y,function(){var e,t=u(s);if(f()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function y(e){var a;return r(this,y),a=p.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(y,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(y,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),y}(s.Component)}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["JUhy",0,1,2]]]);