(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),i=(n(13),n(2)),s=n(3),u=n(5),l=n(4),b=n(8),h=n.n(b),j=n(0),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).onSubmit=function(t){t.preventDefault(),a.props.onSubmit(a.state.name,a.state.number),a.reset()},a.reset=function(){a.setState({name:"",number:""})},a.state={name:"",number:""},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("form",{className:h.a.form,style:{marginBottom:"32px"},onSubmit:this.onSubmit,children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){t.setState({name:e.currentTarget.value})}}),Object(j.jsx)("p",{children:"Number"}),Object(j.jsx)("input",{type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){t.setState({number:e.currentTarget.value})}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(c.a.Component);var m=function(t){var e=t.onChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",onChange:function(t){e(t.currentTarget.value)}})]})};var f=function(t){var e=t.state,n=t.onDelete;return Object(j.jsx)("ul",{children:e.contacts.filter((function(t){return n=t.name,a=e.filter,n.toLowerCase().includes(a.toLowerCase());var n,a})).map((function(t){return Object(j.jsxs)("li",{children:[t.name," ",t.number,Object(j.jsx)("button",{type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},p=(n(15),n(18)),O={contacts:[],filter:""},v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=O,t.onAddContact=function(e,n){if(t.state.contacts.filter((function(t){return t.name===e})).length>0)alert(e+" is already in contacts");else{var a=Object(p.a)();t.state.contacts.push({id:a,name:e,number:n}),t.setState({contacts:t.state.contacts})}},t.onChangeFilter=function(e){t.setState({filter:e})},t.onDeleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("phonebook");null!==t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("phonebook",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:this.onAddContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(m,{onChange:this.onChangeFilter}),Object(j.jsx)(f,{state:this.state,onDelete:this.onDeleteContact})]})}}]),n}(c.a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()},8:function(t,e,n){t.exports={form:"ContactForm_form__1Jdfy"}}},[[16,1,2]]]);
//# sourceMappingURL=main.63f85918.chunk.js.map