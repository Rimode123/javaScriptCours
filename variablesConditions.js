


/*
// Declaration du variable (entier , chaine de caractaire, boolean)

var nom="Rim";
var age=28;
var celib=true;

console.log("le nom :"+nom + ",l'age :"+age)
*/

/*
________________________________________________
calcule 
________________________________________________

var nomb1=10;
var nomb2=5;

var somme =nomb1 + nomb2 ;
var Soust =nomb1 - nomb2 ;
var div =nomb1 / nomb2 ;
var multi =nomb1 * nomb2 ;


console.log("la sommme est :"+somme)
*/
/*______________________________________

// Condition imbriqué


var pays="Maroc";


if(pays =="Maroc"){

    console.log("le pays est maroc");

}else if(pays=="France"){

    console.log("le pays est france");



}else{
    console.log("le pays est inconnu");
}
*/
 
/*
_____________________________________________
Les condition avec Switch 
_____________________________________________


var jour ="teletrav"

switch(jour){
    case "off":
    console.log("C'est Mercredi :)");
    break;

    case "off":
    console.log("C'est Dimanche");
    break;

}
*/
/*
_____________________________________________
Les opérateurs de comparaison 
_____________________________________________
*/

var age = 28;

if(age == 28){
    console.log("l'age est 28 ans");

}else if(age > 28){
    console.log("l'age est plus de 28 ans");
}else if(age < 28){
    console.log("l'age est moins de 28 ans");
}

// not equal
/* var age = 18;
if(age != 28){
    console.log("l'age pas egale à 28");
}*/

// si dans le nom il ya R ou r ==> plays banjo sinon does not play banjo
var name="fim";
if (name[0] === 'R' || name[0] === 'r') {
    console.log("plays banjo");
  } else {
  console.log("does not play banjo");
  }

//afficher un resultat qui renvoie la valeur multipliée par 50
// et augmentée de 6. Si la valeur saisie est une chaîne,
// elle doit renvoyer "Erreur".

var x=45;
if(typeof x=='number'){
//afficher x plus le clacule `${x}, ${x*50+6}`*

console.log(`${x}, ${x*50+6}`);
}else 
console.log(x+" ,erreur");


// Calcule les heures 
var h=3;
var m=5;
var s=3;

 console.log(h * 3600000 + m * 60000 + s * 1000) 