var dados = {id: "", escola: "", cidade: ""}
         var i = 0;
         

         _addCidadeEscola = function() {
            var y = document.getElementById("IdEscola").value;
            var x = document.getElementById("IdCidade").value;
            
            dados[i++] =  {id: i, escola: y, cidade: x};

            /*var x = document.createTextNode(dados[i].escola);*/
        }