(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(t,e,n){t.exports={btns:"FeadbackOptions_btns__3uqNI",good:"FeadbackOptions_good__3PK4-",neutral:"FeadbackOptions_neutral__9-9QK",bad:"FeadbackOptions_bad__3ecWr"}},function(t,e,n){t.exports={container:"Feedback_container__1KHMR"}},,,,function(t,e,n){t.exports={list:"Statistics_list__qMAXH"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(5),i=n.n(o),s=(n(15),n(16),n(6)),r=n(7),d=n(10),u=n(9),l=n(3),b=n.n(l),j=n(0);function h(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)("div",{className:b.a.btns,children:e.map((function(t){return Object(j.jsx)("button",{className:b.a[t],type:"button",name:t,onClick:n,children:t},t)}))})}var f=n(8),g=n.n(f);function O(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positivePercentage;return c>0?Object(j.jsxs)("ul",{className:g.a.list,children:[Object(j.jsxs)("li",{children:["Good: ",e]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",a]}),Object(j.jsxs)("li",{children:["Total: ",c]}),Object(j.jsxs)("li",{children:["Positive feedback: ",o,"%"]})]}):"No feedback given"}function v(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:e}),n]})}var k=n(4),p=n.n(k),x=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){"good"===e.target.name?t.setState((function(t){return{good:t.good+1}})):"neutral"===e.target.name?t.setState((function(t){return{neutral:t.neutral+1}})):"bad"===e.target.name&&t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:p.a.container,children:[Object(j.jsx)(v,{title:"Please leave feedback",className:p.a.title,children:Object(j.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(v,{title:"Statistics",children:Object(j.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component),F=function(){return Object(j.jsx)(x,{})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),_()}],[[18,1,2]]]);
//# sourceMappingURL=main.afc35bc1.chunk.js.map