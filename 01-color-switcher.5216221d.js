!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){n.style="background-color:".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),"; transition: background-color 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67)")}t.addEventListener("click",(function(n){var c=setInterval(o,1e3);t.disabled=!0,e.addEventListener("click",(function(e){clearInterval(c),t.disabled=!1}))}))}();
//# sourceMappingURL=01-color-switcher.5216221d.js.map