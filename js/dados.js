 

var LSEscola = localStorage.getItem("LSEscola");// Recupera os dados armazenados
LSEscola = JSON.parse(LSEscola); // Converte string para objeto
if(LSEscola == null) // Caso não haja conteúdo, iniciamos um vetor vazio

LSEscola = [];

Adicionar = function (){
    var escola = JSON.stringify({
        ID : LSEscola.length + 1,
        Escola : document.getElementById("IdEscola").value,
        Cidade : document.getElementById("IdCidade").value,
    });
    LSEscola.push(escola);
    localStorage.setItem("LSEscola", JSON.stringify(LSEscola));
    alert("Registro adicionado.");
    return true;
}

Editar = function(){
    LSEscola[_id] = JSON.stringify({
        ID : _id,
        Escola : document.getElementById("IdEscola").value,
        cidade : document.getElementById("IdCidade").value,
    })

    localStorage.setItem("LSEscola", JSON.stringify(LSEscola));
    alert("Informações editadas");
    operacao = "A";
    return true;
}
 
Listar = function(){
    
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < LSEscola.length; i++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var _result = JSON.parse(LSEscola[i]);

        var cellText = document.createTextNode(_result.Escola);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(_result.cidade);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        var btnEditar = document.createElement("BUTTON");
        var txtEditar = document.createTextNode("Editar");
        btnEditar.appendChild(txtEditar)
        cell.appendChild(btnEditar);

        row.appendChild(cell);

        cell = document.createElement("td");
        var btnExcluir = document.createElement("BUTTON");
        var txtExcluir = document.createTextNode("Excluir");
        btnExcluir.appendChild(txtExcluir)
        cell.appendChild(btnExcluir);

        row.appendChild(cell);
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
}

