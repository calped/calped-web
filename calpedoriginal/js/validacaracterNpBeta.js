function NumericCampoPeso(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoPeso.value;  
  
  tes = document.form.CampoPeso;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Peso' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoPeso.value="2";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoTaxaHidricaTotal(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoTaxaHidricaTotal.value;  
  
  tes = document.form.CampoTaxaHidricaTotal;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Taxa hídrica total' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoTaxaHidricaTotal.value="70";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoVIG(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoVIG.value;  
  
  tes = document.form.CampoVIG;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'VIG' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoVIG.value="5";
		
		}   
     }   
  return IsNumber;   
  }



function NumericCampoDieta(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoDieta.value;  
  
  tes = document.form.CampoDieta;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Dieta' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoDieta.value="0";
		
		}   
     }   
  return IsNumber;   
  }


function NumericCampoAntimicrobiano1(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoAntimicrobiano1.value;  
  
  tes = document.form.CampoAntimicrobiano1;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Antimicrobiano 1' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoAntimicrobiano1.value="0";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoAntimicrobiano2(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoAntimicrobiano2.value;  
  
  tes = document.form.CampoAntimicrobiano2;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Antimicrobiano 2' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoAntimicrobiano2.value="0";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoAntimicrobiano3(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoAntimicrobiano3.value;  
  
  tes = document.form.CampoAntimicrobiano3;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Antimicrobiano 3' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoAntimicrobiano3.value="0";
		
		}   
     }   
  return IsNumber;   
  }



function NumericCampoOutrasDrogas1(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoOutrasDrogas1.value;  
  
  tes = document.form.CampoOutrasDrogas1;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Outras medicações 1' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoOutrasDrogas1.value="0";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoOutrasDrogas2(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoOutrasDrogas2.value;  
  
  tes = document.form.CampoOutrasDrogas2;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Outras medicações 2' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoOutrasDrogas2.value="0";
		
		}   
     }   
  return IsNumber;   
  }



function NumericCampoAminoacidos(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoAminoacidos.value;  
  
  tes = document.form.CampoAminoacidos;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Aminoácidos' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoAminoacidos.value="1";
		
		}   
     }   
  return IsNumber;   
  }



function NumericCampoLipidios(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoLipidios.value;  
  
  tes = document.form.CampoLipidios;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Lipídios' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoLipidios.value="1";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoSodio(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoSodio.value;  
  
  tes = document.form.CampoSodio;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Sódio' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoSodio.value="2";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoPotassio(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoPotassio.value;  
  
  tes = document.form.CampoPotassio;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Potassio' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoPotassio.value="2";
		
		}   
     }   
  return IsNumber;   
  }

function NumericCampoCalcio(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoCalcio.value;  
  
  tes = document.form.CampoCalcio;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Cálcio' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoCalcio.value="200";
		
		}   
     }   
  return IsNumber;   
  }
function NumericCampoMagnesio(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoMagnesio.value;  
  
  tes = document.form.CampoMagnesio;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Magnésio' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoMagnesio.value="0.5";
		
		}   
     }   
  return IsNumber;   
  }

  
  function NumericCampoFosforo(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoFosforo.value;  
  
  tes = document.form.CampoFosforo;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Fósforo' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoFosforo.value="0.7";
		
		}   
     }   
  return IsNumber;   
  }
 
 
 function NumericCampoOligoelementos(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoOligoelementos.value;  
  
  tes = document.form.CampoOligoelementos;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Oligoelementos' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoOligoelementos.value="0.2";
		
		}   
     }   
  return IsNumber;   
  }



function NumericCampoVitaminas(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoVitaminas.value;  
  
  tes = document.form.CampoVitaminas;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Vitaminas' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoVitaminas.value="2";
		
		}   
     }   
  return IsNumber;   
  }

