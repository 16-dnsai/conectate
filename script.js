var div1 = document.getElementsByClassName("container-1")[0];
var divg = document.getElementsByClassName("container-gen")[0];
function tamano(){
    // var div2 = document.getElementsByClassName("container-2")[0];
    // var div5 = ducumente.getElementsByClassName("container-5")[0];
    div1.style.width = "490px";
    div1.style.height = "550px";

    document.querySelector(".container-1").addEventListener("click", function(){document.querySelector(".container-gen").style.transform = "rotateY(180deg)";});
    document.querySelector(".container-1").addEventListener("click", function() {document.querySelector(".container-gen").style.transform = "rotateY(180deg)";});
}

function regresar(){
    div1.style.width = "380px";
    div1.style.height = "480px";
    document.querySelector(".container-1").addEventListener("click", function(){document.querySelector(".container-gen").style.transform = "rotateY(0deg)";});
    document.querySelector(".container-1").addEventListener("click", function() {document.querySelector(".container-gen").style.transform = "rotateY(0deg)";});
}