var menu=document.getElementById("menu"),nav=document.getElementById("nav"),i=0,navDespliegue=function(){0===i?(nav.style.display="block",i=1):(nav.style.display="none",i=0)};menu.addEventListener("click",navDespliegue);