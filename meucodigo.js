function calculaIMC() {
document.getElementById("peso").style.borderColor = "#000000";
document.getElementById("peso").style.backgroundColor = "#ffffff";
document.getElementById("altura").style.borderColor = "#000000";
document.getElementById("altura").style.backgroundColor = "#ffffff";
if(document.getElementById("peso").value == "") {
alert("Preencha o peso");
document.getElementById("peso").style.borderColor = "red";
document.getElementById("peso").style.backgroundColor = "#ffe5e5";
document.getElementById("peso").focus();
return false;
}
if(document.getElementById("altura").value == "") {
document.getElementById("altura").style.borderColor = "red";
document.getElementById("altura").style.backgroundColor = "#ffe5e5";
document.getElementById("altura").focus();
alert("Preencha a altura");
return false;
}

var peso = parseFloat(document.getElementById("peso").value);
var altura = parseFloat(document.getElementById("altura").value);
var resultado = peso/(altura*altura);
alert ("Seu IMC é: " + resultado);
return true;
}
