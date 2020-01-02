(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){e.exports=a.p+"static/media/icon.25f066e3.png"},182:function(e,t,a){e.exports=a(353)},187:function(e,t,a){},260:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=(a(187),a(23)),i=a(51),s=a(354),m=a(359),u=s.a.Header,p={width:120,height:31,background:"rgba(255, 255, 255, 0.2)",margin:"16px 24px 16px 0",float:"left"},d=function(){return r.a.createElement(u,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo",style:p}),r.a.createElement(m.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["home"],style:{lineHeight:"64px"}},r.a.createElement(m.a.Item,{key:"home"},r.a.createElement(c.c,{exact:!0,to:"/"},"Home")),r.a.createElement(m.a.Item,{key:"todos"},r.a.createElement(c.c,{to:"/todos"},"ToDo")),r.a.createElement(m.a.Item,{key:"about"},r.a.createElement(c.c,{to:"/about"},"About")),r.a.createElement(m.a.Item,{key:"topics"},r.a.createElement(c.c,{to:"/topics"},"Topics")),r.a.createElement(m.a.Item,{key:"login"},r.a.createElement(c.c,{to:"/login"},"Login"))))},h=a(52),g=a.n(h),f=a(74),E=a(177),v=a(37),b=a(38),y=a(40),O=a(39),S=a(41),w=a(98),k=a.n(w),x=a(356),I=a(358),j=a(361),C=a(360),N=a(50),P=(a(260),x.a.create({name:"form_in_modal"})(function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onCreate,o=e.form.getFieldDecorator;return r.a.createElement(I.a,{visible:t,title:"Create a new collection",okText:"Create",onCancel:a,onOk:n},r.a.createElement(x.a,{layout:"vertical"},r.a.createElement(x.a.Item,{label:"Title"},o("title",{rules:[{required:!0,message:"Please input the title of collection!"}]})(r.a.createElement(j.a,null))),r.a.createElement(x.a.Item,{label:"Description"},o("description")(r.a.createElement(j.a,{type:"textarea"}))),r.a.createElement(x.a.Item,{style:R},o("modifier",{initialValue:"public"})(r.a.createElement(C.a.Group,null,r.a.createElement(C.a,{value:"public"},"Public"),r.a.createElement(C.a,{value:"private"},"Private"))))))}}]),t}(r.a.Component))),L=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields(function(t,n){if(!t){console.log("Received values of form: ",n);var r={title:n.title,body:n.description};console.log("submit: ",r),a.props.addHandler(r),e.resetFields(),a.setState({visible:!1})}})},a.saveFormRef=function(e){a.formRef=e},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{block:!0,type:"primary",onClick:this.showModal},"New Collection"),r.a.createElement(P,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}))}}]),t}(r.a.Component),R={marginBottom:0},A=a(174),D=a.n(A),J=a(357),M=a(355),T=J.a.Title,H=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(O.a)(t).call(this,e))).deleteHandler=function(e){var t=a.state.posts.filter(function(t){return t.id!==e});a.setState({posts:t}),localStorage.setItem("posts",JSON.stringify(t))},a.addHandler=function(e){e.id=Math.floor(10*Math.random()),e.userId=e.id;var t=[].concat(Object(E.a)(a.state.posts),[e]);a.setState({posts:t}),localStorage.setItem("posts",JSON.stringify(t))},a.getPosts=function(e){var t=e.id,n=void 0===t?null:t,r=e.userId,o=void 0===r?null:r,l=e.limited,c=void 0===l?10:l;a.setState({iconLoading:!0});var i="https://jsonplaceholder.typicode.com/posts";return n?i+="/"+n:o&&(i+="?userId="+Math.floor(o)),k.a.get(i).then(function(e){return console.log("getPosts():",e.data),console.log("limited: "+c),n?e.data:e.data.slice(0,c)})},a.clearLocalStorage=function(){localStorage.removeItem("posts"),alert('localStorage.removeItem("posts")')},a.reLoadJSON=Object(f.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(10*Math.random()),e.next=3,a.getPosts({userId:t,limited:7});case 3:n=e.sent,a.setState({posts:n,iconLoading:!1}),localStorage.setItem("posts",JSON.stringify(n));case 6:case"end":return e.stop()}},e)})),a.state={posts:[],iconLoading:!1},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("posts")){e.next=4;break}this.setState({posts:JSON.parse(localStorage.getItem("posts"))}),e.next=9;break;case 4:return e.next=6,this.getPosts({userId:3,limited:3});case 6:t=e.sent,this.setState({posts:t,iconLoading:!1}),localStorage.setItem("posts",JSON.stringify(t));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.posts,a=t.length?t.map(function(t){return r.a.createElement(M.a,{title:t.title,key:t.id,bordered:!1,style:{margin:"10px 0px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"icon-container"},r.a.createElement("img",{className:"icon-image",src:D.a,alt:"icon"})),r.a.createElement("p",null,"userId: ",t.userId),r.a.createElement("p",null,t.body),r.a.createElement(c.b,{to:"/todos/"+t.id},r.a.createElement(N.a,{type:"primary"},"Detail: ",t.id)),r.a.createElement(N.a,{type:"danger",icon:"close",onClick:function(){return e.deleteHandler(t.id)}},"Delete")))}):r.a.createElement(M.a,{bordered:!1,style:{margin:"10px 0px"}},r.a.createElement(T,{level:4,style:{textAlign:"center"}},"No Posts Yet")),n=JSON.parse(localStorage.getItem("posts")),o=localStorage.getItem("posts")&&n.length?r.a.createElement("p",{style:{textAlign:"center"}},n.length," Data Store in localStorage."):r.a.createElement("p",{style:{textAlign:"center",cursor:"pointer"}},"No Data Store in localStorage.",r.a.createElement(N.a,{size:"small",style:{margin:"0 4px"},shape:"round",onClick:function(){e.clearLocalStorage()}},"Remove it?")),l=this.state.posts.length?null:r.a.createElement("div",{style:{margin:10,textAlign:"center"}},r.a.createElement(N.a,{loading:this.state.iconLoading,shape:"round",onClick:function(){e.reLoadJSON()}},"reLoad JSON"));return r.a.createElement("div",{className:"container"},o,l,r.a.createElement(L,{addHandler:this.addHandler}),a)}}]),t}(n.Component),F=function(e){var t=["red","pink","orange","blue","green","yellow"],a={backgroundColor:t[Math.floor(Math.random()*(t.length-1))],color:"#fff"};return function(t){return r.a.createElement("div",{style:a},r.a.createElement("p",{style:{padding:4}},"WrappedComponent"),r.a.createElement(e,t))}},z=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,post:null},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"getPosts",value:function(e){return k.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then(function(e){return e.data})}},{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark(function e(){var t,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,this.getPosts(t);case 3:a=e.sent,this.setState({id:t,post:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.post?r.a.createElement("div",null,r.a.createElement("p",null,"userId: ",this.state.post.userId),r.a.createElement("h3",null,this.state.post.title),r.a.createElement("p",null,this.state.post.body)):r.a.createElement("div",null,r.a.createElement("h3",null,"Loading Post..."));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Todo: ",this.state.id),e)}}]),t}(n.Component),q=a(10),B=a(362),W=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{style:{paddingTop:40,width:300,textAlign:"center",margin:"auto"}},r.a.createElement("h2",null,"Login"),r.a.createElement(x.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(x.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(q.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",autoComplete:"false"}))),r.a.createElement(x.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(q.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",autoComplete:"false"}))),r.a.createElement(x.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(B.a,null,"Remember me")),r.a.createElement(c.b,{to:"/forgotpassword",className:"login-form-forgot"},"Forgot password"),r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{marginLeft:8,marginRight:8}},"Log in"),"Or",r.a.createElement(c.b,{to:"/register",style:{marginLeft:8,marginRight:8}},"Register now!"))))}}]),t}(r.a.Component),_=x.a.create({name:"normal_login"})(W),V=s.a.Content,G=s.a.Footer,K=function(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Home"))},U=function(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"About"))},Y=function(e){var t=e.match;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",{className:"nav-bar"},r.a.createElement("li",null,r.a.createElement(c.c,{to:"".concat(t.url,"/components/en"),activeClassName:"active"},"Components")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"".concat(t.url,"/props-v-state/zht"),activeClassName:"active"},"Props v. State"))),r.a.createElement(i.a,{path:"".concat(t.path,"/:id/:lang/"),component:$}),r.a.createElement(i.a,{exact:!0,path:t.path,render:function(){return r.a.createElement("h3",null,"Please select a topic.")}}))},$=function(e){var t=e.match;return console.log(t),r.a.createElement("div",null,r.a.createElement("h3",null,"Topic"),r.a.createElement("p",null,'match.url: "',t.url,'"'),r.a.createElement("p",null,'match.params.id: "',t.params.id,'"'),r.a.createElement("p",null,'match.params.lang: "',t.params.lang,'"'))},Q=function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,{className:"layout"},r.a.createElement(d,null),r.a.createElement(V,{style:{padding:"0 50px",marginTop:64}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:F(K)}),r.a.createElement(i.a,{path:"/about",component:U}),r.a.createElement(i.a,{path:"/todos/:id",component:z}),r.a.createElement(i.a,{path:"/todos",component:H}),r.a.createElement(i.a,{path:"/topics",component:Y}),r.a.createElement(i.a,{path:"/login",component:_})))),r.a.createElement(G,{style:{textAlign:"center"}},r.a.createElement("a",{href:"https://mac-sin.github.io/my-app/",target:"noopener",style:{color:"black",padding:8}},"https://mac-sin.github.io/my-app/")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[182,1,2]]]);
//# sourceMappingURL=main.1037b5c2.chunk.js.map