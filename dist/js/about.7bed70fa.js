(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),i=a("cf05"),n=a.n(i);const l=Object(c["h"])("div",{class:"about"},[Object(c["h"])("img",{alt:"Vue logo",src:n.a}),Object(c["h"])("h1",null,"This is an about page")],-1),s=Object(c["h"])("div",{class:"elabel"},[Object(c["h"])("h3",null,"Employee List")],-1),b={class:"employee"},r={key:0},o={class:"eitem"},u={key:1,class:"loading"};function j(e,t,a,i,n,j){return Object(c["r"])(),Object(c["e"])(c["a"],null,[l,Object(c["h"])("div",null,[s,Object(c["h"])("div",b,[e.isFetching?(Object(c["r"])(),Object(c["e"])("div",u," Loading ... ")):(Object(c["r"])(),Object(c["e"])("div",r,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.apiDetails.data,e=>(Object(c["r"])(),Object(c["e"])("div",{key:e,class:"elist"},[Object(c["h"])("div",o,Object(c["D"])(e.employee_name),1)]))),128))]))])])],64)}var O=a("9ab4"),d=a("bc3a"),p=a.n(d);function h({url:e}){const t={data:null,error:!1},a=Object(c["w"])(!0),i=Object(c["v"])(t);function n(){return Object(O["a"])(this,void 0,void 0,(function*(){try{const t=yield p.a.get(e);i.data=t.data.data}catch(t){i.error=!0}finally{a.value=!1}}))}return Object(c["p"])(()=>{n()}),{isFetching:a,apiDetails:i}}var v=Object(c["i"])({name:"About",setup(){const{isFetching:e,apiDetails:t}=h({url:"http://dummy.restapiexample.com/api/v1/employees"});return{isFetching:e,apiDetails:t}}});v.render=j;t["default"]=v}}]);
//# sourceMappingURL=about.7bed70fa.js.map