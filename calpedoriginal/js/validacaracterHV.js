function NumericCampoPeso() {   
   var ValidChars = "0123456789.";   
   var IsNumber = true;   
   var Char;   
   var sText = document.getElementById('idCampoPeso').value;  
   var tes = document.getElementById('idCampoPeso');   

   for (var i = 0; i < sText.length && IsNumber == true; i++) {   
       Char = sText.charAt(i);   
       if (ValidChars.indexOf(Char) == -1) {   
           IsNumber = false;   
           alert("O campo 'Peso' tem que ser numérico e use o ponto, se for o caso, como separador decimal: '"+sText+"' é inválido.");   
           tes.focus();   
           tes.value = "10";  
       }   
   }   
   return IsNumber;   
} 
 

  
 

