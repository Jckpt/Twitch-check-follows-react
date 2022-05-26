(this["webpackJsonptwitch-check-follows-react"]=this["webpackJsonptwitch-check-follows-react"]||[]).push([[0],{40:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a,r,s,c=n(0),o=n.n(c),i=n(20),l=n.n(i),u=(n(45),n(23)),h=n(17),p=n(18),d=n(12),f=n(31),m=n(29),w=p.a.div(a||(a=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: ",";\n  background-color: #000;\n  display: ",";\n"])),(function(e){return e.isOpen?"0.4":"0"}),(function(e){return e.isOpen?"block":"none"})),k=p.a.ul(r||(r=Object(h.a)(["\n  flex-flow: column nowrap;\n  z-index: 20;\n  list-style: none;\n  background-color: #1e2021;\n  padding-left: 0;\n  position: fixed;\n  margin: 0;\n  transform: ",";\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 300px;\n  padding-top: 75px;\n  font-size: 25px;\n  transition: transform 0.3s ease-in-out;\n  li:hover {\n    background-color: #2f3333;\n    transition: all 0.25s ease;\n  }\n  li:active {\n    background-color: #404548;\n    transition: all 0.25s ease;\n  }\n  li {\n    padding: 2vh 0;\n    cursor: pointer;\n  }\n  #head {\n    font-size: 20px;\n    padding: 0.5vh 20px;\n    font-weight: bold;\n  }\n"])),(function(e){return e.isOpen?"translateX(0)":"translateX(100%)"})),g=function(e){var t=e.isOpen,n=e.handleOpen;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{isOpen:t,onClick:n}),o.a.createElement(k,{isOpen:t},o.a.createElement("div",{id:"head"},"Rewizja"),o.a.createElement(d.b,{to:"/czatu",draggable:"false"},o.a.createElement("li",null,o.a.createElement(f.a,{icon:m.a,style:{fontSize:"20px",paddingRight:"5px",borderRight:"2px solid #fff"}})," czatu (experimental)")),o.a.createElement(d.b,{to:"/uzytkownika"},o.a.createElement("li",null,o.a.createElement(f.a,{icon:m.b,style:{fontSize:"20px",paddingRight:"5px",borderRight:"2px solid #fff"}})," u\u017cytkownika"))))},b=p.a.div(s||(s=Object(h.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  right: 20px;\n  z-index: 21;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  padding-right: 5px;\n  cursor: pointer;\n  div {\n    width: 2rem;\n    height: 0.25rem;\n\n    background-color: #fff;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"translateX(100%)":"translateX(0)"}),(function(e){return e.isOpen?0:1}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),v=function(e){var t=e.isOpen,n=e.handleOpen;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{isOpen:t,onClick:n},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(g,{isOpen:t,handleOpen:n}))},E=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return o.a.createElement("header",null,o.a.createElement("h1",{id:"title"},"Rewizja ",e.desc),o.a.createElement(v,{isOpen:a,handleOpen:function(){return r(!a)}}))},C=n(14),x=n(3),j=n(4),O=n(6),y=n(5),S=n(22),T=n(9),I=n.n(T),U=n(10),z=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.start!==e.start&&this.props.changeInfo(this.props.start)}},{key:"render",value:function(){return o.a.createElement("div",{id:"informator"},this.props.info)}}]),n}(c.Component),D=n(13),_=(n(25),n(26),function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"group"},""===this.props.accessToken?o.a.createElement("input",{type:"text",name:this.props.name,value:this.props.value,onChange:this.props.handleChange}):o.a.createElement("input",{type:"text",name:this.props.name,value:this.props.value,onChange:this.props.handleChange,required:!0}),o.a.createElement("span",{className:"highlight"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("label",null,this.props.label))}}]),n}(c.Component)),F=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).URL="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=256lknox4x75bj30rwpctxna2ckbmn&redirect_uri=http://localhost:3000/callback/&scope=user%3Aread%3Afollows",e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{id:"inputs",method:"POST",onSubmit:this.props.handleSubmit},o.a.createElement(_,{name:"searchChat",accessToken:this.props.accessToken,value:this.props.searchChat,handleChange:this.props.handleChange,label:"Czat u\u017cytkownika"}),o.a.createElement(_,{name:"wantedChannel",accessToken:this.props.accessToken,value:this.props.wantedChannel,handleChange:this.props.handleChange,label:"Follow u u\u017cytkownika"}),o.a.createElement("div",{id:"container"},o.a.createElement(D.a,{content:"Najed\u017a na awatar \u017ceby pokaza\u0142a si\u0119 d\u0142ugo\u015b\u0107 follow'a",placement:"down",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},o.a.createElement("div",{id:"tooltip"},"?")),""===this.props.accessToken?o.a.createElement("input",{type:"submit",id:"button",onClick:function(t){t.preventDefault(),window.location.href=e.URL},value:"Zaloguj"}):o.a.createElement("input",{type:"submit",id:"button",onClick:this.props.handleSubmit,value:"Rewiduj"})))}}]),n}(c.Component),L=function(e){var t=e.start,n=e.end,a=o.a.useState(0),r=Object(u.a)(a,2),s=r[0],c=r[1];return o.a.useEffect((function(){c(t/n*100)}),[t,n]),o.a.createElement("div",{id:"outerLoadingBar"},o.a.createElement("div",{id:"loadingBar",style:{width:0===n?0:"".concat(s,"%")}}))},R=function(e){e=e.substring(0,10),e=new Date(e);var t=new Date,n=new Date(t-Date.parse(e))/864e5;return n=Math.trunc(n)},A=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).activate=Object(U.a)(I.a.mark((function e(){var t,n,r,s,c,o,i,l;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere-ascii.herokuapp.com/",t="https://tmi.twitch.tv/group/user/".concat(a.state.searchChat.toLowerCase(),"/chatters"),e.next=3,fetch("https://cors-anywhere-ascii.herokuapp.com/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,s=r.chatters,c=s.viewers,o=s.vips,i=s.moderators,l=[].concat(Object(C.a)(c),Object(C.a)(o),Object(C.a)(i)),a.setState({allChatters:l.length}),a.findIDs(l);case 11:case"end":return e.stop()}}),e)}))),a.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.findIDs=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r,s,c,o,i,l,u,h,p,d,f;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=18;break}for(s=(r+=100)-100;s<r;s++)s<t.length&&(n[s%100]=t[s]);return"https://api.twitch.tv/helix/users?login=",c=n.map((function(e){return"".concat(e,"&login=")})).join("").slice(0,-7),e.next=9,fetch("".concat("https://api.twitch.tv/helix/users?login=").concat(c),{headers:{Authorization:"Bearer ".concat(a.props.accessToken),"Client-ID":a.props.clientID}});case 9:return o=e.sent,e.next=12,o.json();case 12:for(i=e.sent,l=i.data,u=0;u<l.length;u++)h=l[u],p=h.id,d=h.profile_image_url,f=h.display_name,a.insertToState(p,"",d,f);n=[],e.next=2;break;case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.insertToState=function(){var e=Object(U.a)(I.a.mark((function e(t,n,r,s){var c,o,i,l,u,h,p;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/helix/users/follows?from_id=".concat(t,"&first=100&after=").concat(n),{headers:{Authorization:"Bearer ".concat(a.props.accessToken),"Client-ID":a.props.clientID}});case 3:return c=e.sent,e.next=6,c.json();case 6:if(o=e.sent,i=o.total,l=o.data,u=o.pagination,429!==o.status){e.next=11;break}throw{code:429,message:o};case 11:if(0!==i)for(h=0;h<l.length;h++)a.state.wantedChannel.toLowerCase()===l[h].to_name.toLowerCase()&&(p={nick:s,followLength:R(l[h].followed_at),avatar:r},a.props.getUsers(p),a.setState({foundChatters:a.state.foundChatters+1}),a.changeInfo(a.state.foundChatters));a.setState({checkedViewers:a.state.checkedViewers+1}),"undefined"!==typeof u.cursor&&a.insertToState(t,u.cursor,r,s),e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),e.next=20,a.delay(5e3);case 20:a.insertToState(t,n,r,s);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),a.changeInfo=function(e){a.setState({info:"Na czacie u\u017cytkownika ".concat(a.state.searchChat," jest ").concat(e," u\u017cytkownik\xf3w z follow'em u ").concat(a.state.wantedChannel)})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.searchChat&&""!==a.state.wantedChannel&&(a.setState({checkedViewers:0,allChatters:0,foundChatters:0,info:""}),a.props.clearUsers(),a.activate())},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.state={wantedChannel:"",searchChat:"",allChatters:0,checkedViewers:0,foundChatters:0,info:""},a}return Object(j.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"inputs"},o.a.createElement(F,{accessToken:this.props.accessToken,searchChat:this.state.searchChat,wantedChannel:this.state.wantedChannel,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),o.a.createElement(L,{end:this.state.allChatters,start:this.state.checkedViewers}),o.a.createElement(z,{changeInfo:this.changeInfo,info:this.state.info,start:this.state.foundChatters,searchChat:this.state.searchChat}))}}]),n}(c.Component),N=function(e){var t=e.users;return o.a.createElement("div",{id:"userList"},t.sort((function(e,t){return e.followLength>t.followLength?-1:1})).map((function(e,t){var n=e.avatar,a=e.nick,r=e.followLength;return o.a.createElement("div",{className:"userInfo",key:t+1},o.a.createElement("div",null,o.a.createElement("a",{href:"https://www.twitch.tv/".concat(a),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(D.a,{content:o.a.createElement("span",{style:{fontSize:"25px"}},"".concat(r," dni")),placement:"left",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},o.a.createElement("img",{className:"avatarImage",loading:"lazy",src:n,alt:""})))),o.a.createElement("p",{className:"nick"},a))})))},B=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).URL="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=256lknox4x75bj30rwpctxna2ckbmn&redirect_uri=http://localhost:3000/callback/&scope=user%3Aread%3Afollows",e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{id:"inputs",method:"POST",onSubmit:this.props.handleSubmit},o.a.createElement(_,{name:"searchUser",accessToken:this.props.accessToken,value:this.props.searchUser,handleChange:this.props.handleChange,label:"Nazwa u\u017cytkownika"}),o.a.createElement("div",{id:"container"},o.a.createElement(D.a,{content:"Najed\u017a na awatar \u017ceby pokaza\u0142a si\u0119 d\u0142ugo\u015b\u0107 follow'a",placement:"down",animation:"scale-subtle",arrow:!1,duration:200,delay:[75,0],distance:8},o.a.createElement("div",{id:"tooltip"},"?")),""===this.props.accessToken?o.a.createElement("input",{type:"submit",id:"button",onClick:function(t){t.preventDefault(),window.location.href=e.URL},value:"Zaloguj"}):o.a.createElement("input",{type:"submit",id:"button",onClick:this.props.handleSubmit,value:"Rewiduj"})))}}]),n}(c.Component),V=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).findID=Object(U.a)(I.a.mark((function e(){var t,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.twitch.tv/helix/users?login=".concat(a.state.searchUser),{headers:{Authorization:"Bearer ".concat(a.props.accessToken),"Client-ID":a.props.clientID}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.data[0].id,a.insertToState(r,"");case 8:case"end":return e.stop()}}),e)}))),a.insertToState=function(){var e=Object(U.a)(I.a.mark((function e(t,n){var r,s,c,o,i,l,u,h,p,d,f,m;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.twitch.tv/helix/users/follows?from_id=".concat(t,"&first=100&after=").concat(n),{headers:{Authorization:"Bearer ".concat(a.props.accessToken),"Client-ID":a.props.clientID}});case 2:return r=e.sent,e.next=5,r.json();case 5:return s=e.sent,c=s.total,o=s.data,i=s.pagination,"https://api.twitch.tv/helix/users?login=",l=o.map((function(e){return"".concat(e.to_login,"&login=")})).join("").slice(0,-7),e.next=11,fetch("".concat("https://api.twitch.tv/helix/users?login=").concat(l),{headers:{Authorization:"Bearer ".concat(a.props.accessToken),"Client-ID":a.props.clientID}});case 11:return r=e.sent,e.next=14,r.json();case 14:u=e.sent,h=u.data,a.setState({allFollows:c}),0===c&&a.setState({info:"".concat(a.state.searchUser," nie posiada \u017cadnego follow'a")}),p=0;case 19:if(!(p<o.length)){e.next=31;break}d=0;case 21:if(!(d<h.length)){e.next=28;break}if(h[d].login!==o[p].to_login){e.next=25;break}return o[p].profile_image_url=h[d].profile_image_url,e.abrupt("break",28);case 25:d++,e.next=21;break;case 28:p++,e.next=19;break;case 31:for(f=0;f<o.length;f++)a.setState({checkedFollows:a.state.checkedFollows+1}),m={nick:o[f].to_name,followLength:R(o[f].followed_at),avatar:o[f].profile_image_url},a.props.getUsers(m);"undefined"!==typeof i.cursor&&a.insertToState(t,i.cursor);case 33:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.changeInfo=function(){a.setState({info:"".concat(a.state.searchUser," ma ").concat(a.state.allFollows," follow'\xf3w")})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.searchUser&&(a.setState({allFollows:0,checkedFollows:0,info:""}),a.props.clearUsers(),a.findID())},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r.toLowerCase()))},a.state={searchUser:"",allFollows:0,checkedFollows:0},a}return Object(j.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"inputs"},o.a.createElement(B,{accessToken:this.props.accessToken,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),o.a.createElement(L,{start:this.state.checkedFollows,end:this.state.allFollows}),o.a.createElement(z,{changeInfo:this.changeInfo,info:this.state.info,start:this.state.checkedFollows,searchChat:this.state.searchChat}))}}]),n}(c.Component),P=n(2),X=n(30),J=n.n(X),W=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).getUsers=function(e){a.setState({users:[].concat(Object(C.a)(a.state.users),[e])})},a.clearUsers=function(){a.setState({users:[]})},a.getInitialStateFromCookie=function(){var e=new URLSearchParams("?".concat(window.location.hash.slice(1)));if(e.has("access_token")){var t=e.get("access_token");return J.a.set("access_token",t),t}return J.a.get("access_token")||""},a.state={users:[],accessToken:a.getInitialStateFromCookie(),clientID:"256lknox4x75bj30rwpctxna2ckbmn"},a}return Object(j.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.clearUsers()}},{key:"render",value:function(){var e=this;return o.a.createElement("main",null,o.a.createElement(P.d,null,o.a.createElement(P.b,{path:"/",exact:!0,render:function(){return o.a.createElement(V,{clientID:e.state.clientID,accessToken:e.state.accessToken,users:e.state.users,getUsers:e.getUsers,clearUsers:e.clearUsers})}}),o.a.createElement(P.b,{path:"/czatu",render:function(){return o.a.createElement(A,{clientID:e.state.clientID,accessToken:e.state.accessToken,getUsers:e.getUsers,clearUsers:e.clearUsers})}}),o.a.createElement(P.b,{path:"/uzytkownika",render:function(){return o.a.createElement(V,{clientID:e.state.clientID,accessToken:e.state.accessToken,getUsers:e.getUsers,clearUsers:e.clearUsers})}}),o.a.createElement(P.b,{path:"/callback"},o.a.createElement(P.a,{to:"/"}))),o.a.createElement(N,{users:this.state.users}))}}]),n}(c.Component),Z=Object(P.g)(W);var q=function(){return o.a.createElement("div",{className:"content"},o.a.createElement(d.a,null,o.a.createElement(P.d,null,o.a.createElement(P.b,{path:"/",exact:!0,render:function(){return o.a.createElement(E,{desc:"u\u017cytkownika"})}}),o.a.createElement(P.b,{path:"/czatu",render:function(){return o.a.createElement(E,{desc:"czatu"})}}),o.a.createElement(P.b,{path:"/uzytkownika",render:function(){return o.a.createElement(E,{desc:"u\u017cytkownika"})}})),o.a.createElement(Z,null)))},M=function(){return o.a.createElement("footer",null,o.a.createElement("a",{href:"https://github.com/Jckpt/Twitch-check-follows-react",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("p",{id:"sourceCode"},"Source Code")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render([o.a.createElement(q,{key:"1"}),o.a.createElement(M,{key:"2"})],document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.21477c8d.chunk.js.map