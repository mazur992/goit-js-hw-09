!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector(".form"),a=(document.querySelector("button"),{});function c(e){a[e.target.name]=e.target.value}i.addEventListener("input",(function(e){return c(e)})),i.addEventListener("submit",(function(n){var t=function(n,t,o){var r=new Promise((function(e,n){var o=Math.random()>.3;setTimeout((function(){o?e():n()}),t)}));r.then((function(){e(u).Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))})),r.catch((function(){e(u).Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(t,"ms"))}))};if(n.preventDefault(),""!==i.delay.value&&""!=i.step.value&&""!=i.amount.value)for(var o=0,r=Number(a.delay),f=Number(a.step);o<a.amount;o+=1,r+=f)t(o,r);i.reset(),i.removeEventListener("input",c)}))}();
//# sourceMappingURL=03-promises.4691a695.js.map
