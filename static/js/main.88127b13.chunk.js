(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={List:"ContactList_List__3AHRz",List_item:"ContactList_List_item__1XRpW",List_button:"ContactList_List_button__NrbU7"}},16:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),i=n(10),s=n(5),l=n(8),u=n(3),d=n(12),b=n(11),m=n(7),h=n(4),j=n.n(h),p=n(1),f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(s.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.Form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.Label,children:["Name",Object(p.jsx)("input",{className:j.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.Label,children:["Number",Object(p.jsx)("input",{className:j.a.Input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:j.a.Button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(13),O=n.n(C),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:O.a.List,children:e.map((function(t){return Object(p.jsxs)("li",{className:O.a.List_item,children:["\u2022 "+t.name+":  "+t.number,Object(p.jsx)("button",{className:O.a.List_button,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},x=n(19),g=Object(x.a)({Label:{display:"inline-block",marginBottom:16,width:200,fontSize:16,color:"#171718",cursor:"pointer"},Input:{color:"#171718",font:"inherit",fontSize:"0.9rem",marginTop:6,borderRadius:4,border:"1px solid #9e9d9d",width:200,outline:0,"&:focus":{border:"2px solid blue",boxShadow:"1px 1px 3px 1px rgba(41, 107, 250, 0.14)"}}});function _(t){var e=t.value,n=t.onChangeFilter,a=g();return Object(p.jsxs)("div",{className:a.Label,children:["Find contacts by name",Object(p.jsx)("input",{className:a.Input,type:"text",value:e,onChange:n,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}_.defaultProps={value:""};var L=_,A=n(35),y=(n(16),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else{var n=Object(s.a)(Object(s.a)({},e),{},{id:Object(A.a)()});t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return console.log("visibleContacts",e,"visibleContacts.length",e.length),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onAddContact:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(L,{value:t,onChangeFilter:this.changeFilter}),Object(p.jsx)(v,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));n(32);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={Form:"ContactForm_Form__17-Pb",Label:"ContactForm_Label__UvACl",Input:"ContactForm_Input__2hJCZ",Button:"ContactForm_Button__tSfOZ"}}},[[33,1,2]]]);
//# sourceMappingURL=main.88127b13.chunk.js.map