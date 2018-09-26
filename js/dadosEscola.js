
_id = -1;
operation = "A";
editando = "N";

var LSEscola = localStorage.getItem("LSEscola");// Recupera os dados armazenados
LSEscola = JSON.parse(LSEscola); // Converte string para objeto


if (LSEscola == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    LSEscola = [];


var LSCidade = localStorage.getItem("tbClientes");// Recupera os dados armazenados
LSCidade = JSON.parse(LSCidade); // Converte string para objeto

if (LSCidade == null) // Caso não haja conteúdo, iniciamos setado
{
    LSCidade = [];
}

SelectList = function () {

    var comboCidades = document.getElementById("IdCidade");
    for (var x = 0; x < LSCidade.length; x++) {
        var _resultCidade = JSON.parse(LSCidade[x]);
        var opt0 = document.createElement("option");
        opt0.value = _resultCidade.Cidade;
        opt0.text = _resultCidade.Cidade;
        opt0.id = x;
        comboCidades.add(opt0, _resultCidade.ID);
    }
}

Adicionar = function () {


    var teste = 0;
    //pegar o ultimo id do array para adicionar um novo
    for (var j = 0; j < LSEscola.length; j++) {
        var getID = JSON.parse(LSEscola[j]);
        teste = getID.ID;
    }
    if (teste == null) // verifica se o resultado do id é nulo, se sim ele seta 0
        teste = 0;

    var escola = JSON.stringify({
        ID: teste + 1,  //soma um com o valor do ultimo id,
        Escola: document.getElementById("IdEscola").value,
        Cidade: document.getElementById("IdCidade").value,
    });
    LSEscola.push(escola);
    localStorage.setItem("LSEscola", JSON.stringify(LSEscola));
    alert("Registro adicionado.");
    return true;
}

ConfirmarEditar = function () {
    if (operation == "E") {
        Editar(_id);
    } else {
        Cadastrar();
    }
}

Editar = function (numero) {
    for (var i = 0; i < LSEscola.length; i++) {
        var _result = JSON.parse(LSEscola[i]);
        if (_result.ID == numero) {
            LSEscola[i] = JSON.stringify({
                ID: numero,
                Escola: document.getElementById("IdEscola").value,
                Cidade: document.getElementById("IdCidade").value,
            })
            localStorage.setItem("LSEscola", JSON.stringify(LSEscola));
            alert("Informações editadas");
            operation = "A";
            editando = "N";
            _id = -1;
        }
    }
    window.location.href = "cadastroEscola.html";
    return true;
}

Excluir = function (numero) {
    //Busca o index do array comparando com o ID passado
    for (var j = 0; j < LSEscola.length; j++) {
        var _result = JSON.parse(LSEscola[j]);
        if (_result.ID == numero) {
            var really = confirm("A escola " + _result.Escola + " será apagada.");
            if (really) {
                LSEscola.splice(j, 1);
                localStorage.setItem("LSEscola", JSON.stringify(LSEscola));
                location.reload();
                alert("A escola " + _result.Escola + " localizada na cidade " + _result.Cidade + " foi apagada!");
            }
        }
    }
}

Listar = function () {
    var LSEscola = localStorage.getItem("LSEscola");// Recupera os dados armazenados    
    LSEscola = JSON.parse(LSEscola);
    var tbl = document.createElement("table");
    var tblhead = document.createElement("thead");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("th");

    var cellText = document.createTextNode("ID");
    cell.appendChild(cellText);
    cell.scope = "col";
    row.appendChild(cell);

    cell = document.createElement("th");
    cellText = document.createTextNode("ESCOLA");
    cell.appendChild(cellText);
    cell.scope = "col";
    row.appendChild(cell);

    cell = document.createElement("th");
    cellText = document.createTextNode("CIDADE");
    cell.appendChild(cellText);
    cell.scope = "col";
    row.appendChild(cell);

    cell = document.createElement("th");
    cellText = document.createTextNode("EDITAR");
    cell.appendChild(cellText);
    cell.scope = "col";
    row.appendChild(cell);

    cell = document.createElement("th");
    cellText = document.createTextNode("EXCLUIR");
    cell.appendChild(cellText);
    cell.scope = "col";
    row.appendChild(cell);

    tblhead.appendChild(row);

    tblhead.className = "thead-dark";
    tbl.appendChild(tblhead);


    for (var i = 0; i < LSEscola.length; i++) {
        var _result = JSON.parse(LSEscola[i]);
        var row = document.createElement("tr");
        var cell = document.createElement("th");

        var cellText = document.createTextNode("ID");
        cellText = document.createTextNode(_result.ID);
        cell.appendChild(cellText);
        cell.scope = "row";
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode("ESCOLA");
        cellText = document.createTextNode(_result.Escola);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(_result.Cidade);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        var btnEditar = document.createElement("BUTTON");
        btnEditar.innerHTML = "Editar";
        btnEditar.className = "btn btn-primary  btn-block";
        btnEditar.id = _result.ID;
        row.id = _result.ID + 1213;
        btnEditar.onclick = function () {
            if (editando == "N") { 
            num = parseInt(this.id);
            _id = num;

                document.getElementById(num + 1213).classList.add("bg-warning");
                for (var i = 0; i < LSEscola.length; i++) {
                    var _result = JSON.parse(LSEscola[i]);
                    if (_result.ID == _id) {
                        document.getElementById("IdEscola").value = _result.Escola;
                        for (var x = 0; x < LSCidade.length; x++) {
                            var _resultCidade = JSON.parse(LSCidade[x]);
                            if (_result.Cidade == _resultCidade.Cidade) {
                                document.getElementById("IdCidade").options[x].selected = true;
                            }
                        }
                    }
                }

                var buttonE = document.getElementById("btnCadastrar");
                buttonE.innerHTML = "Salvar";
                buttonE.className = "btn btn-success btn-block";
                operation = "E";

                //buttonE.setAttribute("id","asa");
                buttonC = document.getElementById("btnCancelar").innerHTML = "Cancelar";
                editando = "S";
            }
        };
        cell.appendChild(btnEditar);
        row.appendChild(cell);

        cell = document.createElement("td");
        var btnExcluir = document.createElement("BUTTON");
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.className = "btn btn-danger btn-block";
        btnExcluir.id = _result.ID;
        btnExcluir.onclick = function () {
            _id = this.id;
            if(editando == "N"){
                Excluir(_id);
            };
        };


        cell.appendChild(btnExcluir);
        row.appendChild(cell);
        row.scope = "row";
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tbl.className = "table";
    document.body.appendChild(tbl);
}
