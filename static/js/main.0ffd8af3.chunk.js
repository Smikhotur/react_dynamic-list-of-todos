(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{56:function(e,t,n){e.exports=n(68)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=n(34),s=n(22),u=n(23),i=n(27),d=n(25),m=(n(61),n(62),n(103)),h=n(44),f=(n(63),n(104)),p=n(105),v=n(106),E=n(45),b=n.n(E),_=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputTitle:"",defaultSelect:"Show All"},e.handleInputChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(h.a)({},r,a))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.checkedHandler,a=e.selectUserHandler,o=this.state,c=o.inputTitle,s=o.defaultSelect,u=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})),i=null;switch(s){case"Show Completed":i=u.filter((function(e){return!0===e.completed}));break;case"Show Active":i=u.filter((function(e){return!1===e.completed}));break;default:i=Object(l.a)(u)}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos: ".concat(i.length)),r.a.createElement("form",{className:"TodoList__form",noValidate:!0,autoComplete:"off"},r.a.createElement(p.a,{label:"Search todos",id:"outlined-size-small",name:"inputTitle",value:c,variant:"outlined",onChange:this.handleInputChange}),r.a.createElement(f.a,{className:"selectMenu",variant:"outlined",name:"defaultSelect",value:s,onChange:this.handleInputChange},r.a.createElement(v.a,{name:"all",value:"Show All"},"Show All"),r.a.createElement(v.a,{name:"completed",value:"Show Completed"},"Show Completed"),r.a.createElement(v.a,{name:"active",value:"Show Active"},"Show Active"))),r.a.createElement("ul",{className:"TodoList__list"},i.map((function(e){return r.a.createElement("li",{className:b()("TodoList__item",{"TodoList__item--checked":!0===e.completed," TodoList__item--unchecked":!1===e.completed}),key:e.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"completed",onChange:function(){return n(e.id)},checked:e.completed,readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",onClick:function(){a(e.userId)},type:"button"},"User ".concat(e.userId)))}))))}}]),n}(r.a.Component),k=(n(67),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),C=function(e){return k("/users/".concat(e))},y=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;C(this.props.userId).then((function(t){e.setState({currentUser:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&C(this.props.userId).then((function(e){t.setState({currentUser:e})}))}},{key:"render",value:function(){var e=this.state.currentUser,t=this.props.clearUser;return r.a.createElement(r.a.Fragment,null,null===e?r.a.createElement("h1",null,"Error dataBase"):r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:function(){t()}},"Clear")))}}]),n}(r.a.Component),U=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.filterTodos=function(e){return e.filter((function(e){return"number"===typeof e.userId})).filter((function(e){return"boolean"===typeof e.completed})).filter((function(e){return""!==e.title}))},e.checkedHandler=function(t){e.setState((function(e){var n=Object(l.a)(e.todos).find((function(e){return e.id===t}));return n.completed=!n.completed,{todos:Object(l.a)(e.todos)}}))},e.selectUserHandler=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.shuffleTodos=function(t){for(var n=t.length-1;n>0;n-=1){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}e.setState({todos:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;k("/todos").then((function(t){var n=e.filterTodos(t);e.setState({todos:n})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m.a,{variant:"outlined",color:"secondary",onClick:function(){e.shuffleTodos(n)}},"Randomize"),r.a.createElement(_,{todos:n,checkedHandler:this.checkedHandler,selectUserHandler:this.selectUserHandler,shuffleTodos:this.shuffleTodos})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(y,{userId:a,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.0ffd8af3.chunk.js.map