(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{sz7o:function(e,t,r){"use strict";r.r(t);var n=r("Obii");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=l(this,f(t).call(this,e))).data=[],e.jsonData.data&&(r.data=e.jsonData.data.map((function(e){return Object(n.toDataFrame)(e)}))),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(o=[{key:"getQueryDisplayText",value:function(e){return e.data?"Panel Data: "+b(e.data):"Shared Data From: ".concat(this.name," (").concat(b(this.data),")")}},{key:"metricFindQuery",value:function(e,t){var r=this;return new Promise((function(e,t){var n=[],o=!0,a=!1,i=void 0;try{for(var u,c=r.data[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value,f=!0,s=!1,p=void 0;try{for(var y,b=l.fields[Symbol.iterator]();!(f=(y=b.next()).done);f=!0){var d=y.value;n.push({text:d.name})}}catch(e){s=!0,p=e}finally{try{f||null==b.return||b.return()}finally{if(s)throw p}}}}catch(e){a=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}e(n)}))}},{key:"query",value:function(e){var t=[],r=!0,o=!1,a=void 0;try{for(var u,c=e.targets[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var l=u.value;if(!l.hide){var f=this.data;l.data&&(f=l.data.map((function(e){return Object(n.toDataFrame)(e)})));for(var s=0;s<f.length;s++)t.push(i({},f[s],{refId:l.refId}))}}}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return Promise.resolve({data:t})}},{key:"testDatasource",value:function(){var e=this;return new Promise((function(t,r){var n=0,o="".concat(e.data.length," Series:"),a=!0,i=!1,u=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value,s=f.length;o+=" [".concat(f.fields.length," Fields, ").concat(s," Rows]"),n+=s}}catch(e){i=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(i)throw u}}n>0&&t({status:"success",message:o}),r({status:"error",message:"No Data Entered"})}))}}])&&c(r.prototype,o),a&&c(r,a),t}(n.DataSourceApi);function y(e){return e&&e.fields&&e.fields.length?e.hasOwnProperty("length")?e.length:e.fields[0].values.length:0}function b(e){if(!e||!e.length)return"";if(e.length>1){var t=e.reduce((function(e,t){return e+y(t)}),0);return"".concat(e.length," Series, ").concat(t," Rows")}var r=e[0];if(!r.fields)return"Missing Fields";var n=y(r);return"".concat(r.fields.length," Fields, ").concat(n," Rows")}var d=r("q1tI"),h=r.n(d),v=r("kDLi");function m(e){return e&&e.length?Object(n.toCSV)(e.map((function(e){return Object(n.toDataFrame)(e)}))):""}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=[{value:"panel",label:"Panel",description:"Save data in the panel configuration."},{value:"shared",label:"Shared",description:"Save data in the shared datasource object."}],k=function(e){function t(){var e,r;P(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(r=D(this,(e=_(t)).call.apply(e,[this].concat(a)))).state={text:""},r.onSourceChange=function(e){var t=r.props,o=t.datasource,a=t.query,i=t.onChange,u=t.onRunQuery,c=void 0;if("panel"===e.value){if(a.data)return;(c=S(o.data))||(c=[new n.MutableDataFrame]),r.setState({text:Object(n.toCSV)(c)})}i(w({},a,{data:c})),u()},r.onSeriesParsed=function(e,t){var o=r.props,a=o.query,i=o.onChange,u=o.onRunQuery;r.setState({text:t}),e||(e=[new n.MutableDataFrame]),i(w({},a,{data:e})),u()},r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),r=t,(o=[{key:"onComponentDidMount",value:function(){var e=m(this.props.query.data);this.setState({text:e})}},{key:"render",value:function(){var e=this.props,t=e.datasource,r=e.query,n=t.id,o=t.name,a=this.state.text,i=r.data?C[0]:C[1];return h.a.createElement("div",null,h.a.createElement("div",{className:"gf-form"},h.a.createElement(v.FormLabel,{width:4},"Data"),h.a.createElement(v.Select,{width:6,options:C,value:i,onChange:this.onSourceChange}),h.a.createElement("div",{className:"btn btn-link"},r.data?b(r.data):h.a.createElement("a",{href:"datasources/edit/".concat(n,"/")},o,": ",b(t.data),"   ",h.a.createElement("i",{className:"fa fa-pencil-square-o"})))),r.data&&h.a.createElement(v.TableInputCSV,{text:a,onSeriesParsed:this.onSeriesParsed,width:"100%",height:200}))}}])&&E(r.prototype,o),a&&E(r,a),t}(d.PureComponent);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){var e,r;R(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(r=I(this,(e=M(t)).call.apply(e,[this].concat(a)))).state={text:""},r.onSeriesParsed=function(e,t){var o=r.props,a=o.options,i=o.onOptionsChange;e||(e=[new n.MutableDataFrame]);var u=q({},a.jsonData,{data:e});i(q({},a,{jsonData:u})),r.setState({text:t})},r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){var e=this.props.options;if(e.jsonData.data){var t=m(e.jsonData.data);this.setState({text:t})}}},{key:"render",value:function(){var e=this.state.text;return h.a.createElement("div",null,h.a.createElement("div",{className:"gf-form-group"},h.a.createElement("h4",null,"Shared Data:"),h.a.createElement("span",null,"Enter CSV"),h.a.createElement(v.TableInputCSV,{text:e,onSeriesParsed:this.onSeriesParsed,width:"100%",height:200})),h.a.createElement("div",{className:"grafana-info-box"},"This data is stored in the datasource json and is returned to every user in the initial request for any datasource. This is an appropriate place to enter a few values. Large datasets will perform better in other datasources.",h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("b",null,"NOTE:")," Changes to this data will only be reflected after a browser refresh."))}}])&&N(r.prototype,o),a&&N(r,a),t}(d.PureComponent);r.d(t,"plugin",(function(){return L}));var L=new n.DataSourcePlugin(p).setConfigEditor(V).setQueryEditor(k)}}]);
//# sourceMappingURL=inputDatasourcePlugin.67951dc7df0e9bfd5186.js.map