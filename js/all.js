
     window.onload = function()
     {
     var cidades = new Array ("Bauru","Botucatu","Perdeineiras","Piratininja","Sorocaba","Cafelândia");
     var comboCidades = document.getElementById("IdCidade");

         for (var x=0; x<cidades.length;x++)
          {
            var opt0 = document.createElement("option"); 
            opt0.value = x;
            opt0.text =cidades[x];
            comboCidades.add(opt0, cidades[x]);
           }
         }
        
        var escola = document.getElementById("IdEscola");
        
        /* Pega o evento de click do botão de cadastro
        var form = document.getElementById("cadastro");
         form.addEventListener("submit",Cadastrar,false);     */
          Cadastrar = function (){
        /*Verifica o campo da escola*/    
            if(!escola.value)
             {
                 escola.className= "form-control is-invalid";
                 var aviso = document.getElementById("AvisoEscola");
                 aviso.className = "alert-danger";  
                 e.preventdefault();
             }

             alert("testando");
         }
