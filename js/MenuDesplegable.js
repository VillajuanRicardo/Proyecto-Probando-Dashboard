var btnMenu=document.getElementById("btn-menu");
var nav=document.getElementById("header__nav");

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar");
});

