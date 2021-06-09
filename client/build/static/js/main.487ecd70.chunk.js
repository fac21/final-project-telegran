(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c,s,i=n(1),r=n.n(i),a=n(28),o=n.n(a),j=(n(36),n(10)),l=n(2),b=n(3),d=n.p+"static/media/logo.03f21e88.png",h=n(5),x=n(6),O=x.a.button(c||(c=Object(h.a)(["\n  width: 200px;\n  height: 50px;\n  background-color: #73e3c8;\n  margin-top: 2rem;\n  border-radius: 30px;\n  border: none;\n"]))),m=x.a.div(s||(s=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #f4f0f0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),u=n(0);var p=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:d,alt:"logo"})}),Object(u.jsxs)(O,{type:"submit",children:[" ",Object(u.jsx)(l.b,{to:"/connect",className:"text-link",children:"Get Started"})]})]})};var g=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:d,alt:"logo"})}),Object(u.jsx)("h1",{children:"Connect to Slack Workspace"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{children:"Workspace ID:"}),Object(u.jsx)("input",{})]}),Object(u.jsxs)("button",{type:"submit",children:[" ",Object(u.jsx)(l.b,{to:"/connection-success",className:"text-link",children:"Connect"})]})]})};var f=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("h1",{children:"Tutorial"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("video",{width:"320",height:"240",controls:!0,children:Object(u.jsx)("source",{src:"movie.mp4",type:"video/mp4"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.b,{to:"/tutorial",className:"text-link",children:"Written Tutorial"})}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.b,{to:"/welcome",className:"text-link",children:"Skip"})})]})]})]})};var v=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("h1",{children:"Tutorial"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"text"}),Object(u.jsx)("li",{children:"text"}),Object(u.jsx)("li",{children:"text"}),Object(u.jsx)("li",{children:"text"}),Object(u.jsx)("li",{children:"text"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.b,{to:"/video",className:"text-link",children:"Video Tutorial"})}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)(l.b,{to:"/welcome",className:"text-link",children:"Skip"})})]})]})]})},w=n.p+"static/media/envelope.a3ea37af.svg",y=n.p+"static/media/sos.36d46631.svg",k=n.p+"static/media/write.0b016300.svg";n(48);var N,S=function(e){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsxs)(l.b,{to:"/messages",className:"text-link",children:[Object(u.jsx)("img",{src:w,alt:"envelope",className:"icon"}),Object(u.jsx)("div",{children:"Messages"})]}),Object(u.jsxs)(l.b,{to:"/write",className:"text-link",children:[Object(u.jsx)("img",{width:"100%",src:k,alt:"write",className:"icon"}),Object(u.jsx)("div",{children:"Write"})]}),Object(u.jsxs)(l.b,{to:"/emergency",className:"text-link",children:[Object(u.jsx)("img",{src:y,alt:"emergency",className:"icon"}),Object(u.jsx)("div",{children:"Emergency"})]})]})},C=x.a.div(N||(N=Object(h.a)(["\n  width: 100vw;\n  height: 100px;\n  background-color: #73e3c8;\n  margin-top: 2rem;\n  bottom: 0;\n  position: fixed;\n"])));var T=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:d,alt:"logo"})}),Object(u.jsx)(C,{children:Object(u.jsx)(S,{})})]})},W=n(16),J=n(15),M=n.n(J);var P=function(){var e=Object(W.a)(),t=e.width,n=e.height;return Object(u.jsxs)(m,{children:[Object(u.jsx)(M.a,{width:t,height:n}),Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)(l.b,{to:"/video",children:"Successfully Connected "})," "]})]})},R=n.p+"static/media/profile.7cbe0d9e.svg";var z,E,B=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"parent",children:[Object(u.jsx)("img",{className:"avatar",src:R,alt:"avatar"}),Object(u.jsxs)("div",{className:"time",children:[e.messageTime," "]}),Object(u.jsxs)("div",{className:"name",children:[e.messageName," "]}),Object(u.jsxs)("div",{className:"content",children:[e.messageContent," "]})]})})},G=(x.a.div(z||(z=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #f4f0f0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),x.a.div(E||(E=Object(h.a)(["\n  .parent {\n    padding-right: 1rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    line-height: 2rem;\n    background-color: #febeb5;\n    margin-bottom: 1rem;\n    align-items: center;\n  }\n\n  .avatar {\n    grid-area: 1 / 1 / 3 / 2;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .time {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n  .name {\n    grid-area: 1 / 3 / 2 / 4;\n    font-weight: bold;\n    font-size: 1.3rem;\n  }\n  .content {\n    grid-area: 2 / 2 / 3 / 4;\n  }\n"])))),D=n(19);var I=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),n=t[0],c=t[1];r.a.useEffect((function(){D("/api/read-messages",{}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error("Oops message not received!",e)}))}),[]);var s=n.map((function(e,t){return console.log(e),Object(u.jsx)(G,{children:Object(u.jsx)(B,{messageName:["Chisha","Chun","Jo","Nafisa","Chisha","Chun","Jo","Nafisa","Chisha","Chun"][Math.floor(10*Math.random())],messageTime:"01/01/2021",messageContent:n.map((function(e){return e.text}))[t]},t)})}));return Object(u.jsxs)(m,{children:[Object(u.jsx)("div",{children:s}),Object(u.jsx)(l.b,{to:"/message1",children:"Read message"}),Object(u.jsx)(C,{children:Object(u.jsx)(S,{})})]})},L=n.p+"static/media/microphone.4799baf2.svg",A=n(14),F=n.n(A);var V,Y,$,q,H=function(){var e=Object(A.useSpeechRecognition)(),t=e.transcript,n=e.resetTranscript;return F.a.browserSupportsSpeechRecognition()?Object(u.jsxs)(m,{children:[Object(u.jsx)("p",{children:"Go back"}),Object(u.jsx)("p",{children:"To: "}),Object(u.jsxs)("div",{className:"spokenWords",children:[Object(u.jsx)("button",{onClick:F.a.startListening({continuous:!0}),children:"Start"}),Object(u.jsx)("button",{onClick:F.a.stopListening,children:"Stop"}),Object(u.jsx)("button",{onClick:n,children:"Reset"}),Object(u.jsx)("button",{id:"microphone",onClick:function(){},children:"Recording"}),Object(u.jsx)("img",{src:L,alt:"microphone",className:"icon"})]}),Object(u.jsx)("p",{children:"Press here to type your message"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)(l.b,{to:"/write",children:[Object(u.jsx)("img",{src:k,alt:"write",className:"icon"}),Object(u.jsx)("div",{children:"Write"})]}),Object(u.jsx)("button",{id:"send",children:"Send"}),Object(u.jsx)(S,{}),";"]}):Object(u.jsx)("h1",{children:"Your browser does not support Speech recognition. "})},K=n.p+"static/media/voice.dc35d400.svg",Q=(n.p,x.a.div(V||(V=Object(h.a)(["\n  width: 50vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n"])))),U=x.a.div(Y||(Y=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 1rem;\n"]))),X=x.a.div($||($=Object(h.a)(["\n  /* width: 100%; */\n  height: 100%;\n"]))),Z=x.a.div(q||(q=Object(h.a)(["\n  width: 100%;\n  flex-direction: row;\n  font-size: 1rem;\n"]))),_=n(19);var ee,te,ne,ce=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{children:Object(u.jsx)("a",{href:"/messages",className:"text-link",children:"Go back"})}),Object(u.jsxs)(m,{children:[Object(u.jsxs)(Q,{children:[Object(u.jsxs)(U,{children:[Object(u.jsx)("span",{children:"To:"}),Object(u.jsx)("span",{}),"Jo",Object(u.jsx)("img",{className:"avatar",src:R})]}),Object(u.jsx)(X,{children:Object(u.jsxs)("form",{onSubmit:function(e){console.log("handle submit in write");var t=n;e.preventDefault(),_("/api/write-message",{method:"POST",body:JSON.stringify({message:t}),headers:{"content-type":"application/json"}}).then((function(e){return e.json(),Object(u.jsx)(b.a,{to:"/message-sent"})})).catch((function(e){return console.error("Oops!",e)}))},onChange:function(e){return c(e.target.value)},children:[Object(u.jsx)("textarea",{rows:"15",cols:"50",id:"text",name:"text",placeholder:"Start typing..."}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{type:"submit",children:"Submit"})})]})}),Object(u.jsx)(Z,{children:Object(u.jsx)("div",{className:"msgButtons",children:Object(u.jsxs)("a",{href:"/speak",children:[Object(u.jsx)("img",{src:K}),Object(u.jsx)("span",{children:"Press here to speak your message"})]})})})]}),Object(u.jsx)(C,{children:Object(u.jsx)(S,{})})]})]})},se=n.p+"static/media/cancelcross.535d47a0.svg",ie=x.a.div(ee||(ee=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #ff5c5c;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  font-size: 2rem;\n  font-weight: 700;\n"]))),re=(x.a.div(te||(te=Object(h.a)(["\n  width: 25%;\n  height: 25vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),n(19));var ae=function(){var e=r.a.useState(10),t=Object(j.a)(e,2),n=t[0],c=t[1];return r.a.useEffect((function(){ne=setTimeout((function(){n>0?c(n-1):function(){var e="SOS: Please call me";re("/api/write-message",{method:"POST",body:JSON.stringify({message:e}),headers:{"content-type":"application/json"}}).then((function(e){e.json()})).catch((function(e){return console.error("Oops!",e)}))}()}),1e3)})),console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)(ie,{children:Object(u.jsxs)("div",{className:"sos-page",children:[Object(u.jsx)("p",{children:" Sending "}),Object(u.jsx)("img",{src:y}),Object(u.jsxs)("p",{children:[" ","in",Object(u.jsxs)("span",{children:[" ",n," "]}),"seconds"," "]}),Object(u.jsx)("img",{src:se,alt:"logo"}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{type:"submit",children:[" ",Object(u.jsx)(l.b,{to:"/welcome",className:"text-link",onClick:function(){n>0&&clearTimeout(ne)},children:"Cancel SOS Call"})]})})]})}),Object(u.jsx)(C,{children:Object(u.jsx)(S,{})})]})};var oe=function(){var e=Object(W.a)(),t=e.width,n=e.height;return Object(u.jsxs)(m,{children:[Object(u.jsx)(M.a,{width:t,height:n}),Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)(l.b,{to:"/welcome",children:"Message Sent "})," "]})]})};var je=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{path:"/",exact:!0,component:function(){return Object(u.jsx)(p,{})}}),Object(u.jsx)(b.b,{path:"/connect",exact:!0,component:function(){return Object(u.jsx)(g,{})}}),Object(u.jsx)(b.b,{path:"/connection-success",exact:!0,component:function(){return Object(u.jsx)(P,{})}}),Object(u.jsx)(b.b,{path:"/video",exact:!0,component:function(){return Object(u.jsx)(f,{})}}),Object(u.jsx)(b.b,{path:"/tutorial",exact:!0,component:function(){return Object(u.jsx)(v,{})}}),Object(u.jsx)(b.b,{path:"/welcome",exact:!0,component:function(){return Object(u.jsx)(T,{})}}),Object(u.jsx)(b.b,{path:"/messages",exact:!0,component:function(){return Object(u.jsx)(I,{})}}),Object(u.jsx)(b.b,{path:"/message1",exact:!0,component:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(b.b,{path:"/speak",exact:!0,component:function(){return Object(u.jsx)(H,{})}}),Object(u.jsx)(b.b,{path:"/success",exact:!0,component:function(){return Object(u.jsx)(P,{})}}),Object(u.jsx)(b.b,{path:"/message-sent",exact:!0,component:function(){return Object(u.jsx)(oe,{})}}),Object(u.jsx)(b.b,{path:"/write",exact:!0,component:function(){return Object(u.jsx)(ce,{messageContent:n,setMessageContent:c})}}),Object(u.jsx)(b.b,{path:"/emergency",exact:!0,component:function(){return Object(u.jsx)(ae,{})}})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(u.jsx)(je,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.487ecd70.chunk.js.map