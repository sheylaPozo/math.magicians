(this["webpackJsonpmath.magicians"]=this["webpackJsonpmath.magicians"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),l=n.n(a),c=n(10),s=n.n(c),i=(n(15),n(2)),r=n(3),b=n(6),o=n(5),j=n(4),d=(n(9),n(8)),h=n.n(d);function u(t,e,n){var a=h()(t),l=h()(e);if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("x"===n)return a.times(l).toString();if("\xf7"===n&&"0"===e)return"Can't devide by 0";if("%"===n)return a.mod(l).toString();throw Error("Unknown operation '".concat(n,"'"))}var x=n(0),O=function(t){Object(b.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={total:null,next:null},a.handler=a.handler.bind(Object(j.a)(a)),a}return Object(r.a)(n,[{key:"handler",value:function(t){this.setState((function(e){return n=e,"AC"===(a=t.target.innerText)?{total:null,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===n.next?{}:n.operation?n.next?{next:n.next+a}:{next:a}:n.next?{next:n.next+a,total:null}:{next:a,total:null}:"."===a?n.next?n.next.includes(".")?{}:{next:"".concat(n.total,".")}:n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===a&&n.next&&n.operation?{total:u(n.total,n.next,n.operation),next:null,operation:null}:"+/-"===a?n.next?{next:(-1*parseFloat(n.next)).toString()}:n.total?{total:(-1*parseFloat(n.total)).toString()}:{}:n.operation?{total:u(n.total,n.next,n.operation),next:null,operation:a}:n.next?{total:n.next,next:null,operation:a}:{operation:a};var n,a}))}},{key:"render",value:function(){var t=this.state,e=t.next,n=t.total;return Object(x.jsx)("table",{className:"container",children:Object(x.jsxs)("tbody",{children:[Object(x.jsx)("tr",{children:Object(x.jsx)("td",{className:"table Input",colSpan:"4",children:e||n||"0"})}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"AC"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"+/-"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"%"})}),Object(x.jsx)("td",{className:"table pink",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"\xf7"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"7"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"8"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"9"})}),Object(x.jsx)("td",{className:"table pink",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"x"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"4"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"5"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"6"})}),Object(x.jsx)("td",{className:"table pink",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"-"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"1"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"2"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"3"})}),Object(x.jsx)("td",{className:"table pink",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"+"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"table",colSpan:"2",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"0"})}),Object(x.jsx)("td",{className:"table",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"."})}),Object(x.jsx)("td",{className:"table pink",children:Object(x.jsx)("button",{className:"btn",type:"button",onClick:this.handler,children:"="})})]})]})})}}]),n}(l.a.Component),m=function(t){Object(b.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(O,{})}}]),n}(l.a.Component);s.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.ce47c0d6.chunk.js.map