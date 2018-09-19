    
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
    
};

<<<<<<< HEAD
 function Cadastrar()
   {
       var escola = document.getElementById("IdEscola");
      
    if(!escola.value)
    {
        escola.className= "form-control is-invalid";
        var aviso = document.getElementById('AvisoEscola');
        aviso.className = "alert-danger";
    }
    else
    {
        window.location.href = "file:///C:/Users/angelo.neto/JS_escola/TelaCadastro.html";
    } 
   }
  

         
=======
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
         


>>>>>>> de7c450f9b36a126bfe34e9893ca729c57347d14
