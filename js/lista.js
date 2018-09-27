document.write('<script src="js\/dados.js" type="text\/javascript"><\/script>');
window.onload = function () {

};

$(document).ready(function () {

    setInterval(function () {
        if ($("#img3").attr("src") == "logo.png")
        {
            $("#img3").attr("src", "mais facil.jpg");
        }
        else
        {
            $("#img3").attr("src", "logo.png");
        }
    }, 4000);


});

