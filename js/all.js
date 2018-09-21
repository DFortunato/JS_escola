document.write('<script src="js\/dados.js" type="text\/javascript"><\/script>');

window.onload = function () {

    SelectList();

};

function Cadastrar() {
    var escola = document.getElementById("IdEscola");

    if (!escola.value) {
        escola.className = "form-control is-invalid";
        var aviso = document.getElementById('AvisoEscola');
        aviso.className = "alert-danger";
    }
    else {
        Adicionar();
        window.location.href = "TelaCadastro.html";
    }
}







