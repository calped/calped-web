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

function NumericCampoTaxaHidrica(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.form.CampoTaxaHidrica.value;  
  
  tes = document.form.CampoTaxaHidrica;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Taxa hídrica' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.form.CampoTaxaHidrica.value="70";
		
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

  
 

