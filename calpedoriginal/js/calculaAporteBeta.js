function calcula(form) {



form.CampoVolumeNaCl.value= "velocidade";

form.CampoVolumeKCl.value= "velocidade";
	
form.CampoVolumeMagnesio.value= "velocidade";
	
/*var Ca =  (eval(form.CampoCalcio.value)*eval(form.CampoPeso.value))/100;
var Ca  = Ca.toFixed(1);	
form.CampoVolumeCalcio.value= Ca;*/

var VT =  eval(form.CampoTaxaHidrica.value)*eval(form.CampoPeso.value);
var VT  = VT.toFixed(1);
form.CampoVolumeTotal.value= VT;
var velocidade = VT/24;
var velocidade = velocidade.toFixed(1);
form.CampoVelocidade.value= velocidade; 
    
var gglic = eval(form.CampoPeso.value) * eval(form.CampoVIG.value) * 1.44;

var calGlic = gglic * 3.4;
var calTotais = calGlic;
var calTotais = calTotais.toFixed(1);
form.CampoCaloriasTotais.value= calTotais; 

var ACR = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) *144) / VT;
var ACR = ACR.toFixed(1);    
form.CampoACR.value= ACR; 
    
var mEqTotalNa =  eval(form.CampoSodio.value) * eval(form.CampoPeso.value);
var mEqTotalK =  eval(form.CampoPotassio.value) * eval(form.CampoPeso.value);
var mEqTotalMg =  eval(form.CampoMagnesio.value) * eval(form.CampoPeso.value);
 

  

	

{
		//Condicional KCl

CondicionalKCl = document.getElementById("idSelectKCl").value

switch (CondicionalKCl) {
		
case "10":
		
mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value))/1.34;
var mlKCl  = mlKCl.toFixed(1);
form.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "10%";
                form.CampoApresentacaoKCl.value="10"; 
break

case "15":
mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value))/2;
var mlKCl  = mlKCl.toFixed(1);
form.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "15%";
                form.CampoApresentacaoKCl.value="15"; 
break
case "19.1":
mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value))/2.5;
var mlKCl  = mlKCl.toFixed(1);
form.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "19.1%";
                form.CampoApresentacaoKCl.value="19.1"; 
break
case "20":
mlKCl = (eval(form.CampoPeso.value) * eval(form.CampoPotassio.value))/2.68;
var mlKCl  = mlKCl.toFixed(1);
form.CampoVolumeKCl.value= mlKCl;
document.getElementById("messageKCl").innerHTML = "20%";
        form.CampoApresentacaoKCl.value="20"; 
break
default:
alert("Valor inexistente");
}
}
{	
			//Condicional NaCl

CondicionalNaCl = document.getElementById("idSelectNaCl").value

switch (CondicionalNaCl) {
/*case "0.9":

mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value)/0.154);
var mlNaCl  = mlNaCl.toFixed(1);
form.CampoVolumeNaCl.value= mlNaCl;
document.getElementById("messageNaCl").innerHTML = "0.9%";
break*/

case "10":

mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value))/1.7;
var mlNaCl  = mlNaCl.toFixed(1);
form.CampoVolumeNaCl.value= mlNaCl;
		
document.getElementById("messageNaCl").innerHTML = "10%";
form.CampoApresentacaoNaCl.value="10"; 
break
case "17.5":

mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value))/3;
var mlNaCl  = mlNaCl.toFixed(1);
form.CampoVolumeNaCl.value= mlNaCl;

		
document.getElementById("messageNaCl").innerHTML = "17.5%";	
        form.CampoApresentacaoNaCl.value="17.5"; 
break
case "20":

mlNaCl = (eval(form.CampoPeso.value) * eval(form.CampoSodio.value))/3.3;
var mlNaCl  = mlNaCl.toFixed(1);
form.CampoVolumeNaCl.value= mlNaCl;
document.getElementById("messageNaCl").innerHTML = "20%";
 form.CampoApresentacaoNaCl.value="20";       
break
default:
alert("Valor inexistente");
}
}	

	
	{
		//Condicional MgSO4

CondicionalMgSO4 = document.getElementById("idSelectMgSO4").value

switch (CondicionalMgSO4) {
		
case "10":
mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value))/0.8;
var mlMgSO4  = mlMgSO4.toFixed(1);
form.CampoVolumeMagnesio.value= mlMgSO4;
document.getElementById("messageMgSO4").innerHTML = "10%";
form.CampoApresentacaoMagnesio.value="10";
break

case "20":
mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value))/1.6;
var mlMgSO4  = mlMgSO4.toFixed(1);
form.CampoVolumeMagnesio.value= mlMgSO4;
document.getElementById("messageMgSO4").innerHTML = "20%";
form.CampoApresentacaoMagnesio.value="20";       
break

case "50":
mlMgSO4 = (eval(form.CampoPeso.value) * eval(form.CampoMagnesio.value))/4;
var mlMgSO4  = mlMgSO4.toFixed(1);
form.CampoVolumeMagnesio.value= mlMgSO4;
document.getElementById("messageMgSO4").innerHTML = "50%";
form.CampoApresentacaoMagnesio.value="50";
		
break
default:
alert("Valor inexistente");
}
}
	
	
	{
		//Condicional Calcio

CondicionalCalcio = document.getElementById("idSelectCalcio").value

switch (CondicionalCalcio) {
		
case "Gluconato":
mlCalcio = (eval(form.CampoPeso.value) * eval(form.CampoCalcio.value))/100;
var mlCalcio  = mlCalcio.toFixed(1);
form.CampoVolumeCalcio.value= mlCalcio;
document.getElementById("messageCalcio").innerHTML = "Gluconato de Cálcio 10%";
var mEqTotalCa =  ((eval(form.CampoCalcio.value) * eval(form.CampoPeso.value))*0.46)/100; 
form.CampoApresentacaoCalcio.value="Gluconato de Calcio 10";
break

case "Cloreto":
mlCalcio = (eval(form.CampoPeso.value) * eval(form.CampoCalcio.value))/300;
var mlCalcio  = mlCalcio.toFixed(1);
form.CampoVolumeCalcio.value= mlCalcio;
document.getElementById("messageCalcio").innerHTML = "Cloreto de Cálcio 10%";
var mEqTotalCa =  ((eval(form.CampoCalcio.value) * eval(form.CampoPeso.value))*1.36)/100;  
form.CampoApresentacaoCalcio.value="Cloreto de Calcio 10";
break

		
break
default:
alert("Valor inexistente");
}
}
    

    

    
  

var volumesobra = VT - (eval(form.CampoVolumeNaCl.value)+eval(form.CampoVolumeKCl.value)+eval(form.CampoVolumeCalcio.value)+eval(form.CampoVolumeMagnesio.value));

var ACF = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) *144) / volumesobra;

//form.CampoTeste.value= ACF; 

var dif5 = Math.abs(ACF - 5);
var dif10 = Math.abs(10 - ACF);
var dif25 = Math.abs(25 - ACF);
var dif50 = Math.abs(50 - ACF);
var Sdif510 = dif5 + dif10;
var Sdif525 = dif5 + dif25;
var Sdif550 = dif5 + dif50;

var mlGlicose5a = (volumesobra/Sdif510)*dif10;
var mlGlicose5a = mlGlicose5a.toFixed(1);
var mlGlicose5b = (volumesobra/Sdif525)*dif25;
var mlGlicose5b = mlGlicose5b.toFixed(1);
var mlGlicose5c = (volumesobra/Sdif550)*dif50;
var mlGlicose5c = mlGlicose5c.toFixed(1);
var mlGlicose10 = (volumesobra/Sdif510)*dif5;
var mlGlicose10 = mlGlicose10.toFixed(1);
var mlGlicose25 = (volumesobra/Sdif525)*dif5;
var mlGlicose25 = mlGlicose25.toFixed(1);
var mlGlicose50 = (volumesobra/Sdif550)*dif5;
var mlGlicose50 = mlGlicose50.toFixed(1);

    
  
    
    {
		//Condicional SolucaoaA

CondicionalSolucaoA = document.getElementById("idselectSolucaoA").value

switch (CondicionalSolucaoA) {
		
case "0":
/*mlSoluçãoA = eval(form.CampoPeso.value)/2;
var mlSoluçãoA  = mlSoluçãoA .toFixed(1);*/
/*form.CampoVolumeSolucaoA.value= mlSoluçãoA ;*/
//document.getElementById("messageSoluçãoA").innerHTML = "Água Destilada";
break

case "5":

form.CampoVolumeSolucaoA.value= mlGlicose5a ;
        
document.getElementById("messageSoluçãoA").innerHTML = "S. Glic. 5%";
       
  form.CampoApresentacaoSolucaoA.value="Soro Glicosado 5";           
break

break
default:
alert("Valor inexistente");
}
}

    
{
		//Condicional SolucaoaB

CondicionalSolucaoB = document.getElementById("idselectSolucaoB").value

switch (CondicionalSolucaoB) {
		
/*case "5":
lSoluçãoB = eval(form.CampoPeso.value)/2;
var mlSoluçãoB  = mlSoluçãoB .toFixed(1);
form.CampoVolumeSolucaoB.value= mlSoluçãoB ;
document.getElementById("messageSoluçãoB").innerHTML = "S. Glic. 5%";
break*/

case "10":
/*mlSoluçãoB = eval(form.CampoPeso.value)/1;
var mlSoluçãoB  = mlSoluçãoB .toFixed(1);
form.CampoVolumeSolucaoB.value= mlSoluçãoB ;*/

form.CampoVolumeSolucaoB.value= mlGlicose10 ;
form.CampoVolumeSolucaoA.value= mlGlicose5a ;
document.getElementById("messageSoluçãoB").innerHTML = "S. Glic. 10%";
form.selectSolucaoA.value = 5 ; 
form.selectSolucaoA.disable;
document.getElementById("messageSoluçãoA").innerHTML = "S. Glic. 5%";
form.CampoApresentacaoSolucaoA.value="Soro Glicosado 5"; 
 form.CampoApresentacaoSolucaoB.value="Soro Glicosado 10";        
 
        
break

case "25":
/*lSoluçãoB = eval(form.CampoPeso.value)/2;
var mlSoluçãoB  = mlSoluçãoB .toFixed(1);
form.CampoVolumeSolucaoB.value= mlSoluçãoB ;*/

form.CampoVolumeSolucaoB.value= mlGlicose25;
form.CampoVolumeSolucaoA.value= mlGlicose5b ;
document.getElementById("messageSoluçãoB").innerHTML = "S. Glic. 25%";
form.selectSolucaoA.value = 5 ; 
form.selectSolucaoA.disable;
document.getElementById("messageSoluçãoA").innerHTML = "S. Glic. 5%"; 
 form.CampoApresentacaoSolucaoA.value="Soro Glicosado 5"; 
 form.CampoApresentacaoSolucaoB.value="Glicose 25";   
        
break

case "50":
/*mlSoluçãoB = eval(form.CampoPeso.value)/1;
var mlSoluçãoB  = mlSoluçãoB .toFixed(1);
form.CampoVolumeSolucaoB.value= mlSoluçãoB ;*/

form.CampoVolumeSolucaoB.value= mlGlicose50;
form.CampoVolumeSolucaoA.value= mlGlicose5c ;
document.getElementById("messageSoluçãoB").innerHTML = "S. Glic. 50%";
form.selectSolucaoA.value = 5 ; 
form.selectSolucaoA.disable;
document.getElementById("messageSoluçãoA").innerHTML = "S. Glic. 5%";   
 form.CampoApresentacaoSolucaoA.value="Soro Glicosado 5"; 
 form.CampoApresentacaoSolucaoB.value="Glicose 50";             

break

break
default:
alert("Valor inexistente");
}
}      
    
if (ACF < 5 ){

dif0 = Math.abs(ACF-0)
dif5a = Math.abs(5-ACF)
Sdif05 = dif0 + dif5a
Sdif50 = dif5a + dif0

mlABD = (volumesobra/Sdif05)*dif5a;
mlABD = mlABD.toFixed(1);

mlGlicose5d = (volumesobra/Sdif50)*dif0;
mlGlicose5d = mlGlicose5d.toFixed(1);

form.CampoVolumeSolucaoB.value= mlGlicose5d;
form.CampoVolumeSolucaoA.value= mlABD ;

document.getElementById("messageSoluçãoA").innerHTML = "Água Destilada";  
document.getElementById("messageSoluçãoB").innerHTML = "S. Glic. 5%"; 
document.getElementById("idselectSolucaoA").value="0"; 
     form.CampoApresentacaoSolucaoA.value="Agua destilada"; 
 form.CampoApresentacaoSolucaoB.value="Soro glicosado 5"; 
}
    
    
if (ACF > 26 ){
form.CampoVolumeSolucaoB.value= 0;
form.CampoVolumeSolucaoA.value= 0;
alert("Concentração de glicose muito alta, impossibilitado de calcular!")
document.form.CampoVIG.value="5";
//document.form.CampoVIG.value();   
form.CampoOsmolaridade.value= "0sm";
}

var osm = (((gglic*5.5)+(mEqTotalNa + mEqTotalK + mEqTotalMg +mEqTotalCa))/ VT)*1000;

var osm = osm.toFixed(0);
form.CampoOsmolaridade.value= osm; 
if (osm > 600){
alert("Osmolaridade alta, recomendado um acesso vascular central!")    
}
    

	
}