const ajax = new XMLHttpRequest();
ajax.open("GET", "https://cristinalare.github.io/schelling-point-amsterdam/images/sprite.svg", true);
ajax.send();
ajax.onload = function(e) {
    let div = document.createElement("div");
    div.className = "svgSprite";
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
}