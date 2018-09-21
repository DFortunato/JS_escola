document.write('<script src="js\/dados.js" type="text\/javascript"><\/script>');
window.onload = function () {

    ConfirmarEditar(1);
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode("_result.Escola");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
};


