// window.onload = ()=>{
//     var src = 'https://sela-tech.github.io/assets/fonts/stylesheet.css';
//     if(document.createStyleSheet){
//     document.createStyleSheet(src)
//     } else {
//         var stylesheet = document.createElement('link');
//         stylesheet.href = src;
//         stylesheet.rel = 'stylesheet';
//         stylesheet.type = 'text/css';
//         document.getElementsByTagName('head')[0].appendChild(stylesheet);
//     }
// }


 var loadDeferredStyles = function() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
      };
      var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
      else window.addEventListener('load', loadDeferredStyles);