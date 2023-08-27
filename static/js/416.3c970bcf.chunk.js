"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{4416:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(2791),u=t(4270),o=t(9434),i=t(7840),c="NOT_FOUND";var a=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?a:r,o=t.maxSize,i=void 0===o?1:o,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),f=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return c}return{get:r,put:function(e,u){r(e)===c&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,s);function d(){var e=f.get(arguments);if(e===c){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var o,i=0,c={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(c=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=c,f=l.memoizeOptions,d=void 0===f?t:f,h=Array.isArray(d)?d:[d],p=s(r),v=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(h)),m=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return o=v.apply(null,n)}));return Object.assign(m,{resultFunc:a,memoizedResultFunc:v,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return u}var d=f(l),h=function(n){return n.contacts.filter},p=function(n){return n.auth.token},v=d([function(n){return n.contacts.items},h],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)}))})),m=t(9439),y=t(3634),g=t(9085),x=t(184),b=function(){var n=(0,r.useState)(""),e=(0,m.Z)(n,2),t=e[0],u=e[1],i=(0,r.useState)(""),c=(0,m.Z)(i,2),a=c[0],l=c[1],s=(0,r.useState)(!1),f=(0,m.Z)(s,2),d=f[0],h=f[1],p=(0,o.I0)(),v=(0,o.v9)((function(n){return n.contacts.isLoading})),b=(0,o.v9)((function(n){return n.contacts.items})),j=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?u(r):"number"===t&&l(r)};return(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&""!==a.trim()?b.some((function(n){return n.name===t||n.number===a}))?g.Am.error("Contact with the same name or phone already exists.",{closeOnClick:!1}):(h(!0),p((0,y.uK)({name:t,number:a})).then((function(){u(""),l(""),h(!1),g.Am.success("Contact added successfully!",{closeOnClick:!1})})).catch((function(n){g.Am.error("An error occurred while adding the contact.",{closeOnClick:!1}),h(!1)}))):g.Am.error("Please provide both name and phone.",{closeOnClick:!1})},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"name",children:"Name"}),(0,x.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:j})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"number",children:"Phone number"}),(0,x.jsx)("input",{type:"tel",id:"number",name:"number",value:a,onChange:j})]}),(0,x.jsx)("button",{type:"submit",disabled:d||v,children:d?"Adding...":"Add contact"})]})},j=function(){var n=(0,o.v9)(v),e=(0,o.I0)(),t=(0,r.useState)(null),u=(0,m.Z)(t,2),i=u[0],c=u[1];return(0,x.jsx)("div",{children:n.map((function(n){return(0,x.jsxs)("div",{children:[(0,x.jsxs)("span",{children:[n.name,": ",n.number]}),(0,x.jsx)("button",{onClick:function(){return t=n.id,c(t),void e((0,y.GK)(t)).then((function(){e((0,y.yF)()),c(null)})).catch((function(n){console.log("An error occurred while deleting the contact.",n),c(null)}));var t},disabled:i===n.id,children:i===n.id?"Deleting...":"Delete"})]},n.id)}))})},k=function(){var n=(0,o.v9)(h),e=(0,o.I0)();return(0,x.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,i.Tv)(n.target.value))},placeholder:"Search contacts..."})},C=function(){var n=(0,o.I0)(),e=(0,o.v9)(p);return(0,r.useEffect)((function(){n((0,y.yF)({token:e})).then((function(n){(0,i.WT)(n.payload)}))}),[n,e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.q,{children:(0,x.jsx)("title",{children:"Your contacts"})}),(0,x.jsx)("h2",{children:"Your contacts"}),(0,x.jsx)(b,{}),(0,x.jsx)(k,{}),(0,x.jsx)(j,{})]})}}}]);
//# sourceMappingURL=416.3c970bcf.chunk.js.map