(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,n){e.exports=n(90)},54:function(e,t,n){},56:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),s=(n(54),n(1)),i=n.n(s),l=n(10),u=n(11),m=n(13),p=n(12),f=n(14),d=n(20);n(56);function h(e){var t=e.moves,n=e.title,a=e.showMoveBy,c=e.currentRate;return r.a.createElement("section",{className:"move-list-container"},r.a.createElement("h1",null,n),r.a.createElement("ul",null,t.map((function(e){var t=function(e){var t=new Date(e),n="0"+t.getSeconds(),a="0"+t.getMinutes(),r=t.getHours();return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()+" | "+r+":"+a.substr(-2)+":"+n.substr(-2)}(e.at),n=new Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(1/c*e.amount);return r.a.createElement("li",{key:e._id,className:"move-preview flex column"},a&&r.a.createElement("span",null,"To: ",e.to),r.a.createElement("span",null,"Coins: ",e.amount," | USD: ",n),r.a.createElement("span",null,"When: ",t))}))))}var v=n(15);var g={load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},store:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}};var b={getUser:function(){return g.load("loggedUser")},addNewUser:function(e){var t=g.load("users");t&&0!==t.length||(t=[]),t.unshift(e),g.store("users",t),g.store("loggedUser",e)},login:function(e){var t=g.load("users");t||(t=[{name:"muki",coins:100,moves:[]}]);var n=t.find((function(t){return t.name===e}));if(n)return g.store("loggedUser",n),n},logout:function(){g.store("loggedUser",null)},addMove:function(e,t){var n=g.load("loggedUser"),a={toId:e._id,to:e.name,at:Date.now(),amount:t};return n.moves.unshift(a),n.coins-=t,g.store("loggedUser",n),n}},E=function(e){return{type:"SET_USER",user:e}},y=function(){return function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=b.getUser(),e(E(t));case 2:case"end":return n.stop()}}))}},C=function(e){return{type:"UPDATE_USER",user:e}},w=n(32),k=n.n(w);var x={getRate:function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e=g.load("coinRate"))){a.next=4;break}if(!(Date.now()-e.timestamp<12e4)){a.next=4;break}return a.abrupt("return",Promise.resolve(e.rate));case 4:return a.next=6,i.a.awrap(k.a.get("https://blockchain.info/tobtc?currency=USD&value=1"));case 6:return t=a.sent,n={rate:t.data,timestamp:Date.now()},g.store("coinRate",n),a.abrupt("return",Promise.resolve(n.rate));case 10:case"end":return a.stop()}}))},getAveragePrice:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(k.a.get("https://api.blockchain.info/charts/market-price?timespan=60days&format=json&cors=true"));case 2:return e=t.sent,t.abrupt("return",Promise.resolve(e.data.values));case 4:case"end":return t.stop()}}))}},O=(n(77),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,marketValue:null,currentRate:null,pricesToShow:null,averagePrice:null},n.formatValue=function(e){return new Intl.NumberFormat("en",{style:"currency",currency:"USD"}).format(e)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(this.props.setActiveUser());case 2:this.props.user&&(this.setState({user:this.props.user}),this.getMarketValue()),this.getAverageCoinPrice();case 4:case"end":return e.stop()}}),null,this)}},{key:"getMarketValue",value:function(){var e,t,n,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=this.props.user.coins,r.next=3,i.a.awrap(x.getRate(e));case 3:t=r.sent,this.setState({currentRate:t}),n=1/t*e,a=this.formatValue(n),this.setState({marketValue:a});case 8:case"end":return r.stop()}}),null,this)}},{key:"getAverageCoinPrice",value:function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(x.getAveragePrice());case 2:e=a.sent,t=e.map((function(e){return e.y})),n=this.formatValue(t.reduce((function(e,t){return e+t}))/t.length),this.setState({pricesToShow:t,averagePrice:n});case 6:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.marketValue,n=e.currentRate,a=e.pricesToShow,c=e.averagePrice,o=this.props.user,s={color:"black"};if(o){var i=o.moves.slice(0,5);return r.a.createElement("section",null,r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",{className:"container",style:s},"Welcome ",o.name,","),r.a.createElement("h3",{className:"container",style:s},"Current Balance: Coins: ",o.coins," | USD: ",t)),r.a.createElement("div",{className:"container flex column"},r.a.createElement("span",{style:{color:"#AD8350"}},"60 Day average prices (USD $) ",c),a&&r.a.createElement(d.Sparklines,{data:a,width:100,height:30,style:{background:"#AFA060",marginBottom:"20px",marginTop:"10px"}},r.a.createElement("h5",null,c),r.a.createElement(d.SparklinesLine,{style:{stroke:"#764134",fill:"#0000009a",fillOpacity:".6"}}),r.a.createElement(d.SparklinesReferenceLine,{type:"mean",style:{stroke:"black",strokeOpacity:1,strokeDasharray:"4, 1"}})),i&&r.a.createElement(h,{moves:i,title:"Your last 5 transfers:",currentRate:n,showMoveBy:!0})))}return r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"disconnected-message",style:{color:"#AD8350"}},"Not Logged In. Please sign in or register."),r.a.createElement("h1",{style:{color:"#AD8350"}},"60 Day average prices (USD $) ",c),a&&r.a.createElement(d.Sparklines,{data:a,width:100,height:30,style:{background:"#AFA060",marginBottom:"20px",marginTop:"10px"}},r.a.createElement("h5",null,c),r.a.createElement(d.SparklinesLine,{style:{stroke:"#764134",fill:"#0000009a",fillOpacity:".6"}}),r.a.createElement(d.SparklinesReferenceLine,{type:"mean",style:{stroke:"black",strokeOpacity:1,strokeDasharray:"4, 1"}})))}}]),t}(a.Component)),S={setActiveUser:y},N=Object(v.b)((function(e){return{user:e.user.loggedInUser}}),S)(O),j=n(4),_=n(18),T=(n(78),n(19)),U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isMenuOpen:!1},n.toggleMenu=function(){var e=n.state.isMenuOpen;e=!e,n.setState({isMenuOpen:e})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"signout",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(this.props.logUserOut());case 2:this.toggleMenu(),this.props.history.push("/");case 4:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.state.isMenuOpen;return r.a.createElement("section",{className:"header-container"},r.a.createElement("div",{className:"h-container container flex row space-between align-center"},r.a.createElement("span",null,"Mr. Bitcoin"),r.a.createElement("span",{className:"menu-btn",onClick:function(){return e.toggleMenu()}},"\u2630"),r.a.createElement("div",{className:"main-nav ".concat(t?"open-menu":""," flex align-center")},r.a.createElement("span",{className:"exit-btn",onClick:function(){return e.toggleMenu()}},"Close Menu"),r.a.createElement(j.b,{onClick:function(){return e.toggleMenu()},to:"/"},r.a.createElement(T.a,{icon:"home",color:"black",size:"1x"}),"Home"),r.a.createElement(j.b,{onClick:function(){return e.toggleMenu()},to:"/contact"},r.a.createElement(T.a,{icon:"address-book",color:"black",size:"1x"}),"Contacts"),r.a.createElement(j.b,{onClick:function(){return e.toggleMenu()},to:"/register"},r.a.createElement(T.a,{icon:"user-plus",color:"black",size:"1x"}),"Register"),r.a.createElement("a",{onClick:function(){return e.signout()}},r.a.createElement(T.a,{icon:"sign-out-alt",color:"black",size:"1x"}),"Logout"))))}}]),t}(a.Component),D={logUserOut:function(){return function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:b.logout(),e({type:"UNSET_USER"});case 2:case"end":return t.stop()}}))}}},A=Object(_.f)(Object(v.b)(null,D)(U)),M={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=g.load("contacts");return new Promise((function(n,a){if(t&&0!==t.length)r=t;else var r=R;var c;g.store("contacts",r),e&&e.term&&(c=(c=e.term).toLocaleLowerCase(),r=R.filter((function(e){return e.name.toLocaleLowerCase().includes(c)||e.phone.toLocaleLowerCase().includes(c)||e.email.toLocaleLowerCase().includes(c)}))),n(r.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0})))}))},getContactById:function(e){var t=g.load("contacts");return new Promise((function(n,a){var r=t.find((function(t){return t._id===e}));r?n(r):a("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){var t=g.load("contacts");return new Promise((function(n,a){var r=t.findIndex((function(t){return t._id===e}));-1!==r&&t.splice(r,1),g.store("contacts",t),n(t)}))},saveContact:function(e){return e._id?function(e){var t=g.load("contacts");return new Promise((function(n,a){var r=t.findIndex((function(t){return e._id===t._id}));-1!==r&&(t[r]=e),g.store("contacts",t),n(e)}))}(e):function(e){var t=g.load("contacts");return new Promise((function(n,a){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),t.unshift(e),g.store("contacts",t),n(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},R=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];n(82);function L(e){var t=e.contact;return r.a.createElement("li",{className:"contact-prev"},r.a.createElement("img",{src:"https://robohash.org/".concat(t._id,".png?set=set3"),alt:""}),r.a.createElement("div",{className:"contact-info"},r.a.createElement("h5",null,t.name),r.a.createElement("h5",null,t.phone)))}n(83);var z=function(e){var t=e.contacts;return r.a.createElement("ul",{className:"contact-list"},t.map((function(e){return r.a.createElement(j.b,{to:"/contact/".concat(e._id),key:e._id},r.a.createElement(L,{contact:e}))})))};n(84);function I(e){var t=e.handleFilter;return r.a.createElement("section",{className:"filter-container"},r.a.createElement("input",{type:"text",onChange:function(e){return t(e.target.value)},placeholder:"search by keyword"}))}n(85);var P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],selectedContactId:null,filter:""},n.setSelectedContactId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n.setState({selectedContactId:e})},n.handleFilter=function(e){n.setState({filter:e})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(M.getContacts());case 2:(e=t.sent)&&this.setState({contacts:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e,t=this.state,n=t.contacts,a=t.filter;return e=a?n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):n,r.a.createElement("section",null,r.a.createElement(I,{handleFilter:this.handleFilter}),r.a.createElement(j.b,{to:"/contact/edit/",className:"add-btn"},r.a.createElement(T.a,{icon:"plus-circle",color:"white",size:"2x",onClick:this.deleteContact})),r.a.createElement(z,{selectedContactId:this.setSelectedContactId,contacts:e}))}}]),t}(a.Component),B=(n(86),function(e){return{type:"SET_SELECTED_CONTACT",contact:e}}),F=function(e){return function(t){var n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(M.getContactById(e));case 2:return n=a.sent,a.abrupt("return",t(B(n)));case 4:case"end":return a.stop()}}))}},V=function(e){return{type:"SAVE_CONTACT",contact:e}},H=function(e){return{type:"REMOVE_CONTACT",id:e}},J=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,contact:null,contactMoves:[],amountToTransfer:"",currentRate:null},n.transfer=function(){var e,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=n.state,t=e.amountToTransfer,a=e.contact,!(t>0)){r.next=4;break}return r.next=4,i.a.awrap(n.props.addMove(a,t));case 4:n.setState({amountToTransfer:0}),n.setContactTransfers();case 6:case"end":return r.stop()}}))},n.setContactTransfers=function(){var e=n.props.user,t=n.props.contact,a=e.moves.filter((function(e){return e.toId===t._id}));n.setState({contactMoves:a})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(this.props.setActiveUser());case 2:if(this.setState({user:this.props.user}),!(e=this.props.match.params.id)){t.next=10;break}return t.next=7,i.a.awrap(this.props.loadSelectedContact(e));case 7:this.setState({contact:this.props.contact}),this.setContactTransfers(),this.getCurrentRate();case 10:case"end":return t.stop()}}),null,this)}},{key:"setTransferAmount",value:function(e){var t=e.target.value;this.setState({amountToTransfer:+t})}},{key:"getCurrentRate",value:function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.user.coins,n.next=3,i.a.awrap(x.getRate(e));case 3:t=n.sent,this.setState({currentRate:t});case 5:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.state,n=t.amountToTransfer,a=t.contactMoves,c=t.currentRate,o=this.state.contact;return o?r.a.createElement("section",{className:"contact-details-container"},r.a.createElement("div",{className:"secondary-nav"},r.a.createElement("a",{onClick:function(){return e.props.history.goBack()},className:"flat-btn"},"Back"),r.a.createElement(j.b,{to:"/contact/edit/".concat(o._id),className:"flat-btn"},"Edit")),r.a.createElement("div",{className:"container"},r.a.createElement("li",{className:"contact-details"},r.a.createElement("img",{src:"https://robohash.org/".concat(o._id,".png?set=set3"),alt:""}),r.a.createElement("span",null,o.name),r.a.createElement("span",null,o.phone),r.a.createElement("span",null,o.email)),r.a.createElement("div",{className:"transfer-section"},r.a.createElement("input",{type:"text",placeholder:"enter amount",onChange:function(t){return e.setTransferAmount(t)},value:n}),r.a.createElement("button",{onClick:function(){return e.transfer()},className:"form-btn"},"Transfer")),r.a.createElement(h,{moves:a,title:"Transfers History",currentRate:c}))):r.a.createElement("h3",null,"No Contact Found")}}]),t}(a.Component),W={loadSelectedContact:F,addMove:function(e,t){return function(n){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:a=b.addMove(e,t),n(C(a));case 2:case"end":return r.stop()}}))}},setActiveUser:y},G=Object(v.b)((function(e){return{contact:e.contact.selectedContact,user:e.user.loggedInUser}}),W)(J),q=n(29),Y=n(8),$=(n(87),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contact:{}},n.saveContact=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,i.a.awrap(n.props.saveContact(n.state.contact));case 3:n.props.history.push("/contact");case 4:case"end":return t.stop()}}))},n.removeContact=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),!(t=n.state.contact._id)){a.next=5;break}return a.next=5,i.a.awrap(n.props.removeContact(t));case 5:n.props.history.push("/contact");case 6:case"end":return a.stop()}}))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=this.props.match.params.id)){n.next=7;break}return n.next=4,i.a.awrap(this.props.loadSelectedContact(t));case 4:return n.abrupt("return",this.setState({contact:this.props.contact}));case 7:return n.next=9,i.a.awrap(M.getEmptyContact());case 9:e=n.sent;case 10:this.setState({contact:e});case 11:case"end":return n.stop()}}),null,this)}},{key:"updateContactDetails",value:function(e,t){var n=e.target.value;this.setState((function(e){return{contact:Object(Y.a)({},e.contact,Object(q.a)({},t,n))}}))}},{key:"render",value:function(){var e=this,t=this.state.contact;return t?r.a.createElement("section",{className:"contact-edit-container"},r.a.createElement("div",{className:"secondary-nav"},r.a.createElement("a",{onClick:function(){return e.props.history.goBack()},className:"flat-btn"},"Back"),r.a.createElement("span",{onClick:this.removeContact,className:"flat-btn"},"Delete")),r.a.createElement("div",{className:"contact-edit container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t._id,".png?set=set3"),alt:""}),r.a.createElement("form",{action:"",onSubmit:this.saveContact},r.a.createElement("div",{className:"field"},r.a.createElement("label",null," Name:"),r.a.createElement("input",{type:"text",placeholder:"Contact Name",value:"".concat(t.name),onChange:function(t){return e.updateContactDetails(t,"name")}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null," Phone:"),r.a.createElement("input",{type:"text",placeholder:"Phone Number",value:"".concat(t.phone),onChange:function(t){return e.updateContactDetails(t,"phone")}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null," Email:"),r.a.createElement("input",{type:"text",placeholder:"Email",value:"".concat(t.email),onChange:function(t){return e.updateContactDetails(t,"email")}})),r.a.createElement("button",{className:"form-btn"},"Save")))):r.a.createElement("h3",null,"No Contact Found")}}]),t}(a.Component)),K={loadSelectedContact:F,saveContact:function(e){return function(t){var n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(M.saveContact(e));case 2:return n=a.sent,a.abrupt("return",t(V(n)));case 4:case"end":return a.stop()}}))}},removeContact:function(e){return function(t){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(M.deleteContact(e));case 2:return n.sent,n.abrupt("return",t(H(e)));case 4:case"end":return n.stop()}}))}}},Q=Object(v.b)((function(e){return{contact:e.contact.selectedContact}}),K)($),X=(n(88),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{name:"",coins:100,moves:[]}},n.register=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(b.addNewUser(n.state.newUser));case 2:n.props.history.push("/");case 3:case"end":return e.stop()}}))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"setUserName",value:function(e){var t=e.target.value;this.setState((function(e){return{newUser:Object(Y.a)({},e.newUser,{name:t})}}))}},{key:"render",value:function(){var e=this,t=this.state.newUser;return r.a.createElement("section",{className:"field container"},r.a.createElement("input",{type:"text",placeholder:"Enter Username",value:t.name,onChange:function(t){return e.setUserName(t)}}),r.a.createElement("button",{onClick:this.register},"Register"))}}]),t}(a.Component)),Z=(n(89),n(25)),ee=n(47),te=n(21);Z.b.add(ee.a,te.d,te.c,te.a,te.b,te.f,te.e);var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:N}),r.a.createElement(_.a,{exact:!0,path:"/contact",component:P}),r.a.createElement(_.a,{exact:!0,path:"/contact/edit/:id?",component:Q}),r.a.createElement(_.a,{exact:!0,path:"/contact/:id",component:G}),r.a.createElement(_.a,{exact:!0,path:"/register",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(22),re=n(48),ce=n(26),oe={selectedContact:null,contacts:[]};var se={loggedInUser:null};var ie=Object(ae.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_CONTACT":return Object(Y.a)({},e,{selectedContact:t.contact});case"SET_CONTACTS":return Object(Y.a)({},e,{contacts:t.contacts});case"SAVE_CONTACT":var n=e.contacts.findIndex((function(e){return e._id===t.contact._id}));return Object(Y.a)({},e,{contacts:[].concat(Object(ce.a)(e.contacts.slice(0,n)),[t.contact],Object(ce.a)(e.contacts.slice(n+1)))});case"DELETE_CONTACT":var a=e.contacts.findIndex((function(e){return e._id===t._id}));return Object(Y.a)({},e,{contacts:[].concat(Object(ce.a)(e.contacts.slice(0,a)),Object(ce.a)(e.contacts.slice(a+1)))});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"UPDATE_USER":return Object(Y.a)({},e,{loggedInUser:t.user});case"UNSET_USER":return Object(Y.a)({},e,{loggedInUser:null});default:return e}}}),le=Object(ae.d)(ie,Object(ae.a)(re.a)),ue=n(6);n.d(t,"history",(function(){return me}));var me=Object(ue.a)();o.a.render(r.a.createElement(v.a,{store:le},r.a.createElement(j.a,{history:me},r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.369bb04d.chunk.js.map