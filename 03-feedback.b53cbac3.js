function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function w(e){return u=void 0,p&&r?b(e):(r=o=void 0,a)}function O(){var e=v(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector("form"),email:document.querySelector("input"),message:document.querySelector("textarea")};b.form.addEventListener("input",e(t)((function(){const e={email:b.email.value.trim(),message:b.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.form.addEventListener("submit",(function(e){e.preventDafualt(),b.form.reset(),localStorage.removeItem("feedback-form-state")}));const h=(e=>{try{const t=localStorage.getItem(e);return""===t?void 0:JSON.parse(t)}catch(e){console.error("error: ",e)}})("feedback-form-state");h&&(b.email.value=h.email,b.message.value=h.message);
//# sourceMappingURL=03-feedback.b53cbac3.js.map
