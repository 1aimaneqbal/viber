(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{76:function(e,t){},78:function(e,t){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(40),i=c.n(l),s=c(10),r=c(41),o=c(45),j=c(28),u=c.n(j),d=c(0),b=Object(n.createContext)(),O=Object(o.a)("https://viber-video-backend.herokuapp.com/"),m=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(s.a)(c,2),l=a[0],i=a[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),j=o[0],m=o[1],f=Object(n.useState)(),h=Object(s.a)(f,2),v=h[0],x=h[1],p=Object(n.useState)(""),C=Object(s.a)(p,2),g=C[0],N=C[1],y=Object(n.useState)({}),k=Object(s.a)(y,2),w=k[0],S=k[1],D=Object(n.useState)(""),A=Object(s.a)(D,2),V=A[0],E=A[1],I=Object(n.useRef)(),U=Object(n.useRef)(),R=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),I.current.srcObject=e})),O.on("me",(function(e){return E(e)})),O.on("callUser",(function(e){var t=e.from,c=e.name,n=e.signal;S({isReceivingCall:!0,from:t,name:c,signal:n})}))}),[]);return Object(d.jsx)(b.Provider,{value:{call:w,callAccepted:l,myVideo:I,userVideo:U,stream:v,name:g,setName:N,callEnded:j,me:V,callUser:function(e){var t=new u.a({initiator:!0,trickle:!1,stream:v});t.on("signal",(function(t){O.emit("callUser",{userToCall:e,signalData:t,from:V,name:g})})),t.on("stream",(function(e){U.current.srcObject=e})),O.on("callAccepted",(function(e){i(!0),t.signal(e)})),R.current=t},leaveCall:function(){m(!0),R.current.destroy(),window.location.reload()},answerCall:function(){i(!0);var e=new u.a({initiator:!1,trickle:!1,stream:v});e.on("signal",(function(e){O.emit("answerCall",{signal:e,to:w.from})})),e.on("stream",(function(e){U.current.srcObject=e})),e.signal(w.signal),R.current=e}},children:t})},f=function(e){var t=e.children,c=e.ham,a=Object(n.useContext)(b),l=a.me,i=a.callAccepted,o=a.name,j=a.setName,u=a.callEnded,O=a.leaveCall,m=a.callUser,f=Object(n.useState)(""),h=Object(s.a)(f,2),v=h[0],x=h[1];return Object(d.jsx)("div",{className:"controlbar ".concat(c?"openham":""),children:Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:"My Information"}),Object(d.jsx)("input",{type:"text",placeholder:"Name",value:o,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)(r.CopyToClipboard,{text:l,children:Object(d.jsx)("button",{onClick:function(e){return e.preventDefault()},children:"Generate & Copy ID"})})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:"Make a call"}),Object(d.jsx)("input",{type:"text",placeholder:"ID to call",value:v,onChange:function(e){return x(e.target.value)}}),i&&!u?Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),O()},className:"hangup",children:"Hang Up"}):Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),""===o||"Name"===o?alert("Enter name before calling."):m(v)},className:"call",children:"Call"})]}),t]})})},h=function(e){var t=e.ham,c=e.setHam;return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsxs)("div",{className:"hamburger",onClick:function(){c(!t)},children:[Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("div",{className:"line"})]}),Object(d.jsx)("h3",{children:"Viber - Video Chat App"})]})},v=function(){var e=Object(n.useContext)(b),t=e.answerCall,c=e.call,a=e.callAccepted;return Object(d.jsx)(d.Fragment,{children:c.isReceivingCall&&!a&&Object(d.jsxs)("div",{className:"notif",children:[Object(d.jsxs)("p",{children:[c.name," is calling:"]}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),t()},children:"Answer"})]})})},x=function(){var e=Object(n.useContext)(b),t=e.name,c=e.callAccepted,a=e.myVideo,l=e.userVideo,i=e.callEnded,s=e.stream;return Object(d.jsxs)("div",{className:"videoContainer",children:[s&&Object(d.jsxs)("div",{className:"video",children:[Object(d.jsx)("h3",{children:t||"Name"}),Object(d.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0})]}),c&&!i&&Object(d.jsxs)("div",{className:"video",children:[Object(d.jsx)("h3",{children:t||"Name"}),Object(d.jsx)("video",{playsInline:!0,ref:l,autoPlay:!0})]})]})},p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{ham:c,setHam:a}),Object(d.jsx)(x,{}),Object(d.jsx)(f,{ham:c,children:Object(d.jsx)(v,{})})]})};c(87);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{children:Object(d.jsx)(p,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.3992e72d.chunk.js.map