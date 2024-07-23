function calcula(formHV){
	
		//Condicional NaCl

CondicionalNaCl = document.getElementById("idSelectNaCl").value

switch (CondicionalNaCl) {
case "0.9":

if ((formHV.CampoPeso.value) < 10.1){
var Glicose = eval(formHV.CampoPeso.value) * 100;
}
if ((formHV.CampoPeso.value) > 10 && (formHV.CampoPeso.value) < 20.1){
var Glicose = 1000 + ((eval(formHV.CampoPeso.value) - 10)*50);
}
if ((formHV.CampoPeso.value) > 20 ){
var Glicose = 1500 + ((eval(formHV.CampoPeso.value) - 20)*20);
}		
		
mlNaCl = (eval(formHV.CampoPeso.value) * 2.5)/0.154;
var mlNaCl  = mlNaCl.toFixed(1);
formHV.CampoVolumeNaCl.value= mlNaCl;

/*var mlEletrolitos = eval(formHV.CampoVolumeNaCl.value)	+eval(formHV.CampoVolumeKCl.value);
var difEletrolitos = Glicose - mlEletrolitos;
formHV.CampoGlicose5.value= difEletrolitos;*/			
		
document.getElementById("messageNaCl").innerHTML = "0.9%";
break
case "10":

if ((formHV.CampoPeso.value) < 10.1){
var Glicose = eval(formHV.CampoPeso.value) * 100;
}
if ((formHV.CampoPeso.value) > 10 && (formHV.CampoPeso.value) < 20.1){
var Glicose = 1000 + ((eval(formHV.CampoPeso.value) - 10)*50);
}
if ((formHV.CampoPeso.value) > 20 ){
var Glicose = 1500 + ((eval(formHV.CampoPeso.value) - 20)*20);
}


mlNaCl = (eval(formHV.CampoPeso.value) * 2.5)/1.7;
var mlNaCl  = mlNaCl.toFixed(1);
formHV.CampoVolumeNaCl.value= mlNaCl;
		
/*var mlEletrolitos = eval(formHV.CampoVolumeNaCl.value)	+eval(formHV.CampoVolumeKCl.value);
var difEletrolitos = Glicose - mlEletrolitos;
formHV.CampoGlicose5.value= difEletrolitos;*/	
		
document.getElementById("messageNaCl").innerHTML = "10%";

break
case "17.5":

if ((formHV.CampoPeso.value) < 10.1){
var Glicose = eval(formHV.CampoPeso.value) * 100;
}
if ((formHV.CampoPeso.value) > 10 && (formHV.CampoPeso.value) < 20.1){
var Glicose = 1000 + ((eval(formHV.CampoPeso.value) - 10)*50);
}
if ((formHV.CampoPeso.value) > 20 ){
var Glicose = 1500 + ((eval(formHV.CampoPeso.value) - 20)*20);
}

mlNaCl = (eval(formHV.CampoPeso.value) * 2.5)/3;
var mlNaCl  = mlNaCl.toFixed(1);
formHV.CampoVolumeNaCl.value= mlNaCl;

/*var mlEletrolitos = eval(formHV.CampoVolumeNaCl.value)	+eval(formHV.CampoVolumeKCl.value);
var difEletrolitos = Glicose - mlEletrolitos;
formHV.CampoGlicose5.value= difEletrolitos;	*/		
		
document.getElementById("messageNaCl").innerHTML = "17.5%";	
break
case "20":

if ((formHV.CampoPeso.value) < 10.1){
var Glicose = eval(formHV.CampoPeso.value) * 100;
}
if ((formHV.CampoPeso.value) > 10 && (formHV.CampoPeso.value) < 20.1){
var Glicose = 1000 + ((eval(formHV.CampoPeso.value) - 10)*50);
}
if ((formHV.CampoPeso.value) > 20 ){
var Glicose = 1500 + ((eval(formHV.CampoPeso.value) - 20)*20);
}

mlNaCl = (eval(formHV.CampoPeso.value) * 2.5)/3.3;
var mlNaCl  = mlNaCl.toFixed(1);
formHV.CampoVolumeNaCl.value= mlNaCl;
		
/*var mlEletrolitos = eval(formHV.CampoVolumeNaCl.value)	+eval(formHV.CampoVolumeKCl.value);
var difEletrolitos = Glicose - mlEletrolitos;
formHV.CampoGlicose5.value= difEletrolitos;	*/
		
document.getElementById("messageNaCl").innerHTML = "20%";	
break
default:
alert("Valor inexistente");
}
	
	//Condicional KCl

CondicionalKCl = document.getElementById("idSelectKCl").value

switch (CondicionalKCl) {
case "10":
mlKCl = (eval(formHV.CampoPeso.value) * 2)/1.34;
var mlKCl  = mlKCl.toFixed(1);
formHV.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "10%";
break
case "15":
mlKCl = (eval(formHV.CampoPeso.value) * 2)/2;
var mlKCl  = mlKCl.toFixed(1);
formHV.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "15%";
break
case "19.1":
mlKCl = (eval(formHV.CampoPeso.value) * 2)/2.5;
var mlKCl  = mlKCl.toFixed(1);
formHV.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "19.1%";	
break
case "20":
mlKCl = (eval(formHV.CampoPeso.value) * 2)/2.68;
var mlKCl  = mlKCl.toFixed(1);
formHV.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "20%";	
break
default:
alert("Valor inexistente");
}	
	

	
var mlEletrolitos = eval(formHV.CampoVolumeNaCl.value)	+eval(formHV.CampoVolumeKCl.value);
var difEletrolitos = Glicose - mlEletrolitos;
formHV.CampoGlicose5.value= difEletrolitos;
	
var volumetotal = eval(formHV.CampoGlicose5.value)+ eval(formHV.CampoVolumeKCl.value)+ eval(formHV.CampoVolumeNaCl.value);
var volumetotal  = volumetotal.toFixed(1);
formHV.CampoVolumeTotal.value= volumetotal;

var velocidade = (eval(formHV.CampoVolumeTotal.value)/24);
var velocidade  = velocidade.toFixed(1);
formHV.CampoVelocidade.value= velocidade;

/*condicional etapas*/	
if (volumetotal < 501){
var Etapas =  1;
formHV.CampoEtapas.value = Etapas;
}
if ((volumetotal > 500) && (volumetotal < 1001)) {
var Etapas= 2;
formHV.CampoEtapas.value = Etapas;
}
if ((volumetotal > 1000) && (volumetotal < 1501)){
var Etapas=  3;
formHV.CampoEtapas.value = Etapas;
}
if ((volumetotal> 1500) && (volumetotal < 2001)){
var Etapas = 4;
formHV.CampoEtapas.value = Etapas;
}
if(volumetotal > 2000){
var Etapas =  5;
formHV.CampoEtapas.value = Etapas;
} 
var EtapasGlicose = eval(formHV.CampoGlicose5.value)/Etapas;
var EtapasGlicose  = EtapasGlicose.toFixed(1);
formHV.CampoEtapasGlicose5.value = EtapasGlicose;

var EtapasNaCl = eval(formHV.CampoVolumeNaCl.value)/Etapas;
var EtapasNaCl  = EtapasNaCl.toFixed(1);
formHV.CampoEtapasNaCl.value = EtapasNaCl;
	
var EtapasKCl = eval(formHV.CampoVolumeKCl.value)/Etapas;
var EtapasKCl  = EtapasKCl.toFixed(1);
formHV.CampoEtapasKCl.value = EtapasKCl;
	
var EtapasVolume = eval(formHV.CampoVolumeTotal.value)/Etapas;
var EtapasVolume  = EtapasVolume.toFixed(1);
formHV.CampoEtapasVolume.value = EtapasVolume;	
	
formHV.CampoEtapasVelocidade.value = eval(formHV.CampoVelocidade.value);
	var gotas = eval(formHV.CampoEtapasVelocidade.value)/3;
	var gotas  = gotas.toFixed(1);
	formHV.CampoEtapasGotas.value = gotas;
	
		
}