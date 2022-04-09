(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{swYP:function(e,t,r){"use strict";r.r(t);var n,a=r("7Nqv"),i=r("Xmxp"),s=r("LvDl"),u=r.n(s),o=r("4qC0"),c=r.n(o);!function(e){e.JWT="jwt",e.GCE="gce"}(n||(n={}));var l,p=[{value:"Google JWT File",key:n.JWT},{value:"GCE Default Service Account",key:n.GCE}];!function(e){e.Projects="projects",e.Services="services",e.DefaultProject="defaultProject",e.MetricTypes="metricTypes",e.LabelKeys="labelKeys",e.LabelValues="labelValues",e.ResourceTypes="resourceTypes",e.Aggregations="aggregations",e.Aligners="aligners",e.AlignmentPeriods="alignmentPeriods"}(l||(l={}));var f=r("PQjG");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t,r,n,a,i,s){try{var u=e[i](s),o=u.value}catch(e){return void r(e)}u.done?t(o):Promise.resolve(o).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){v(i,n,a,s,u,"next",e)}function u(e){v(i,n,a,s,u,"throw",e)}s(void 0)}))}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.datasource=t}var t,r,n,i,s,u,o,p,v,b,g,j;return t=e,(r=[{key:"execute",value:(j=m(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t.projectName||(t.projectName=this.datasource.getDefaultProject()),e.t0=t.selectedQueryType,e.next=e.t0===l.Projects?5:e.t0===l.Services?6:e.t0===l.MetricTypes?7:e.t0===l.LabelKeys?8:e.t0===l.LabelValues?9:e.t0===l.ResourceTypes?10:e.t0===l.Aligners?11:e.t0===l.AlignmentPeriods?12:e.t0===l.Aggregations?13:14;break;case 5:return e.abrupt("return",this.handleProjectsQuery());case 6:return e.abrupt("return",this.handleServiceQuery(t));case 7:return e.abrupt("return",this.handleMetricTypesQuery(t));case 8:return e.abrupt("return",this.handleLabelKeysQuery(t));case 9:return e.abrupt("return",this.handleLabelValuesQuery(t));case 10:return e.abrupt("return",this.handleResourceTypeQuery(t));case 11:return e.abrupt("return",this.handleAlignersQuery(t));case 12:return e.abrupt("return",this.handleAlignmentPeriodQuery());case 13:return e.abrupt("return",this.handleAggregationQuery(t));case 14:return e.abrupt("return",[]);case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e.catch(0),console.error("Could not run StackdriverMetricFindQuery ".concat(t),e.t1),e.abrupt("return",[]);case 21:case"end":return e.stop()}}),e,this,[[0,17]])}))),function(e){return j.apply(this,arguments)})},{key:"handleProjectsQuery",value:(g=m(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.datasource.getProjects();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return{text:e.label,value:e.value,expandable:!0}})));case 4:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"handleServiceQuery",value:(b=m(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.projectName,e.next=3,this.datasource.getMetricTypes(r);case 3:return n=e.sent,a=Object(f.a)(n),e.abrupt("return",a.map((function(e){return{text:e.serviceShortName,value:e.service,expandable:!0}})));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return b.apply(this,arguments)})},{key:"handleMetricTypesQuery",value:(v=m(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedService,n=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,this.datasource.getMetricTypes(n);case 5:return a=e.sent,e.abrupt("return",Object(f.g)(a,this.datasource.templateSrv.replace(r)).map((function(e){return{text:e.displayName,value:e.type,expandable:!0}})));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"handleLabelKeysQuery",value:(p=m(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedMetricType,n=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,Object(f.e)(this.datasource,r,n);case 5:return a=e.sent,e.abrupt("return",a.map(this.toFindQueryResult));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"handleLabelValuesQuery",value:(o=m(regeneratorRuntime.mark((function e(t){var r,n,a,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedMetricType,n=t.labelKey,a=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=6,this.datasource.getLabels(r,"handleLabelValuesQuery",a,[n]);case 6:return i=e.sent,s=this.datasource.templateSrv.replace(n),u=i.hasOwnProperty(s)?i[s]:[],e.abrupt("return",u.map(this.toFindQueryResult));case 10:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"handleResourceTypeQuery",value:(u=m(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedMetricType,n=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=6,this.datasource.getLabels(r,"handleResourceTypeQueryQueryType",n);case 6:return a=e.sent,e.abrupt("return",a["resource.type"].map(this.toFindQueryResult));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"handleAlignersQuery",value:(s=m(regeneratorRuntime.mark((function e(t){var r,n,a,i,s,u,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedMetricType,n=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,this.datasource.getMetricTypes(n);case 5:return a=e.sent,i=a.find((function(e){return e.type===o.datasource.templateSrv.replace(r)})),s=i.valueType,u=i.metricKind,e.abrupt("return",Object(f.c)(s,u).map(this.toFindQueryResult));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"handleAggregationQuery",value:(i=m(regeneratorRuntime.mark((function e(t){var r,n,a,i,s,u,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.selectedMetricType,n=t.projectName,r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,this.datasource.getMetricTypes(n);case 5:return a=e.sent,i=a.find((function(e){return e.type===o.datasource.templateSrv.replace(r)})),s=i.valueType,u=i.metricKind,e.abrupt("return",Object(f.b)(s,u).map(this.toFindQueryResult));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"handleAlignmentPeriodQuery",value:function(){return a.c.map(this.toFindQueryResult)}},{key:"toFindQueryResult",value:function(e){return c()(e)?{text:e,expandable:!0}:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{expandable:!0})}}])&&d(t.prototype,r),n&&d(t,n),e}(),g=r("Obii"),j=r("t8hP"),T=r("GQ3c");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(e,t,r,n,a,i,s){try{var u=e[i](s),o=u.value}catch(e){return void r(e)}u.done?t(o):Promise.resolve(o).then(n,a)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){R(i,n,a,s,u,"next",e)}function u(e){R(i,n,a,s,u,"throw",e)}s(void 0)}))}}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(e,r,n){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=C(this,Q(t).call(this,e))).instanceSettings=e,a.templateSrv=r,a.timeSrv=n,a.baseUrl="/stackdriver/",a.url=e.url,a.authenticationType=e.jsonData.authenticationType||"jwt",a.metricTypesCache={},a}var r,n,s,o,c,l,p,f,h,y,v,m,d,g;return t.$inject=["instanceSettings","templateSrv","timeSrv"],function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),r=t,(n=[{key:"getTimeSeries",value:(g=E(regeneratorRuntime.mark((function e(t){var r,n,a,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ensureGCEDefaultProject();case 2:if(!((r=t.targets.filter((function(e){return!e.hide&&e.metricType})).map((function(e){return{refId:e.refId,intervalMs:t.intervalMs,datasourceId:i.id,metricType:i.templateSrv.replace(e.metricType,t.scopedVars||{}),crossSeriesReducer:i.templateSrv.replace(e.crossSeriesReducer||"REDUCE_MEAN",t.scopedVars||{}),perSeriesAligner:i.templateSrv.replace(e.perSeriesAligner,t.scopedVars||{}),alignmentPeriod:i.templateSrv.replace(e.alignmentPeriod,t.scopedVars||{}),groupBys:i.interpolateGroupBys(e.groupBys||[],t.scopedVars),view:e.view||"FULL",filters:i.interpolateFilters(e.filters||[],t.scopedVars),aliasBy:i.templateSrv.replace(e.aliasBy,t.scopedVars||{}),type:"timeSeriesQuery",projectName:i.templateSrv.replace(e.projectName?e.projectName:i.getDefaultProject())}}))).length>0)){e.next=11;break}return e.next=6,Object(j.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:r}});case 6:return n=e.sent,a=n.data,e.abrupt("return",a);case 11:return e.abrupt("return",{results:[]});case 12:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"interpolateFilters",value:function(e,t){var r=this,n=u.a.chunk(e,4).map((function(e){var t=x(e,4),r=t[0],n=t[1],a=t[2],i=t[3];return{key:r,operator:n,value:a,condition:void 0===i?"AND":i}})).reduce((function(e,t){return t.value?[].concat(P(e),[t]):e}),[]);return u.a.flatten(n.map((function(e){var n=e.key,a=e.operator,i=e.value,s=e.condition;return[r.templateSrv.replace(n,t||{}),a,r.templateSrv.replace(i,t||{},"regex"),s]})))||[]}},{key:"getLabels",value:(d=E(regeneratorRuntime.mark((function e(t,r,n,a){var i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTimeSeries({targets:[{refId:r,datasourceId:this.id,projectName:this.templateSrv.replace(n),metricType:this.templateSrv.replace(t),groupBys:this.interpolateGroupBys(a||[],{}),crossSeriesReducer:"REDUCE_NONE",view:"HEADERS"}],range:this.timeSrv.timeRange()});case 2:return i=e.sent,s=i.results[r],e.abrupt("return",s&&s.meta?s.meta.labels:{});case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r,n){return d.apply(this,arguments)})},{key:"interpolateGroupBys",value:function(e,t){var r=this,n=[];return(e||[]).forEach((function(e){var a=r.templateSrv.replace(e,t||{},"csv").split(",");Array.isArray(a)?n=n.concat(a):n.push(a)})),n}},{key:"resolvePanelUnitFromTargets",value:function(e){var t;return e.length>0&&e.every((function(t){return t.unit===e[0].unit}))&&a.d.hasOwnProperty(e[0].unit)&&(t=a.d[e[0].unit]),t}},{key:"query",value:(m=E(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,this.getTimeSeries(t);case 3:if(!(n=e.sent).results){e.next=9;break}return Object.values(n.results).forEach((function(e){if(e.series){var n=a.resolvePanelUnitFromTargets(t.targets);e.series.forEach((function(t){var a={target:t.name,datapoints:t.points,refId:e.refId,meta:e.meta};n&&(a=k({},a,{unit:n})),r.push(a)}))}})),e.abrupt("return",{data:r});case 9:return e.abrupt("return",{data:[]});case 10:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"annotationQuery",value:(v=E(regeneratorRuntime.mark((function e(t){var r,n,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ensureGCEDefaultProject();case 2:return r=t.annotation,n=[{refId:"annotationQuery",datasourceId:this.id,metricType:this.templateSrv.replace(r.target.metricType,t.scopedVars||{}),crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:"ALIGN_NONE",title:this.templateSrv.replace(r.target.title,t.scopedVars||{}),text:this.templateSrv.replace(r.target.text,t.scopedVars||{}),tags:this.templateSrv.replace(r.target.tags,t.scopedVars||{}),view:"FULL",filters:this.interpolateFilters(r.target.filters||[],t.scopedVars),type:"annotationQuery",projectName:this.templateSrv.replace(r.target.projectName?r.target.projectName:this.getDefaultProject(),t.scopedVars||{})}],e.next=6,Object(j.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:n}});case 6:return a=e.sent,i=a.data,s=i.results.annotationQuery.tables[0].rows.map((function(e){return{annotation:r,time:Date.parse(e[0]),title:e[1],tags:[],text:e[3]}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"metricFindQuery",value:(y=E(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ensureGCEDefaultProject();case 2:return r=new b(this),e.abrupt("return",r.execute(t));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"testDatasource",value:(h=E(regeneratorRuntime.mark((function e(){var t,r,n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Cannot connect to Stackdriver API",e.prev=1,e.next=4,this.ensureGCEDefaultProject();case 4:return a="v3/projects/".concat(this.getDefaultProject(),"/metricDescriptors"),e.next=7,this.doRequest("".concat(this.baseUrl).concat(a));case 7:200===(i=e.sent).status?(t="success",r="Successfully queried the Stackdriver API."):(t="error",r=i.statusText?i.statusText:n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t="error",u.a.isString(e.t0)?r=e.t0:(r="Stackdriver: ",r+=e.t0.statusText?e.t0.statusText:n,e.t0.data&&e.t0.data.error&&e.t0.data.error.code&&(r+=": "+e.t0.data.error.code+". "+e.t0.data.error.message));case 15:return e.prev=15,e.abrupt("return",{status:t,message:r});case 18:case"end":return e.stop()}}),e,this,[[1,11,15,18]])}))),function(){return h.apply(this,arguments)})},{key:"getGCEDefaultProject",value:(f=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(j.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{queries:[{refId:"getGCEDefaultProject",type:"getGCEDefaultProject",datasourceId:this.id}]}}).then((function(e){var t=e.data;return t&&t.results&&t.results.getGCEDefaultProject&&t.results.getGCEDefaultProject.meta?t.results.getGCEDefaultProject.meta.defaultProject:""})).catch((function(e){throw e.data.error})));case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"formatStackdriverError",value:function(e){var t="Stackdriver: ";if(t+=e.statusText?e.statusText+": ":"",e.data&&e.data.error)try{var r=JSON.parse(e.data.error);t+=r.error.code+". "+r.error.message}catch(r){t+=e.data.error}else t+="Cannot connect to Stackdriver API";return t}},{key:"getProjects",value:(p=E(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.getBackendSrv)().datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{queries:[{refId:"getProjectsListQuery",type:"getProjectsListQuery",datasourceId:this.id}]}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results.getProjectsListQuery.meta.projectsList);case 8:return e.prev=8,e.t0=e.catch(0),console.log(this.formatStackdriverError(e.t0)),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return p.apply(this,arguments)})},{key:"getDefaultProject",value:function(){var e=this.instanceSettings.jsonData,t=e.defaultProject,r=e.authenticationType,n=e.gceDefaultProject;return"gce"===r?n||"":t||""}},{key:"ensureGCEDefaultProject",value:(l=E(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.instanceSettings.jsonData,r=t.authenticationType,n=t.gceDefaultProject,"gce"!==r||n){e.next=5;break}return e.next=4,this.getGCEDefaultProject();case 4:this.instanceSettings.jsonData.gceDefaultProject=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"getMetricTypes",value:(c=E(regeneratorRuntime.mark((function e(t){var r,n,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return",[]);case 3:if(r=this.templateSrv.replace(t),!this.metricTypesCache[r]){e.next=6;break}return e.abrupt("return",this.metricTypesCache[r]);case 6:return n="v3/projects/".concat(r,"/metricDescriptors"),e.next=9,this.doRequest("".concat(this.baseUrl).concat(n));case 9:return a=e.sent,s=a.data,this.metricTypesCache[r]=s.metricDescriptors.map((function(e){var t=x(e.type.split("/"),1)[0],r=x(t.split("."),1)[0];return e.service=t,e.serviceShortName=r,e.displayName=e.displayName||e.type,e})),e.abrupt("return",this.metricTypesCache[r]);case 15:return e.prev=15,e.t0=e.catch(0),i.b.emit(T.CoreEvents.dsRequestError,{error:{data:{error:this.formatStackdriverError(e.t0)}}}),e.abrupt("return",[]);case 19:case"end":return e.stop()}}),e,this,[[0,15]])}))),function(e){return c.apply(this,arguments)})},{key:"doRequest",value:(o=E(regeneratorRuntime.mark((function e(t){var r,n=this,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.abrupt("return",Object(j.getBackendSrv)().datasourceRequest({url:this.url+t,method:"GET"}).catch((function(e){if(r>0)return n.doRequest(t,r-1);throw e})));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"variables",get:function(){return this.templateSrv.variables.map((function(e){return"$".concat(e.name)}))}}])&&D(r.prototype,n),s&&D(r,s),t}(g.DataSourceApi);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(e,r,n){var a,i,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(a=!(s=L(t).call(this,e,r))||"object"!==V(s)&&"function"!=typeof s?_(i):s).templateSrv=n,a.onQueryChange=a.onQueryChange.bind(_(a)),a.onExecuteQuery=a.onExecuteQuery.bind(_(a)),a}var r,n,a;return t.$inject=["$scope","$injector","templateSrv"],function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),r=t,(n=[{key:"onQueryChange",value:function(e){Object.assign(this.target,e)}},{key:"onExecuteQuery",value:function(){this.$scope.ctrl.refresh()}}])&&N(r.prototype,n),a&&N(r,a),t}(r("LzXI").QueryCtrl);function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}I.templateUrl="partials/query.editor.html";var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.validationErrors=[],this.defaultAuthenticationType=n.JWT,this.datasourceSrv=t,this.name=this.meta.name,this.current.jsonData=this.current.jsonData||{},this.current.jsonData.authenticationType=this.current.jsonData.authenticationType?this.current.jsonData.authenticationType:this.defaultAuthenticationType,this.current.secureJsonData=this.current.secureJsonData||{},this.current.secureJsonFields=this.current.secureJsonFields||{},this.authenticationTypes=p}var t,r,a;return e.$inject=["datasourceSrv"],t=e,(r=[{key:"save",value:function(e){this.current.secureJsonData.privateKey=e.private_key,this.current.jsonData.tokenUri=e.token_uri,this.current.jsonData.clientEmail=e.client_email,this.current.jsonData.defaultProject=e.project_id}},{key:"validateJwt",value:function(e){return this.resetValidationMessages(),e.private_key&&0!==e.private_key.length||this.validationErrors.push("Private key field missing in JWT file."),e.token_uri&&0!==e.token_uri.length||this.validationErrors.push("Token URI field missing in JWT file."),e.client_email&&0!==e.client_email.length||this.validationErrors.push("Client Email field missing in JWT file."),e.project_id&&0!==e.project_id.length||this.validationErrors.push("Project Id field missing in JWT file."),0===this.validationErrors.length&&(this.inputDataValid=!0,!0)}},{key:"onUpload",value:function(e){this.jsonText="",this.validateJwt(e)&&this.save(e)}},{key:"onPasteJwt",value:function(e){try{var t=JSON.parse(e.originalEvent.clipboardData.getData("text/plain")||this.jsonText);this.validateJwt(t)&&this.save(t)}catch(e){this.resetValidationMessages(),this.validationErrors.push("Invalid json: ".concat(e.message))}}},{key:"resetValidationMessages",value:function(){this.validationErrors=[],this.inputDataValid=!1,this.jsonText="",this.current.jsonData=Object.assign({},{authenticationType:this.current.jsonData.authenticationType}),this.current.secureJsonData={},this.current.secureJsonFields={}}}])&&F(t.prototype,r),a&&F(t,a),e}();function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}G.templateUrl="public/app/plugins/datasource/stackdriver/partials/config.html";var K=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.annotation.target=this.annotation.target||{},this.onQueryChange=this.onQueryChange.bind(this)}var t,r,n;return t=e,(r=[{key:"onQueryChange",value:function(e){Object.assign(this.annotation.target,e)}}])&&J(t.prototype,r),n&&J(t,n),e}();K.templateUrl="partials/annotations.editor.html";var U=r("q1tI"),B=r.n(U),$=r("Opuj");function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t,r,n,a,i,s){try{var u=e[i](s),o=u.value}catch(e){return void r(e)}u.done?t(o):Promise.resolve(o).then(n,a)}function te(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){ee(i,n,a,s,u,"next",e)}function u(e){ee(i,n,a,s,u,"throw",e)}s(void 0)}))}}function re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ne(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=ne(this,ae(t).call(this,e))).queryTypes=[{value:l.Projects,name:"Projects"},{value:l.Services,name:"Services"},{value:l.MetricTypes,name:"Metric Types"},{value:l.LabelKeys,name:"Label Keys"},{value:l.LabelValues,name:"Label Values"},{value:l.ResourceTypes,name:"Resource Types"},{value:l.Aggregations,name:"Aggregations"},{value:l.Aligners,name:"Aligners"},{value:l.AlignmentPeriods,name:"Alignment Periods"}],r.defaults={selectedQueryType:r.queryTypes[0].value,metricDescriptors:[],selectedService:"",selectedMetricType:"",labels:[],labelKey:"",metricTypes:[],services:[],projects:[],projectName:""},r.state=Object.assign(r.defaults,{projectName:r.props.datasource.getDefaultProject()},r.props.query),r}var r,n,a,i,s,u,o,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(p=te(regeneratorRuntime.mark((function e(){var t,r,n,a,i,s,u,o,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.datasource.getProjects();case 2:return t=e.sent,e.next=5,this.props.datasource.getMetricTypes(this.props.query.projectName||this.props.datasource.getDefaultProject());case 5:return r=e.sent,n=Object(f.a)(r).map((function(e){return{value:e.service,name:e.serviceShortName}})),a="",n.some((function(e){return e.value===c.props.templateSrv.replace(c.state.selectedService)}))?a=this.state.selectedService:n&&n.length>0&&(a=n[0].value),i=Object(f.f)(r,this.state.selectedMetricType,this.props.templateSrv.replace(this.state.selectedMetricType),this.props.templateSrv.replace(a)),s=i.metricTypes,u=i.selectedMetricType,e.t0=Y,e.t1={services:n,selectedService:a,metricTypes:s,selectedMetricType:u,metricDescriptors:r,projects:t.map((function(e){return{value:e.value,name:e.label}}))},e.next=14,this.getLabels(u,this.state.projectName);case 14:e.t2=e.sent,o=(0,e.t0)(e.t1,e.t2),this.setState(o);case 17:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"onQueryTypeChange",value:(c=te(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Y,e.t1={selectedQueryType:t},e.next=4,this.getLabels(this.state.selectedMetricType,this.state.projectName,t);case 4:e.t2=e.sent,r=(0,e.t0)(e.t1,e.t2),this.setState(r);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"onProjectChange",value:(o=te(regeneratorRuntime.mark((function e(t){var r,n,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.datasource.getMetricTypes(t);case 2:return r=e.sent,e.next=5,this.getLabels(this.state.selectedMetricType,t);case 5:n=e.sent,a=Object(f.f)(r,this.state.selectedMetricType,this.props.templateSrv.replace(this.state.selectedMetricType),this.props.templateSrv.replace(this.state.selectedService)),i=a.metricTypes,s=a.selectedMetricType,this.setState(Y({},n,{metricTypes:i,selectedMetricType:s,metricDescriptors:r,projectName:t}));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"onServiceChange",value:(u=te(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.f)(this.state.metricDescriptors,this.state.selectedMetricType,this.props.templateSrv.replace(this.state.selectedMetricType),this.props.templateSrv.replace(t)),n=r.metricTypes,a=r.selectedMetricType,e.t0=Y,e.t1={selectedService:t,metricTypes:n,selectedMetricType:a},e.next=5,this.getLabels(a,this.state.projectName);case 5:e.t2=e.sent,i=(0,e.t0)(e.t1,e.t2),this.setState(i);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"onMetricTypeChange",value:(s=te(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Y,e.t1={selectedMetricType:t},e.next=4,this.getLabels(t,this.state.projectName);case 4:e.t2=e.sent,r=(0,e.t0)(e.t1,e.t2),this.setState(r);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"onLabelKeyChange",value:function(e){this.setState({labelKey:e})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state,r=(t.metricDescriptors,t.labels,t.metricTypes,t.services,z(t,["metricDescriptors","labels","metricTypes","services"])),n=this.queryTypes.find((function(t){return t.value===e.state.selectedQueryType}));this.props.onChange(r,"Stackdriver - ".concat(n.name))}},{key:"getLabels",value:(i=te(regeneratorRuntime.mark((function e(t,r){var n,a,i,s,u=this,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>2&&void 0!==o[2]?o[2]:this.state.selectedQueryType,a={labels:this.state.labels,labelKey:this.state.labelKey},!t||n!==l.LabelValues){e.next=8;break}return e.next=5,Object(f.e)(this.props.datasource,t,r);case 5:i=e.sent,s=i.some((function(e){return e===u.props.templateSrv.replace(u.state.labelKey)}))?this.state.labelKey:i[0],a={labels:i,labelKey:s};case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"insertTemplateVariables",value:function(e){var t=this.props.templateSrv.variables.map((function(e){return{name:"$".concat(e.name),value:"$".concat(e.name)}}));return[].concat(X(t),X(e))}},{key:"renderQueryTypeSwitch",value:function(e){var t=this;switch(e){case l.MetricTypes:return B.a.createElement(B.a.Fragment,null,B.a.createElement($.k,{value:this.state.projectName,options:this.insertTemplateVariables(this.state.projects),onValueChange:function(e){return t.onProjectChange(e.target.value)},label:"Project"}),B.a.createElement($.k,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e.target.value)},label:"Service"}));case l.LabelKeys:case l.LabelValues:case l.ResourceTypes:return B.a.createElement(B.a.Fragment,null,B.a.createElement($.k,{value:this.state.projectName,options:this.insertTemplateVariables(this.state.projects),onValueChange:function(e){return t.onProjectChange(e.target.value)},label:"Project"}),B.a.createElement($.k,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e.target.value)},label:"Service"}),B.a.createElement($.k,{value:this.state.selectedMetricType,options:this.insertTemplateVariables(this.state.metricTypes),onValueChange:function(e){return t.onMetricTypeChange(e.target.value)},label:"Metric Type"}),e===l.LabelValues&&B.a.createElement($.k,{value:this.state.labelKey,options:this.insertTemplateVariables(this.state.labels.map((function(e){return{value:e,name:e}}))),onValueChange:function(e){return t.onLabelKeyChange(e.target.value)},label:"Label Key"}));case l.Aligners:case l.Aggregations:return B.a.createElement(B.a.Fragment,null,B.a.createElement($.k,{value:this.state.selectedService,options:this.insertTemplateVariables(this.state.services),onValueChange:function(e){return t.onServiceChange(e.target.value)},label:"Service"}),B.a.createElement($.k,{value:this.state.selectedMetricType,options:this.insertTemplateVariables(this.state.metricTypes),onValueChange:function(e){return t.onMetricTypeChange(e.target.value)},label:"Metric Type"}));default:return""}}},{key:"render",value:function(){var e=this;return B.a.createElement(B.a.Fragment,null,B.a.createElement($.k,{value:this.state.selectedQueryType,options:this.queryTypes,onValueChange:function(t){return e.onQueryTypeChange(t.target.value)},label:"Query Type"}),this.renderQueryTypeSwitch(this.state.selectedQueryType))}}])&&re(r.prototype,n),a&&re(r,a),t}(U.PureComponent);r.d(t,"Datasource",(function(){return M})),r.d(t,"QueryCtrl",(function(){return I})),r.d(t,"ConfigCtrl",(function(){return G})),r.d(t,"AnnotationsQueryCtrl",(function(){return K})),r.d(t,"VariableQueryEditor",(function(){return se}))}}]);
//# sourceMappingURL=stackdriverPlugin.67951dc7df0e9bfd5186.js.map