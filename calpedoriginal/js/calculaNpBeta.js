function calcula(form) {


      {
		//Condicional Dieta

CondicionalDieta = document.getElementById("idselectDieta").value

switch (CondicionalDieta) {
		
case "12":
var Dieta = (eval(form.CampoDieta.value)*12)/eval(form.CampoPeso.value)
break

case "8":
var Dieta = (eval(form.CampoDieta.value)*8)/eval(form.CampoPeso.value)
break

case "4":
var Dieta = (eval(form.CampoDieta.value)*4)/eval(form.CampoPeso.value)
break

default:
alert("Valor inexistente");
}
}
    
     {
		//Condicional Antimicrobiano1

CondicionalAntimicrobiano1 = document.getElementById("idselectAntimicrobiano1").value

switch (CondicionalAntimicrobiano1) {
		
case "4":
var Antimicrobiano1 = (eval(form.CampoAntimicrobiano1.value)*4)/eval(form.CampoPeso.value)
break

case "3":
var Antimicrobiano1 = (eval(form.CampoAntimicrobiano1.value)*3)/eval(form.CampoPeso.value)
break

case "2":
var Antimicrobiano1 = (eval(form.CampoAntimicrobiano1.value)*2)/eval(form.CampoPeso.value)
break

case "1":
var Antimicrobiano1= (eval(form.CampoAntimicrobiano1.value)*1)/eval(form.CampoPeso.value)
break

default:
alert("Valor inexistente");
}
}
    
 {
		//Condicional Antimicrobiano2

CondicionalAntimicrobiano2 = document.getElementById("idselectAntimicrobiano2").value

switch (CondicionalAntimicrobiano2) {
		
case "4":
var Antimicrobiano2 = (eval(form.CampoAntimicrobiano2.value)*4)/eval(form.CampoPeso.value)
break

case "3":
var Antimicrobiano2 = (eval(form.CampoAntimicrobiano2.value)*3)/eval(form.CampoPeso.value)
break

case "2":
var Antimicrobiano2 = (eval(form.CampoAntimicrobiano2.value)*2)/eval(form.CampoPeso.value)
break

case "1":
var Antimicrobiano2= (eval(form.CampoAntimicrobiano2.value)*1)/eval(form.CampoPeso.value)
break

default:
alert("Valor inexistente");
}
} 
    
{
		//Condicional Antimicrobiano3

CondicionalAntimicrobiano3 = document.getElementById("idselectAntimicrobiano3").value

switch (CondicionalAntimicrobiano3) {
		
case "4":
var Antimicrobiano3 = (eval(form.CampoAntimicrobiano3.value)*4)/eval(form.CampoPeso.value)
break

case "3":
var Antimicrobiano3 = (eval(form.CampoAntimicrobiano3.value)*3)/eval(form.CampoPeso.value)
break

case "2":
var Antimicrobiano3 = (eval(form.CampoAntimicrobiano3.value)*2)/eval(form.CampoPeso.value)
break

case "1":
var Antimicrobiano3= (eval(form.CampoAntimicrobiano3.value)*1)/eval(form.CampoPeso.value)
break

default:
alert("Valor inexistente");
}
} 
    
OutrasDrogas1 = eval(form.CampoOutrasDrogas1.value)/eval(form.CampoPeso.value)
OutrasDrogas2 = eval(form.CampoOutrasDrogas2.value)/eval(form.CampoPeso.value) 
    
var Descontos= Dieta + Antimicrobiano1+ Antimicrobiano2+ Antimicrobiano3+OutrasDrogas1+OutrasDrogas2; 
var Descontos = Descontos.toFixed(1);
form.CampoDescontos.value =Descontos;
    
var THO =Dieta;
var THO = THO.toFixed(1);
form.CampoTHO.value = THO;
var THM =Antimicrobiano1+ Antimicrobiano2+ Antimicrobiano3+OutrasDrogas1+OutrasDrogas2;
var THM = THM.toFixed(1);
form.CampoTHM.value = THM;

    
form.CampoDescontos.style.backgroundColor = '#FFF5EE';  
var TaxaHidrica =  eval(form.CampoTaxaHidricaTotal.value) - Descontos;
var TaxaHidrica = TaxaHidrica.toFixed(1);
form.CampoTaxaHidrica.value =TaxaHidrica;
form.CampoTaxaHidrica.style.backgroundColor = '#F0FFF0';     
var VT =  eval(form.CampoTaxaHidrica.value)*eval(form.CampoPeso.value);
   
    
var gglic = eval(form.CampoPeso.value) * eval(form.CampoVIG.value) * 1.44;



var ACR = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) *144) / VT;
var ACR = ACR.toFixed(1);    
form.CampoACR.value= ACR; 
    
var mEqTotalNa =  eval(form.CampoSodio.value) * eval(form.CampoPeso.value);
var mEqTotalK =  eval(form.CampoPotassio.value) * eval(form.CampoPeso.value);
var mEqTotalMg =  eval(form.CampoMagnesio.value) * eval(form.CampoPeso.value);
 

 	  	//Condicional Oligo


	Oligo = document.getElementById("idSelectOligoelementos").value

	switch (Oligo) {
	case "0":

        var mlOligoR = eval(form.CampoOligoelementos.value) * eval(form.CampoPeso.value);
        var mlOligo = mlOligoR.toFixed(1);
        form.CampoVolumeOligoelementos.value =mlOligo;
        document.getElementById("messageOligoelementos").innerHTML = "Ped-elemnent";
        form.CampoApresentacaoOligoelementos.value="Ped-elemnent"; 
        break
        
	case "1":
	  var mlOligoR = eval(form.CampoOligoelementos.value) * eval(form.CampoPeso.value);
	  var mlOligo = mlOligoR.toFixed(1);
            form.CampoVolumeOligoelementos.value =mlOligo;
		document.getElementById("messageOligoelementos").innerHTML =  "Oliped 4";
            form.CampoApresentacaoOligoelementos.value="Oliped 4";
		break
	case "2":
	  var mlOligoR = eval(form.CampoOligoelementos.value) * eval(form.CampoPeso.value);
	  var mlOligo = mlOligoR.toFixed(1);
            form.CampoVolumeOligoelementos.value =mlOligo;
		document.getElementById("messageOligoelementos").innerHTML = "Olig-trat-Pediátrico";
            form.CampoApresentacaoOligoelementos.value="Olig-trat-Pediatrico";
		break
	case "3":
	  var mlOligoR = eval(form.CampoOligoelementos.value) * eval(form.CampoPeso.value);
	  var mlOligo = mlOligoR.toFixed(1);
            form.CampoVolumeOligoelementos.value =mlOligo;
		document.getElementById("messageOligoelementos").innerHTML =  "Politrace 4";
            form.CampoApresentacaoOligoelementos.value="Politrace 4";
		break
	case "4":
	  var mlOligoR = eval(form.CampoOligoelementos.value) * eval(form.CampoPeso.value);
	  var mlOligo = mlOligoR.toFixed(1);
            form.CampoVolumeOligoelementos.value =mlOligo;
		document.getElementById("messageOligoelementos").innerHTML = "Politrace 5";
           form.CampoApresentacaoOligoelementos.value="Politrace 5";  
		break		
	default:
		alert("Valor inexistente")
	} 

	//Condicional Vitaminas

		
	Vitaminas = document.getElementById("idSelectVitaminas").value

	switch (Vitaminas) {
	case "0":
            	  var mlFrutovitamR = eval(form.CampoVitaminas.value) * eval(form.CampoPeso.value);
	  var mlFrutovitam = mlFrutovitamR.toFixed(1);
            form.CampoVolumeVitaminas.value=mlFrutovitam;
		document.getElementById("messageVitaminas").innerHTML = "Frutovena";
            form.CampoApresentacaoVitaminas.value="Frutovena";
		break
            
	 
	case "1":
	  var mlFrutovitamR = eval(form.CampoVitaminas.value) * eval(form.CampoPeso.value);
	  var mlFrutovitam = mlFrutovitamR.toFixed(1);
            form.CampoVolumeVitaminas.value=mlFrutovitam;
		document.getElementById("messageVitaminas").innerHTML = "Frutovitam - Máx: 10ml";
            form.CampoApresentacaoVitaminas.value="Frutovitam";
		break
	case "2":
    
    	  var mlFrutovitamR = eval(form.CampoVitaminas.value) * eval(form.CampoPeso.value);
	  var mlFrutovitam = mlFrutovitamR.toFixed(1);
            form.CampoVolumeVitaminas.value=mlFrutovitam;
		document.getElementById("messageVitaminas").innerHTML = "MVI Opoplex Pediatr - Máx: 5ml";
            form.CampoApresentacaoVitaminas.value="MVI Opoplex Pediatr";

		break
	case "3":
    
    	  var mlFrutovitamR = eval(form.CampoVitaminas.value) * eval(form.CampoPeso.value);
	  var mlFrutovitam = mlFrutovitamR.toFixed(1);
            form.CampoVolumeVitaminas.value=mlFrutovitam;
		document.getElementById("messageVitaminas").innerHTML = "Cerne 12 - Máx: 5ml";
    form.CampoApresentacaoVitaminas.value="Cerne 12";
	
		break
		
	default:
		alert("Valor inexistente")
	}

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
var conversCa = (eval(form.CampoCalcio.value)* 9.3)/100;
var dosePsugerida = conversCa/52.7;
var dosePsugerida = dosePsugerida.toFixed(1);
form.CampoTotalDoseSugeridaFosforo.value= dosePsugerida;  
form.CampoApresentacaoCalcio.value="Gluconato de Calcio 10";
break

case "Cloreto":
mlCalcio = (eval(form.CampoPeso.value) * eval(form.CampoCalcio.value))/300;
var mlCalcio  = mlCalcio.toFixed(1);
form.CampoVolumeCalcio.value= mlCalcio;
document.getElementById("messageCalcio").innerHTML = "Cloreto de Cálcio 10%";
var mEqTotalCa =  ((eval(form.CampoCalcio.value) * eval(form.CampoPeso.value))*1.36)/100; 
var conversCa = (eval(form.CampoCalcio.value)* 27.2)/100;
var dosePsugerida = conversCa/52.7;
var dosePsugerida = dosePsugerida.toFixed(1);
form.CampoTotalDoseSugeridaFosforo.value= dosePsugerida;      
form.CampoApresentacaoCalcio.value="Cloreto de Calcio 10";
break

		
break
default:
alert("Valor inexistente");
}
}
  
 
    {
		//Condicional Aminoacidos

CondicionalAminoacidos = document.getElementById("idSelectAminoacidos").value

switch (CondicionalAminoacidos) {
		
case "0":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/10;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Aminoped 10%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Aminoped 10";
break

case "1":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/10;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Aminosteril 10%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Aminosteril 10";
break

case "2":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/8;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Aminosteril Hepa 8%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Aminosteril Hepa 8";
break

case "3":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/6.5;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Aminosteril Nefro 6,5%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Aminosteril Nefro 6.5";
break

case "4":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/10;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Aminoplasmal 10%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Aminoplasmal 10";
break

case "5":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/4;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Hepatoamino 4%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Hepatoamino 4";
break

case "6":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/6.9;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Nefroamino 6,9%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Nefroamino 6.9";
break

case "7":
mlAminoacidos = ((eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value))*100)/10;
var mlAminoacidos  = mlAminoacidos.toFixed(1);
form.CampoVolumeAminoacidos.value= mlAminoacidos;
document.getElementById("messageAminoacidos").innerHTML = "Nephrotect 10%";
var gTotalAminoacidos =  (eval(form.CampoAminoacidos.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoAminoacidos.value="Nephrotect 10";
break
		
break
default:
alert("Valor inexistente");
}
}
    
    
    
    {
		//Condicional Lipidios

CondicionalLipidios = document.getElementById("idSelectLipidios").value

switch (CondicionalLipidios) {
		
case "0":
mlLipidios = ((eval(form.CampoPeso.value) * eval(form.CampoLipidios.value))*100)/10;
var mlLipidios  = mlLipidios.toFixed(1);
form.CampoVolumeLipidios.value= mlLipidios;
document.getElementById("messageLipidios").innerHTML = "Lipofundin MCT/LCT 10%";
var gTotalLipidios =  (eval(form.CampoLipidios.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoLipidios.value="Lipofundin MCT-LCT 10";
break

case "1":
mlLipidios = ((eval(form.CampoPeso.value) * eval(form.CampoLipidios.value))*100)/20;
var mlLipidios  = mlLipidios.toFixed(1);
form.CampoVolumeLipidios.value= mlLipidios;
document.getElementById("messageLipidios").innerHTML = "Lipofundin MCT/LCT 20%";
var gTotalLipidios =  (eval(form.CampoLipidios.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoLipidios.value="Lipofundin MCT-LCT 20";
break

case "2":
mlLipidios = ((eval(form.CampoPeso.value) * eval(form.CampoLipidios.value))*100)/10;
var mlLipidios  = mlLipidios.toFixed(1);
form.CampoVolumeLipidios.value= mlLipidios;
document.getElementById("messageLipidios").innerHTML = "Lipovenos PLR 10%";
var gTotalLipidios =  (eval(form.CampoLipidios.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoLipidios.value="Lipovenos PLR 10";
break

case "3":
mlLipidios = ((eval(form.CampoPeso.value) * eval(form.CampoLipidios.value))*100)/10;
var mlLipidios  = mlLipidios.toFixed(1);
form.CampoVolumeLipidios.value= mlLipidios;
document.getElementById("messageLipidios").innerHTML = "Lipovenos MCT 10%";
var gTotalLipidios =  (eval(form.CampoLipidios.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoLipidios.value="Lipovenos MCT 10";
break

case "4":
mlLipidios = ((eval(form.CampoPeso.value) * eval(form.CampoLipidios.value))*100)/20;
var mlLipidios  = mlLipidios.toFixed(1);
form.CampoVolumeLipidios.value= mlLipidios;
document.getElementById("messageLipidios").innerHTML = "Lipovenos MCT 20%";
var gTotalLipidios =  (eval(form.CampoLipidios.value) * eval(form.CampoPeso.value));
form.CampoApresentacaoLipidios.value="Lipovenos MCT 20";
break

		
break
default:
alert("Valor inexistente");
}
}
    

	{
		//Condicional Fosforo

CondicionalFosforo = document.getElementById("idSelectFosforo").value

switch (CondicionalFosforo) {
		
case "0":
mlFosforo = (eval(form.CampoPeso.value) * eval(form.CampoFosforo.value))/2;
var mlFosforo  = mlFosforo.toFixed(1);
form.CampoVolumeFosforo.value= mlFosforo;
document.getElementById("messageFosforo").innerHTML = "Fosfato de potássio 2mEq/ml";
var mEqTotalFosforo =  (eval(form.CampoFosforo.value) * eval(form.CampoPeso.value));

TotalPotassioFosforo =  ((eval(form.CampoVolumeFosforo.value) * 2)/eval(form.CampoPeso.value));       
TotalPotassio = eval(form.CampoPotassio.value)+TotalPotassioFosforo;
var TotalPotassio  = TotalPotassio.toFixed(1);        
form.CampoTotalPotassio.value=TotalPotassio;
        
form.CampoApresentacaoFosforo.value="Fosfato de potassio 2mEq-ml";        
        

break

case "1":
mlFosforo = (eval(form.CampoPeso.value) * eval(form.CampoFosforo.value))/2.9;
var mlFosforo  = mlFosforo.toFixed(1);
form.CampoVolumeFosforo.value= mlFosforo;
document.getElementById("messageFosforo").innerHTML = "Fosfato monoácido de potássio 25%";
var mEqTotalFosforo =  (eval(form.CampoFosforo.value) * eval(form.CampoPeso.value)); 

TotalPotassioFosforo =  ((eval(form.CampoVolumeFosforo.value) * 1.9)/eval(form.CampoPeso.value));       
TotalPotassio = eval(form.CampoPotassio.value)+TotalPotassioFosforo;
var TotalPotassio  = TotalPotassio.toFixed(1);        
form.CampoTotalPotassio.value=TotalPotassio; 
        
form.CampoApresentacaoFosforo.value="Fosfato monoacido de potassio 25 por cento";
break
                        
case "2":
mlFosforo = (eval(form.CampoPeso.value) * eval(form.CampoFosforo.value))/1.8;
var mlFosforo  = mlFosforo.toFixed(1);
form.CampoVolumeFosforo.value= mlFosforo;
document.getElementById("messageFosforo").innerHTML = "Fosfato diácido de potássio 25%";
var mEqTotalFosforo =  eval(form.CampoFosforo.value) * eval(form.CampoPeso.value); 
        
TotalPotassioFosforo =  ((eval(form.CampoVolumeFosforo.value) * 1.8)/eval(form.CampoPeso.value));       
TotalPotassio = eval(form.CampoPotassio.value)+TotalPotassioFosforo;
var TotalPotassio  = TotalPotassio.toFixed(1);        
form.CampoTotalPotassio.value=TotalPotassio; 
        
form.CampoApresentacaoFosforo.value="Fosfato diacido de potassio 25 por cento";
break                        

		
break
default:
alert("Valor inexistente");
}
}   
  

var volumesobra = VT - (eval(form.CampoVolumeNaCl.value)+eval(form.CampoVolumeKCl.value)+eval(form.CampoVolumeCalcio.value)+eval(form.CampoVolumeMagnesio.value)+eval(form.CampoVolumeAminoacidos.value)+eval(form.CampoVolumeLipidios.value)+eval(form.CampoVolumeOligoelementos.value)+eval(form.CampoVolumeVitaminas.value));

var ACF = (eval(form.CampoVIG.value) * eval(form.CampoPeso.value) *144) / volumesobra;
var ACF  = ACF.toFixed(1); 
form.CampoACF.value= ACF; 

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
 
    
    
    
    
var gTotalLIP = (eval(form.CampoPeso.value) * eval(form.CampoLipidios.value));
var gTotalAA = (eval(form.CampoPeso.value) * eval(form.CampoAminoacidos.value));
    
/*outra forma de calcular osmolaridade:
    Osmolaridade (mOsm/L)
Osm=(AX8)+(GX7)+(Nax2)+(Px0,2)-50
G=Glicose (g/L); A=aminoácidos (g/L);
Na=sódio (mEq/L; P=fósforo (mg/L)*/
    
var osm = (((gglic*5.5)+ (gTotalAA*11)+(gTotalLIP*0.3)+(mEqTotalNa + mEqTotalK + mEqTotalMg + mEqTotalCa))/ VT)*1000;

var osm = osm.toFixed(0);
form.CampoOsmolaridade.value= osm; 
if (osm > 600){
alert("Osmolaridade alta, recomendado um acesso vascular central!")    
}
    

var calLIP = gTotalLIP * 9;
var calGlic = gglic * 3.4;
var gN = gTotalAA * 0.16;
var calAA = gTotalAA * 4;
var relCNPgN = ((calLIP + calGlic)*6.25)/gTotalAA;
var relCNPgN = relCNPgN.toFixed(0);
var calTotais = calAA + calLIP + calGlic;
var calTotais = calTotais.toFixed(1);
form.CamporelCNPgN.value = "1/"+relCNPgN;
form.CampoCaloriasTotais.value= calTotais; 
    
var VTr =(eval(form.CampoVolumeSolucaoA.value)+eval(form.CampoVolumeSolucaoB.value)+eval(form.CampoVolumeAminoacidos.value)+eval(form.CampoVolumeLipidios.value)+eval(form.CampoVolumeNaCl.value)+eval(form.CampoVolumeKCl.value)+eval(form.CampoVolumeCalcio.value)+eval(form.CampoVolumeMagnesio.value)+eval(form.CampoVolumeOligoelementos.value)+eval(form.CampoVolumeVitaminas.value)+eval(form.CampoVolumeFosforo.value));
var VTr  = VTr.toFixed(1);
form.CampoVolumeTotal.value= VTr;
var velocidade = VTr/24;
var velocidade = velocidade.toFixed(1);
form.CampoVelocidade.value= velocidade; 
	
var CalcioTotal= (mEqTotalCa * 1000 )/VT; 
var CalcioTotal  = CalcioTotal.toFixed(1);
form.CampoConcentracaoTotalCalcio.value = CalcioTotal;

var mEqCalcioMagnesioTotal = mEqTotalCa + mEqTotalMg;
var CalcioMagnesioTotal= (mEqCalcioMagnesioTotal * 1000)/VT;
var CalcioMagnesioTotal  = CalcioMagnesioTotal.toFixed(1);
form.CampoConcentracaoTotalCalcioMagnesio.value = CalcioMagnesioTotal;
    
if (CalcioTotal > 10){
//alert("Cálcio total maior que 10mEq/l - Risco de instabilidade da solução!")
    
//form.CampoConcentracaoTotalCalcio.style.backgroundColor= '#FFC0C';
//    form.n3.style.backgroundColor = '#CC0000';
    form.CampoConcentracaoTotalCalcio.style.backgroundColor = '#FFF5EE';

}  
    
if (CalcioMagnesioTotal > 16){
    
form.CampoConcentracaoTotalCalcioMagnesio.style.backgroundColor = '#FFF5EE';
    
} 
    //prescrição com fator de correção
var FC =  (eval(form.CampoVolumeEquipo.value)/ VTr)+1;  
var FC  = FC.toFixed(2); 
form.CampoFC.value = FC;
    
var FCSolucaoA =  eval(form.CampoVolumeSolucaoA.value)*FC; 
var FCSolucaoA = FCSolucaoA.toFixed(1);
form.CampoFCSolucaoA.value= FCSolucaoA;
    
var FCSolucaoB =  eval(form.CampoVolumeSolucaoB.value)*FC; 
var FCSolucaoB = FCSolucaoB.toFixed(1);
form.CampoFCSolucaoB.value= FCSolucaoB;
    
    
var FCVolumeAminoacidos =  eval(form.CampoVolumeAminoacidos.value)*FC; 
var FCVolumeAminoacidos = FCVolumeAminoacidos.toFixed(1);
var FCVolumeLipidios =  eval(form.CampoVolumeLipidios.value)*FC; 
var FCVolumeLipidios = FCVolumeLipidios.toFixed(1); 
    
    
var FCVolumeNaCl =eval(form.CampoVolumeNaCl.value)*FC; 
var FCVolumeNaCl =	FCVolumeNaCl.toFixed(1);
var FCVolumeKCl =eval(form.CampoVolumeKCl.value)*FC; 
var FCVolumeKCl =	FCVolumeKCl.toFixed(1);
var FCVolumeCalcio =eval(form.CampoVolumeCalcio.value)*FC; 
var FCVolumeCalcio =FCVolumeCalcio.toFixed(1);	
var FCVolumeMagnesio =eval(form.CampoVolumeMagnesio.value)*FC; 
var FCVolumeMagnesio =  FCVolumeMagnesio.toFixed(1);  
var FCVolumeFosforo =eval(form.CampoVolumeFosforo.value)*FC;
var FCVolumeFosforo =  FCVolumeFosforo.toFixed(1);  
var FCVolumeOligoelementos =eval(form.CampoVolumeOligoelementos.value)*FC; 
var FCVolumeOligoelementos = FCVolumeOligoelementos.toFixed(1);   
var FCVolumeVitaminas =eval(form.CampoVolumeVitaminas.value)*FC; 
var FCVolumeVitaminas =  FCVolumeVitaminas .toFixed(1);
    
form.CampoFCAminoacidos.value= FCVolumeAminoacidos;   
form.CampoFCLipidios.value= FCVolumeLipidios;
form.CampoFCSodio.value= FCVolumeNaCl;
form.CampoFCPotassio.value= FCVolumeKCl;    
form.CampoFCCalcio.value= FCVolumeCalcio;
form.CampoFCMagnesio.value= FCVolumeMagnesio;
form.CampoFCFosforo.value= FCVolumeFosforo;   
form.CampoFCOligoelementos.value= FCVolumeOligoelementos;
form.CampoFCVitaminas.value= FCVolumeVitaminas;

    
}