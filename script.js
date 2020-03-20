// var person = prompt("Entrez votre nom", "votre nom");
// alert('Bonjour ' + person);

function fonction1() 
{
	var name = prompt("Entrez votre nom", "votre nom");
	var age = prompt("Entrez votre age", "votre age");
	alert('Bonjour ' + name + ' vous avez ' + age + ' ans.');
}

function fonction2() 
{
	var H = prompt("Entrez la longeur", "longeur");
	var W = prompt("Entrez la largeur", "largeur");
	var res = H * W;
	alert('resultat : ' + res);
}

 function fonction3() {

    var name = prompt("Entrez votre nom", "votre nom");
	var age = prompt("Entrez votre age", "votre age");
    if (name == "sohaib" && age == 19){
   	 alert('bonjour sohaib');
   } else {
   	 alert('bonjour inconnu');
   }
 }

function fonction4() {

	var nb = prompt("nb = ?", "Entrez un nombre ici");
	for (var i = 1; i <= nb; i++) {
		alert('i = '+ i);
	}

}

function fonction5() {

 var element = document.getElementById('cv');
 element.text = "Le texte a été changé";

}