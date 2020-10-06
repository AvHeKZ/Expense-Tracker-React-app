(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),o=n(2),u=n(6),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return e.filter((function(e){return e.id!==t.payload}));case"ADD_TRANSACTION":return[].concat(Object(u.a)(e),[t.payload]);default:return e}},i=Object(a.createContext)(),m=function(e){var t=e.children,n=Object(a.useReducer)(s,[],(function(){var e=localStorage.getItem("transactions");return e?JSON.parse(e):[]})),c=Object(o.a)(n,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){localStorage.setItem("transactions",JSON.stringify(l))}),[l]),r.a.createElement(i.Provider,{value:{transactions:l,addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})},deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})}}},t)},d={boxShadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",backGroundColor:"white"},p=function(){var e=Object(a.useContext)(i).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.reduce((function(e,t){return e+t}),0).toFixed(2),c=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"card card-body ",style:d},r.a.createElement("div",{className:"d-flex justify-content-between  "},r.a.createElement("div",null,r.a.createElement("h4",null,"Total"),r.a.createElement("p",{className:"text-primary text-center"},"$",n)),r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"text-success text-center"},"$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Exps"),r.a.createElement("p",{className:"text-danger text-center"},"$",c))))},E=function(e){var t=e.transaction,n=Object(a.useContext)(i).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus d-flex justify-content-between list-group-item my-1":"plus d-flex justify-content-between list-group-item my-1"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"btn btn-sm btn-danger delete-btn"},"Delete"))},f=function(){var e=Object(a.useContext)(i).transactions;return r.a.createElement("div",{className:"scroll"},r.a.createElement("h5",{style:{borderBottom:"1px solid black"},className:"py-3 mt-2"},"History"),r.a.createElement("ul",{className:"list-group"},e.map((function(e){return r.a.createElement(E,{key:e.id,transaction:e})}))))},b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),s=u[0],m=u[1],d=Object(a.useContext)(i),p=d.addTransaction;d.transactions;return r.a.createElement("div",{className:"py-2"},r.a.createElement("h5",{style:{borderBottom:"1px solid black"},className:"py-3"},"Add New Transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+s,date:new Date};p(t),c(""),m("")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",placeholder:"Enter Text...",className:"form-control",value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Amount"),r.a.createElement("label",null,"(negative - expense, positive - income)"),r.a.createElement("input",{type:"text",placeholder:"Enter Amount...",className:"form-control",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("button",{className:"btn btn-info btn-block"},"Add Transaction")))},x=(n(12),function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"container1"},r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(b,null)))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5c530328.chunk.js.map