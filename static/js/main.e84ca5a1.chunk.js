(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__1e6Eo",avatar:"Message_avatar__27qbc",body:"Message_body__38vA3",name:"Message_name__2CUjR",text:"Message_text__3ga52",time:"Message_time__336OU"}},function(e,a,t){e.exports={message:"AlternativeMessage_message__29Qhd",body:"AlternativeMessage_body__c4PI4",name:"AlternativeMessage_name__2sYrl",avatar:"AlternativeMessage_avatar__2ZNb_",text:"AlternativeMessage_text__1lXdz",time:"AlternativeMessage_time__2sRGq"}},,,function(e,a,t){e.exports={someClass:"Affairs_someClass__31hM2"}},,function(e,a,t){e.exports={blue:"HW4_blue__jE-Aa",green:"HW4_green__3-SUA",column:"HW4_column__2Dmxz",testSpanError:"HW4_testSpanError__2RQah"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2NCY_",error:"Greeting_error__32fFd",errorText:"Greeting_errorText__2kGn2"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__164C6",errorInput:"SuperInputText_errorInput__1fV0r",error:"SuperInputText_error__3U1W1"}},function(e,a,t){e.exports={default:"SuperButton_default__oucav",red:"SuperButton_red__1x86h"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3SclI",spanClassName:"SuperCheckbox_spanClassName__3KNhv"}},,,function(e,a,t){e.exports={App:"App_App__2DoSx"}},,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),s=(t(22),t(15)),o=t.n(s),i=t(2),m=t.n(i);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:m.a.body},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:m.a.time},e.time)))},d=t(3),_=t.n(d);var p=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:_.a.body},r.a.createElement("div",{className:_.a.name},e.name),r.a.createElement("div",{className:_.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:_.a.time},e.time)))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",v="some text",f="22:00",g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Gacha Life",C="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quod consectetur dolors. Last symbol! ->",N="21:30",k="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Gacha Life",S="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Test text!",y="21:31",O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",A="Gacha Life",j="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Goodbye!",w="21:33";var T=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:E,name:h,message:v,time:f}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(p,{avatar:g,name:b,message:C,time:N}),r.a.createElement(p,{avatar:k,name:x,message:S,time:y}),r.a.createElement(p,{avatar:O,name:A,message:j,time:w})),r.a.createElement("hr",null))},M=t(1);var W=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback()}},"X"))},G=t(6),I=t.n(G);var H=function(e){var a=e.data.map((function(a){return r.a.createElement(W,{key:a._id,affair:a,deleteAffairCallback:function(){return e.deleteAffairCallback(a._id)}})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:"all"===e.filter?I.a.someClass:"",onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?I.a.someClass:"",onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:"middle"===e.filter?I.a.someClass:"",onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:"low"===e.filter?I.a.someClass:"",onClick:function(){e.setFilter("low")}},"Low"))},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var U=function(){var e=Object(n.useState)(F),a=Object(M.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(M.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(H,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:o}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(16),L=t(9),P=t.n(L),q=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyHandler,o=!a.trim(),i=!l?"":P.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onKeyDown:s,onChange:t,className:i,onBlur:t}),r.a.createElement("button",{onClick:n,disabled:o},"add"),r.a.createElement("span",null,c),r.a.createElement("div",{className:P.a.errorText},l))},K=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(M.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(M.a)(i,2),u=m[0],d=m[1],_=function(){var e=s.trim();alert("Hello ".concat(e,"!")),t(e),o("")},p=a.length;return r.a.createElement(q,{name:s,setNameCallback:function(e){var a=e.currentTarget.value;o(a),u&&d(""),a||d("Invalid Value")},addUser:_,error:u,totalUsers:p,onKeyHandler:function(e){s&&"Enter"===e.key&&_()}})},J=t(25);var X=function(){var e=Object(n.useState)([]),a=Object(M.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(K,{users:t,addUserCallback:function(e){var a={_id:Object(J.a)(),name:e};l([].concat(Object(B.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(4),Z=t(10),R=t.n(Z),D=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],z=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(Y.a)(e,D),m="".concat(R.a.error," ").concat(o||""),u=c?"".concat(R.a.errorInput," ").concat(s):"".concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},Q=t(8),V=t.n(Q),$=t(11),ee=t.n($),ae=["red","className"],te=function(e){var a=e.red,t=e.className,n=Object(Y.a)(e,ae),l="".concat(a?ee.a.red:ee.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},ne=t(12),re=t.n(ne),le=["type","onChange","onChangeChecked","className","spanClassName","children"],ce=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(Y.a)(e,le),s="".concat(re.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:re.a.spanClassName},l))};var se=function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(M.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:V.a.column},r.a.createElement(z,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(z,{value:t,onChangeText:l,onEnter:s,error:c,className:"".concat(V.a.blue," ").concat(V.a.green)}),r.a.createElement(te,null,"default"),r.a.createElement(te,{red:!0,onClick:s},"delete "),r.a.createElement(te,{disabled:!0},"disabled"),r.a.createElement(ce,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(ce,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var oe=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(T,null),r.a.createElement(U,null),r.a.createElement(X,null),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.e84ca5a1.chunk.js.map