
// tableau ==> une variable qui ne permet de stocker plusieur valeur à la fois
// tableau ==> les valeurs sont indexés (ils commencent par l'indice 0)

var ville = ["valenciennes","lille","paris"];

//console.log("les villes est "+ ville);

var first =ville[0];

console.log("la premiere ville est: "+first);

/* var second =ville[1];
console.log("la deuxieme ville est: "+second); */

// Combien de villes dans le tableau ==> length

var size = ville.length ;
console.log("il y a " +size +" villes dans le tableau");

// Ajouter une ville 

console.log(ville.push("lyon"));
console.log("les villes est "+ ville);

// Ajouter la ville au debut du tableau

console.log(ville.unshift("lyon"));


//savoir quel index la ville lille

console.log(ville.indexOf("lille"));

//Supprimer le dernier element dans le tableau 

console.log(ville.pop());// SUPPRESSION DE LA VILLE LYON ==>DELETE THE LAST ITEM

// DELETE THE FIRST ITEM ==> supprimer le premier element dans le tableau 

console.log(ville.shift());

//arr(5) // => [0,1,2,3,4]
// 10 ====> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var n="10";

var monkey = [];
  for (i = 1; i <= n; i++) {
    monkey.push(i);
  }
  console.log(monkey);



