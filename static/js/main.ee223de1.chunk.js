(this["webpackJsonptwitch-check-follows-react"]=this["webpackJsonptwitch-check-follows-react"]||[]).push([[0],{42:function(e,t,n){e.exports=n(55)},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),o=(n(47),n(12)),i=n(21),l=n(22),u=n(15),h=n(31),d=n(35);function p(){var e=Object(i.a)(["\n  flex-flow: column nowrap;\n  z-index: 20;\n  list-style: none;\n  background-color: #1e2021;\n  padding-left: 0;\n  position: fixed;\n  margin: 0;\n  transform: ",";\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 300px;\n  padding-top: 75px;\n  font-size: 25px;\n  transition: transform 0.3s ease-in-out;\n  li:hover {\n    background-color: #2f3333;\n    transition: all 0.25s ease;\n  }\n  li:active {\n    background-color: #404548;\n    transition: all 0.25s ease;\n  }\n  li {\n    padding: 2vh 0;\n    cursor: pointer;\n  }\n  #head {\n    font-size: 20px;\n    padding: 0.5vh 20px;\n    font-weight: bold;\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: ",";\n  background-color: #000;\n  display: ",";\n"]);return f=function(){return e},e}var m=l.a.div(f(),(function(e){return e.isOpen?"0.4":"0"}),(function(e){return e.isOpen?"block":"none"})),w=l.a.ul(p(),(function(e){return e.isOpen?"translateX(0)":"translateX(100%)"})),v=function(e){var t=e.isOpen,n=e.handleOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{isOpen:t,onClick:n}),r.a.createElement(w,{isOpen:t},r.a.createElement("div",{id:"head"},"Rewizja"),r.a.createElement(u.b,{to:"/czatu",draggable:"false"},r.a.createElement("li",null,r.a.createElement(h.a,{icon:d.a,style:{fontSize:"20px",paddingRight:"5px",borderRight:"2px solid #fff"}})," czatu")),r.a.createElement(u.b,{to:"/uzytkownika"},r.a.createElement("li",null,r.a.createElement(h.a,{icon:d.b,style:{fontSize:"20px",paddingRight:"5px",borderRight:"2px solid #fff"}})," u\u017cytkownika"))))};function b(){var e=Object(i.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  right: 20px;\n  z-index: 21;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  padding-right: 5px;\n  cursor: pointer;\n  div {\n    width: 2rem;\n    height: 0.25rem;\n\n    background-color: #fff;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return b=function(){return e},e}var g=l.a.div(b(),(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"translateX(100%)":"translateX(0)"}),(function(e){return e.isOpen?0:1}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),k=function(e){var t=e.isOpen,n=e.handleOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{isOpen:t,onClick:n},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(v,{isOpen:t,handleOpen:n}))},E=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1];return r.a.createElement("header",null,r.a.createElement("h1",{id:"title"},"Rewizja ",e.desc),r.a.createElement(k,{isOpen:c,handleOpen:function(){return s(!c)}}))},j=n(17),O=n(4),C=n(5),y=n(7),x=n(6),S=n(26),U=n(10),z=n.n(U),I=n(14),D=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.start!==e.start&&this.props.changeInfo(this.props.start)}},{key:"render",value:function(){return r.a.createElement("div",{id:"informator"},this.props.info)}}]),n}(a.Component),F=n(16),N=(n(28),n(29),function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:this.props.name,value:this.props.value,onChange:this.props.handleChange,required:!0}),r.a.createElement("span",{className:"highlight"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,this.props.label))}}]),n}(a.Component)),q=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{id:"inputs",method:"POST",onSubmit:this.props.handleSubmit},r.a.createElement(N,{name:"searchChat",value:this.props.searchChat,handleChange:this.props.handleChange,label:"Czat u\u017cytkownika"}),r.a.createElement(N,{name:"wantedChannel",value:this.props.wantedChannel,handleChange:this.props.handleChange,label:"Follow u u\u017cytkownika"}),r.a.createElement("div",{id:"container"},r.a.createElement(F.a,{content:"Najed\u017a na awatar \u017ceby pokaza\u0142a si\u0119 d\u0142ugo\u015b\u0107 follow'a",placement:"down",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},r.a.createElement("div",{id:"tooltip"},"?")),r.a.createElement("input",{type:"submit",id:"button",onClick:this.props.handleSubmit,value:"Rewiduj"})))}}]),n}(a.Component),L=function(e){var t=e.start,n=e.end,a=r.a.useState(0),c=Object(o.a)(a,2),s=c[0],i=c[1];return r.a.useEffect((function(){i(t/n*100)}),[t,n]),r.a.createElement("div",{id:"outerLoadingBar"},r.a.createElement("div",{id:"loadingBar",style:{width:0===n?0:"".concat(s,"%")}}))},T=function(e){e=e.substring(0,10),e=new Date(e);var t=new Date,n=new Date(t-Date.parse(e))/864e5;return n=Math.trunc(n)},V=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).activate=Object(I.a)(z.a.mark((function e(){var t,n,r,c,s,o,i,l,u;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere-ascii.herokuapp.com/",t="https://tmi.twitch.tv/group/user/".concat(a.state.searchChat,"/chatters"),e.next=3,fetch("https://cors-anywhere-ascii.herokuapp.com/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:for(r=e.sent,c=r.chatters,s=c.viewers,o=c.vips,i=c.moderators,l=[].concat(Object(j.a)(s),Object(j.a)(o),Object(j.a)(i)),a.setState({allChatters:l.length}),u=0;u<l.length;u++)a.findID(l[u].toLowerCase());case 11:case"end":return e.stop()}}),e)}))),a.findID=function(){var e=Object(I.a)(z.a.mark((function e(t){var n,r,c,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.next=3,fetch("https://api.twitch.tv/kraken/users?login=".concat(t),{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"k1c1q8lb5qd9oxn9cnfjnh2manhuo0"}});case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,s=Object(o.a)(c.users,1),i=s[0],a.insertToState(i._id,t,i.logo,n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.insertToState=function(){var e=Object(I.a)(z.a.mark((function e(t,n,r,c){var s,o,i,l,u,h,d,p;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,o=a.state.wantedChannel.toLowerCase(),r=r.replace(/300x300/,"70x70"),e.next=5,fetch("https://api.twitch.tv/kraken/users/".concat(t,"/follows/channels?limit=100&offset=").concat(100*c,"&sortby=last_broadcast"),{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"k1c1q8lb5qd9oxn9cnfjnh2manhuo0"}});case 5:return i=e.sent,e.next=8,i.json();case 8:l=e.sent,0===(u=l.follows).length&&a.setState({checkedViewers:a.state.checkedViewers+1}),h=0;case 12:if(!(h<u.length)){e.next=26;break}if(u[h].channel.name!==o){e.next=22;break}return s=!0,a.setState({checkedViewers:a.state.checkedViewers+1,foundChatters:a.state.foundChatters+1}),d=T(u[h].created_at),p={nick:n,followLength:d,avatar:r},a.props.getUsers(p),e.abrupt("break",26);case 22:u.length-1===h&&u.length%100!==0&&a.setState({checkedViewers:a.state.checkedViewers+1});case 23:h++,e.next=12;break;case 26:100!==u.length||s||(c++,a.insertToState(t,n,r,c));case 27:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),a.changeInfo=function(e){a.setState({info:"Na czacie u\u017cytkownika ".concat(a.state.searchChat," jest ").concat(e," u\u017cytkownik\xf3w z follow'em u ").concat(a.state.wantedChannel)})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.searchChat&&""!==a.state.wantedChannel&&(a.setState({checkedViewers:0,allChatters:0,foundChatters:0,info:""}),a.props.clearUsers(),console.log(a.state),a.activate())},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r.toLowerCase()))},a.state={wantedChannel:"",searchChat:"",allChatters:0,checkedViewers:0,foundChatters:0,info:""},a}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"inputs"},r.a.createElement(q,{searchChat:this.state.searchChat,wantedChannel:this.state.wantedChannel,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),r.a.createElement(L,{end:this.state.allChatters,start:this.state.checkedViewers}),r.a.createElement(D,{changeInfo:this.changeInfo,info:this.state.info,start:this.state.foundChatters,searchChat:this.state.searchChat}))}}]),n}(a.Component),R=function(e){var t=e.users;return r.a.createElement("div",{id:"userList"},t.map((function(e,t){var n=e.avatar,a=e.nick,c=e.followLength;return r.a.createElement("div",{className:"userInfo",key:t+1},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.twitch.tv/".concat(a),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(F.a,{content:r.a.createElement("span",{style:{fontSize:"25px"}},"".concat(c," dni")),placement:"left",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},r.a.createElement("img",{className:"avatarImage",loading:"lazy",src:n,alt:""})))),r.a.createElement("p",{className:"nick"},a))})))},_=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{id:"inputs",method:"POST",onSubmit:this.props.handleSubmit},r.a.createElement(N,{name:"searchUser",value:this.props.searchUser,handleChange:this.props.handleChange,label:"Nazwa u\u017cytkownika"}),r.a.createElement("div",{id:"container"},r.a.createElement(F.a,{content:"Najed\u017a na awatar \u017ceby pokaza\u0142a si\u0119 d\u0142ugo\u015b\u0107 follow'a",placement:"down",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},r.a.createElement("div",{id:"tooltip"},"?")),r.a.createElement("input",{type:"submit",id:"button",onClick:this.props.handleSubmit,value:"Rewiduj"})))}}]),n}(a.Component),A=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).findID=Object(I.a)(z.a.mark((function e(){var t,n,r,c,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.next=3,fetch("https://api.twitch.tv/kraken/users?login=".concat(a.state.searchUser),{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"k1c1q8lb5qd9oxn9cnfjnh2manhuo0"}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,c=Object(o.a)(r.users,1),s=c[0],a.insertToState(s._id,t);case 9:case"end":return e.stop()}}),e)}))),a.insertToState=function(){var e=Object(I.a)(z.a.mark((function e(t,n){var r,c,s,o,i,l,u;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 100,e.next=3,fetch("https://api.twitch.tv/kraken/users/".concat(t,"/follows/channels?limit=100&offset=").concat(100*n,"&sortby=last_broadcast"),{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"k1c1q8lb5qd9oxn9cnfjnh2manhuo0"}});case 3:return r=e.sent,e.next=6,r.json();case 6:for(c=e.sent,s=c.follows,a.setState({allFollows:a.state.allFollows+s.length}),0===s.length&&a.setState({info:"".concat(a.state.searchUser," nie posiada \u017cadnego follow'a")}),o=0;o<s.length;o++)i=s[o].channel.logo.replace(/300x300/,"70x70"),a.setState({checkedFollows:a.state.checkedFollows+1}),l=T(s[o].created_at),u={nick:s[o].channel.name,followLength:l,avatar:i},a.props.getUsers(u);s.length%100!==0&&s.length%99!==0||(n++,a.insertToState(t,n));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.changeInfo=function(){a.setState({info:"".concat(a.state.searchUser," ma ").concat(a.state.allFollows," follow'\xf3w")})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.searchUser&&(a.setState({allFollows:0,checkedFollows:0,info:""}),a.props.clearUsers(),a.findID())},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r.toLowerCase()))},a.state={searchUser:"",allFollows:0,checkedFollows:0},a}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"inputs"},r.a.createElement(_,{handleChange:this.handleChange,handleSubmit:this.handleSubmit}),r.a.createElement(L,{start:this.state.checkedFollows,end:this.state.allFollows}),r.a.createElement(D,{changeInfo:this.changeInfo,info:this.state.info,start:this.state.checkedFollows,searchChat:this.state.searchChat}))}}]),n}(a.Component),B=n(2),X=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).getUsers=function(e){a.setState({users:[].concat(Object(j.a)(a.state.users),[e])})},a.clearUsers=function(){a.setState({users:[]})},a.state={users:[]},a}return Object(C.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.clearUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,render:function(){return r.a.createElement(A,{users:e.state.users,getUsers:e.getUsers,clearUsers:e.clearUsers})}}),r.a.createElement(B.a,{path:"/czatu",render:function(){return r.a.createElement(V,{getUsers:e.getUsers,clearUsers:e.clearUsers})}}),r.a.createElement(B.a,{path:"/uzytkownika",render:function(){return r.a.createElement(A,{getUsers:e.getUsers,clearUsers:e.clearUsers})}})),r.a.createElement(R,{users:this.state.users}))}}]),n}(a.Component),J=Object(B.f)(X);var P=function(){return r.a.createElement("div",{className:"content"},r.a.createElement(u.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,render:function(){return r.a.createElement(E,{desc:"u\u017cytkownika"})}}),r.a.createElement(B.a,{path:"/czatu",render:function(){return r.a.createElement(E,{desc:"czatu"})}}),r.a.createElement(B.a,{path:"/uzytkownika",render:function(){return r.a.createElement(E,{desc:"u\u017cytkownika"})}})),r.a.createElement(J,null)))},W=function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/Jckpt/Twitch-check-follows-react",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{id:"sourceCode"},"source code")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render([r.a.createElement(P,{key:"1"}),r.a.createElement(W,{key:"2"})],document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ee223de1.chunk.js.map