function NumericCampoPri(sText) {   
  var ValidChars = "0123456789.";   
  //lembrando ValidChars = "0123456789-/"; este é meu vetor   
  //é o -/ é o que estou valindo e que pode ser usado   
  //se não quiser é só vc tirar e colocar assim   
  //ValidChars = "0123456789";   
  var IsNumber=true;   
  var Char;   
  var tes
    
  var sText = document.formPadrao.CampoPeso.value;  
  //var sText = document.formPadraoPadrao.estatura.value; 
  tes = document.formPadrao.CampoPeso;   
  for (i = 0; i < sText.length && IsNumber == true; i++)   
     {   
     Char = sText.charAt(i);   
     if (ValidChars.indexOf(Char) == -1)   
        {   
        IsNumber = false;   
        alert("O campo 'Peso' tem que ser numérico e use o ponto, se for o caso, como separador decimal"+ "" + "-->'"+sText+"'-->" + "" +"é inválido.");   
        tes.focus();   
        document.formPadrao.CampoPeso.value="10";
		
		}   
     }   
  return IsNumber;   
  }

  
 

