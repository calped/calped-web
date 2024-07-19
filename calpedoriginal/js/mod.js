//

// JavaScript:  LastModified date

//



var dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",

"Quinta-feira", "Sexta-feira", "Sábado");



var monName = new Array("janeiro", "fevereiro", "março", "abril", "maio",

"junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");



var modifDate = document.lastModified;	// See comments below

var modifTime = Date.parse(modifDate);	// Converts modifDate to msec

var modify = new Date();

modify.setTime(modifTime);		// Converts msec to a usable date



var whatYear = modify.getFullYear();

if (whatYear < 1990) {whatYear += 100; modify.setFullYear(whatYear);}



/*

	document.lastModified is a STRING:  mm/dd/yy hh:mm:ss



	The four lines above convert the "last modified" STRING into a

	"last modified" DATE.





*/



if (modifTime == 0) {		// If no "last modified" date is stored

	document.writeln("Desconhecida");

} else {

	var Year = modify.getYear();

	if ((Year < 300) && (Year > 90)) {Year = Year + 1900}

	if (Year <= 89) {Year = Year + 2000}

		// Year may be stored as 'yy' vs. 'yyyy'

/*document.writeln("<font face=\"Times New Roman, Times, serif\" size=\"-2\">" +*/

	document.writeln("" + dayName[modify.getDay()] +", " + modify.getDate() +" de " +	monName[modify.getMonth()] +  " de " + Year+". </font>");

}
