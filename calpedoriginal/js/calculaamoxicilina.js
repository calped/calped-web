function calcula(formAmoxicilina) {

var dosetotal = eval(formAmoxicilina.CampoPeso.value) * eval(formAmoxicilina.CampoDose.value);
//var doseliquida = dosetotal;
//formAcidoNalidixico.CampoDoseMg.value= dosetotal;	

//Condicional Padrão

Padrao = document.getElementById("idSelectApresentacao").value

switch (Padrao) {
case "125":
var dosediaml = (dosetotal * 5) /125;
var doseml = dosediaml /3;
var dosediamg = dosetotal ;
var dosemg = dosediamg /3;
var dosemg  = dosemg.toFixed(1);		
formAmoxicilina.CampoDoseMg.value= dosemg;
var doseml  = doseml.toFixed(1);		
formAmoxicilina.CampoDoseMl.value= doseml;
document.getElementById("messagePadrao").innerHTML = "125mg/5ml";
break		

case "250":
var dosediaml = (dosetotal * 5) /250;
var doseml = dosediaml /3;
var dosediamg = dosetotal ;
var dosemg = dosediamg /3;
var dosemg  = dosemg.toFixed(1);		
formAmoxicilina.CampoDoseMg.value= dosemg;
var doseml  = doseml.toFixed(1);		
formAmoxicilina.CampoDoseMl.value= doseml;
document.getElementById("messagePadrao").innerHTML = "250 mg/5ml";
break

case "400":
var dosediaml = (dosetotal * 5) /400;
var doseml = dosediaml /2;
var dosediamg = dosetotal ;
var dosemg = dosediamg /2;
var dosemg  = dosemg.toFixed(1);		
formAmoxicilina.CampoDoseMg.value= dosemg;
var doseml  = doseml.toFixed(1);		
formAmoxicilina.CampoDoseMl.value= doseml;
document.getElementById("messagePadrao").innerHTML = "BD 400 mg/5ml";
break

case "500":
var dosediaml = (dosetotal * 5) /500;
var doseml = dosediaml /3;
var dosediamg = dosetotal ;
var dosemg = dosediamg /3;
var dosemg  = dosemg.toFixed(1);		
formAmoxicilina.CampoDoseMg.value= dosemg;
var doseml  = doseml.toFixed(1);		
formAmoxicilina.CampoDoseMl.value= doseml;
document.getElementById("messagePadrao").innerHTML = "500 mg/5ml";
break

case "500c":
		
formAmoxicilina.CampoDoseMg.value= 500;
formAmoxicilina.CampoDoseMl.value= 500;
document.getElementById("messagePadrao").innerHTML = "Comp. 500 mg";
break

case "875":
		
formAmoxicilina.CampoDoseMg.value= 875;
formAmoxicilina.CampoDoseMl.value= 875;
document.getElementById("messagePadrao").innerHTML = "Comp. 875 mg";
break

default:
alert("Valor inexistente");
}

	
}

