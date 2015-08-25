 var menu=document.getElementById("menu");
        var nav=document.getElementById("nav");
        var i = 0;
        var navDespliegue = function()
        {
            
            if(i===0)
            {
                
                nav.style.display = "block";
                i = 1;
            }
            else{
              nav.style.display = "none"; 
              i = 0; 
            };
            
            
        };
        
        menu.addEventListener("click", navDespliegue);
