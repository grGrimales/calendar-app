(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{134:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),c=n.n(r),o=n(9),s=n(42),i=n(12),l=n(18),u=(n(134),n(54)),j=n(6),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},t.name,t.value)))};return[r,s,o]},b=n(15),m=n.n(b),O=n(38),f=n(24),p=n.n(f),v="https://calendar-api-app.herokuapp.com/api",h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},g="[ui] Open modal",y="[ui] Close modal",N="[event] Set Active",w="[event] Logout event",k="[event] Add new",E="[event] Clear active event",S="[event] Event updated",C="[event] Event deleted",D="[event] Events loaded",P="[auth] Finish cheking login state",T="[auth] Login,",I="[auth] Logout",A=n(29),L=n.n(A),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{end:L()(e.end).toDate(),start:L()(e.start).toDate()})}))},R=function(e){return{type:k,payload:e}},G=function(){return{type:E}},F=function(e){return{type:S,payload:e}},V=function(){return{type:C}},H=function(e){return{type:D,payload:e}},J=function(e,t,n){return function(){var a=Object(O.a)(m.a.mark((function a(r){var c,o;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h("auth/new",{email:e,password:t,name:n},"POST");case 2:return c=a.sent,a.next=5,c.json();case 5:(o=a.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(q({uid:o.uid,name:o.name}))):p.a.fire("Error",o.msg,"error");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},M=function(){return{type:P}},q=function(e){return{type:T,payload:e}},U=function(){return function(e){localStorage.clear(),e(B()),e({type:w})}},B=function(){return{type:I}},X=n(3),z=function(){var e=Object(o.b)(),t=d({lEmail:"",lPassword:""}),n=Object(l.a)(t,2),a=n[0],r=n[1],c=a.lEmail,i=a.lPassword,u=d({rName:"Lucia",rEmail:"lucia@gmail.com",rPassword1:"123456",rPassword2:"123456"}),j=Object(l.a)(u,2),b=j[0];j[1],b.rName,b.rEmail,b.rPassword1,b.rPassword2;return Object(X.jsx)("div",{className:"container login-container",children:Object(X.jsx)("div",{className:"row d-flex justify-content-center",children:Object(X.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(X.jsx)("h3",{children:"Ingreso"}),Object(X.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=i,function(){var e=Object(O.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(q({uid:c.uid,name:c.name}))):p.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:c,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:i,onChange:r})}),Object(X.jsx)(s.b,{className:"link-login",to:"/register",children:"\xbfNo tienes cuenta, Ingresa aqu\xed?"}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]})})})},Y=n(132),K=(n(209),n(210),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(X.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(X.jsxs)("span",{className:"navbar-brand",children:[" ",t," "]}),Object(X.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(U())},children:[Object(X.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(X.jsx)("span",{children:" Salir"})]})]})}),Q={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},W=(n(211),function(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("strong",{children:n}),Object(X.jsx)("span",{children:a.name})]})}),Z=n(129),$=n.n(Z),ee=n(130),te=n.n(ee),ne=function(){return{type:g}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var re=L()().minutes(0).seconds(0).add(1,"hours"),ce=re.clone().add(1,"hours"),oe={title:"",notes:"",start:re.toDate(),end:ce.toDate()},se=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(re.toDate()),c=Object(l.a)(r,2),s=c[0],i=c[1],d=Object(a.useState)(ce.toDate()),b=Object(l.a)(d,2),f=b[0],v=b[1],h=Object(a.useState)(!0),g=Object(l.a)(h,2),N=g[0],w=g[1],k=Object(a.useState)(oe),E=Object(l.a)(k,2),S=E[0],C=E[1],D=S.notes,P=S.title,T=S.start,I=S.end;Object(a.useEffect)((function(){C(t||oe)}),[t,C]);var A=function(e){var t=e.target;C(Object(j.a)(Object(j.a)({},S),{},Object(u.a)({},t.name,t.value)))},_=function(){n({type:y}),n(G()),C(oe)};return Object(X.jsxs)($.a,{isOpen:e,onRequestClose:_,style:ae,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(X.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=L()(T),c=L()(I);return r.isSameOrAfter(c)?p.a.fire("Error","La fecha fin debe ser mayor a la fecha inicio","error"):P.trim().length<2?w(!1):(n(t?(a=S,function(){var e=Object(O.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(F(a)):p.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(O.a)(m.a.mark((function t(n,a){var r,c,o,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,x("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.events.id,e.user={_id:c,name:o},n(R(e))),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(S)),w(!0),void _())},children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora inicio"}),Object(X.jsx)(te.a,{onChange:function(e){i(e),C(Object(j.a)(Object(j.a)({},S),{},{start:e}))},value:s,className:"form-control"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora fin"}),Object(X.jsx)(te.a,{onChange:function(e){v(e),C(Object(j.a)(Object(j.a)({},S),{},{end:e}))},value:f,minDate:s,className:"form-control"})]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Titulo y notas"}),Object(X.jsx)("input",{type:"text",className:"form-control  ".concat(!N&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:P,onChange:A}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:D,onChange:A}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Guardar"})]})]})]})},ie=function(){var e=Object(o.b)();return Object(X.jsx)("button",{onClick:function(){e(ne())},className:"btn btn-primary fab",children:Object(X.jsx)("i",{className:"fas fa-plus"})})},le=function(){var e=Object(o.b)();return Object(X.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,x("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(V()):p.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"fas fa-trash"}),Object(X.jsx)("span",{children:" Borrar evento"})]})};L.a.locale("es");var ue=Object(Y.b)(L.a),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(l.a)(s,2),u=i[0],j=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=_(a.events),t(H(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(X.jsxs)("div",{className:"calendar-screen",children:[Object(X.jsx)(K,{}),Object(X.jsx)(Y.a,{localizer:ue,events:n,startAccessor:"start",endAccessor:"end",style:{height:500},messages:Q,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ne())},onSelectEvent:function(t){e({type:N,payload:t})},onView:function(e){j(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(G())},selectable:!0,view:u,components:{event:W}}),Object(X.jsx)(ie,{}),r&&Object(X.jsx)(le,{}),Object(X.jsx)(se,{})]})},de=n(90),be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,be);return Object(X.jsx)(i.b,Object(j.a)(Object(j.a)({},a),{},{component:function(e){return t?Object(X.jsx)(n,Object(j.a)({},e)):Object(X.jsx)(i.a,{to:"/login"})}}))},Oe=["isAuthenticated","component"],fe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,Oe);return Object(X.jsx)(i.b,Object(j.a)(Object(j.a)({},a),{},{component:function(e){return t?Object(X.jsx)(i.a,{to:"/"}):Object(X.jsx)(n,Object(j.a)({},e))}}))},pe=function(){var e=Object(o.b)(),t=d({rName:"Lucia",rEmail:"lucia@gmail.com",rPassword1:"123456",rPassword2:"123456"}),n=Object(l.a)(t,2),a=n[0],r=n[1],c=a.rName,i=a.rEmail,u=a.rPassword1,j=a.rPassword2;return Object(X.jsx)("div",{className:"container login-container",children:Object(X.jsx)("div",{className:"row d-flex justify-content-center",children:Object(X.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(X.jsx)("h3",{children:"Registro"}),Object(X.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),u!==j)return p.a.fire("Error","Las contrase\xf1as deben ser iguales","error");e(J(i,u,c))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:c,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:i,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:u,onChange:r})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:j,onChange:r})}),Object(X.jsx)(s.b,{to:"/login",className:"link-register",children:"\xbfYa tienes cuenta Ingresa Aqu\xed?"}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})})})},ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=(t.checking,t.uid);return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(q({uid:a.uid,name:a.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(X.jsx)(s.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(i.d,{children:[Object(X.jsx)(fe,{exact:!0,path:"/login",component:z,isAuthenticated:!!n}),Object(X.jsx)(fe,{exact:!0,path:"/register",component:pe,isAuthenticated:!!n}),Object(X.jsx)(me,{exact:!0,path:"/",component:je,isAuthenticated:!!n}),Object(X.jsx)(i.a,{to:"/"})]})})})},he=n(55),xe=n(193),ge={checking:!0},ye=n(133),Ne={events:[],activeEvent:null},we={modalOpen:!1},ke=Object(he.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!0});case y:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:t.payload});case k:return Object(j.a)(Object(j.a)({},e),{},{events:[].concat(Object(ye.a)(e.events),[t.payload])});case E:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null});case S:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case C:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case D:return Object(j.a)(Object(j.a)({},e),{},{events:Object(ye.a)(t.payload)});case w:return Object(j.a)({},Ne);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.payload),{},{checking:!1});case P:return Object(j.a)(Object(j.a)({},e),{},{checking:!1});case I:return{checking:!1};default:return e}}}),Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,Se=Object(he.d)(ke,Ee(Object(he.a)(xe.a))),Ce=function(){return Object(X.jsx)(o.a,{store:Se,children:Object(X.jsx)(ve,{})})};n(537);c.a.render(Object(X.jsx)(Ce,{}),document.getElementById("root"))}},[[538,1,2]]]);
//# sourceMappingURL=main.86cf7158.chunk.js.map