(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3Rezt",label:"ContactForm_label__2ifFq",input:"ContactForm_input__ZV2v-",button:"ContactForm_button__1GTY0"}},,,,,,,function(t,e,n){t.exports={label:"Filter_label__2x1HY",input:"Filter_input__3KM05"}},function(t,e,n){t.exports={button:"ContactItem_button__2Y4l0",item:"ContactItem_item__3xqBv"}},function(t,e,n){t.exports={title:"App_title__3EBe5"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=(n(18),n(3)),i=n(13),u=n(4),l=n(5),m=n(7),b=n(6),d=n(22),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.onSubmit=function(e){e.preventDefault();var n={id:Object(d.a)(),name:t.state.name,number:t.state.number};t.props.addContact(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.onSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{className:j.a.input,onChange:this.onChange,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{className:j.a.input,onChange:this.onChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,required:!0})]}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(9),C=n.n(v),O=function(t){var e=t.onChange,n=t.value;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:C.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:C.a.input,name:"filter",type:"text",value:n,onChange:e})]})})},x=n(10),_=n.n(x),g=function(t){var e=t.removeContact;return t.contacts.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:_.a.item,children:[n,": ",a,Object(f.jsx)("button",{className:_.a.button,onClick:function(){return e(c)},type:"button",children:"Delete"})]},c)}))},y=function(t){var e=t.removeContact,n=t.contacts;return Object(f.jsx)("ul",{children:Object(f.jsx)(g,{removeContact:e,contacts:n})})},N=n(11),S=n.n(N),k=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){void 0===t.state.contacts.find((function(t){return t.name===e.name}))?t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}})):alert("".concat(e.name," is already in contact"))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onChange=function(e){t.setState(Object(s.a)({},e.currentTarget.name,e.currentTarget.value))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(f.jsx)(p,{addContact:this.addContact}),Object(f.jsx)("h2",{className:S.a.title,children:"Contacts"}),Object(f.jsx)(O,{value:this.state.filter,onChange:this.onChange}),Object(f.jsx)(y,{removeContact:this.removeContact,contacts:e})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ffce8215.chunk.js.map