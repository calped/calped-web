function NumericCampoPeso() {
   var ValidChars = "0123456789.";
   var IsNumber = true;
   var Char;
   
   var sText = document.getElementById('CampoPeso').value;
   var tes = document.getElementById('CampoPeso');
   for (i = 0; i < sText.length && IsNumber == true; i++) {
       Char = sText.charAt(i);
       if (ValidChars.indexOf(Char) == -1) {
           IsNumber = false;
           alert("O campo 'Peso' tem que ser numérico e use o ponto, se for o caso, como separador decimal. '" + sText + "' é inválido.");
           tes.focus();
           tes.value = "10";
       }
   }
   return IsNumber;
}

function NumericCampoDose() {
   var ValidChars = "0123456789.";
   var IsNumber = true;
   var Char;
   
   var sText = document.getElementById('CampoDose').value;
   var tes = document.getElementById('CampoDose');
   for (i = 0; i < sText.length && IsNumber == true; i++) {
       Char = sText.charAt(i);
       if (ValidChars.indexOf(Char) == -1) {
           IsNumber = false;
           alert("O campo 'Dose' tem que ser numérico e use o ponto, se for o caso, como separador decimal. '" + sText + "' é inválido.");
           tes.focus();
           tes.value = "50";
       }
   }
   return IsNumber;
}
