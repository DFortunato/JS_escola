
var operacao = "A"; //"A"=Adição; "E"=Edição
var indice_selecionado = -1; //Índice do item selecionado na lista
var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
tbClientes = JSON.parse(tbClientes); // Converte string para objeto

if (tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];

window.onload = function(){
    Listar();
    $("#btnResetar").hide();
};

Restored = function(){
    operacao = "A";
    $("#btnSalvar").val("Salvar");
    $("#btnResetar").hide();
};

function Adicionar() {
    var teste = 0;
    for (var i in tbClientes) {
        var cli = JSON.parse(tbClientes[i]);
        teste = cli.Codigo;
    };
    if (teste == null) // verifica se o resultado do id é nulo, se sim ele seta 0
        teste = 0;

    var cliente = JSON.stringify({
        Codigo: teste+1,
        Cidade: $("#txtCidade").val(),
        Estado: $("#txtEstado").val(),
    });
    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    Listar();
    return true;
}

EditarSalvar = function () {
    if (operacao == "A") {
        Adicionar();

    } else
        Editar();
};

function Editar() {
    tbClientes[indice_selecionado] = JSON.stringify({
        Codigo: indice_selecionado,
        Cidade: $("#txtCidade").val(),
        Estado: $("#txtEstado").val(),
    });//Altera o item selecionado na tabela
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}


function Excluir() {
    tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");
}


function Listar() {
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead class='thead-dark'>" +
        "   <tr>" +
        "   <th scope='col'>Ações</th>" +
        "   <th scope='col'>Código</th>" +
        "   <th scope='col'>Cidade</th>" +
        "   <th scope='col'>Estado</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tbClientes) {
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='edit.png' alt='" + i + "'class='btnEditar' oncliclk='e'/>  |  <img src='delete.png' alt='" + i + "' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>" + cli.Codigo + "</td>");
        $("#tblListar tbody").append("<td>" + cli.Cidade + "</td>");
        $("#tblListar tbody").append("<td>" + cli.Estado + "</td>");
        $("#tblListar tbody").append("</tr>");
    }
}



$(document).ready(function () {
    $("#frmCadastro").on("submit", function () {
        if (operacao == "A")
            return Adicionar();
        else{
            $("#btnSalvar").val("Salvar");
            return Editar();
        }
            
    });

    $("#tblListar").on("click", ".btnEditar", function () {
        operacao = "E";
        indice_selecionado = parseInt($(this).attr("alt"));
        var cli = JSON.parse(tbClientes[indice_selecionado]);
        $("#txtCidade").val(cli.Cidade);
        $("#txtEstado").val(cli.Estado);
        $("#txtCodigo").attr("readonly", "readonly");
        $("#txtCidade").focus();
        $("#btnSalvar").val("Alterar");
        $("#btnResetar").show();
    });

    $("#tblListar").on("click", ".btnExcluir", function () {
        indice_selecionado = parseInt($(this).attr("alt"));

        Excluir();
        Listar();
    });

});