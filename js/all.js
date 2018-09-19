document.write('<script src="js\/dados.js" type="text\/javascript"><\/script>');    

window.onload = function()
{
    listarCidades();
    
};

function listarCidades(){
    var cidades = new Array ("Bauru","Botucatu","Perdeineiras","Piratininja","Sorocaba","Cafelândia");
    var comboCidades = document.getElementById("IdCidade");
    for (var x=cidades.length-1; x>-1;x--)
    {
      var opt0 = document.createElement("option"); 
      opt0.value = x;
      opt0.text =cidades[x];
      comboCidades.add(opt0, cidades[x]);
     }
     return cidades;

}


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
        Adicionar();
        window.location.href = "TelaCadastro.html";
    } 
   }

  

         
