// Fonction ==> permet de controler l'execution des instruction
// Fonction ==> permet de ne pas repeter le code 

function afficher(nom){

    console.log("Hello "+nom);
}

afficher("CDA Team");


// la somme de chaine de caractére exemple a="1" et b="3"

function sumStr(a,b) {

  
    //return  (parseInt(a) + parseInt(b)).toString();
     //return  String(parseInt(a) + parseInt(b));
  
     return String(+a + +b);
    }
    

    //multiplier un nombre donné par huit si c'est un nombre pair et par neuf sinon.

    function simpleMultiplication(number) {
  
  
        if(number%2==0){
          
          return(number*8);
      }else
      
          return(number*9);
        
      }

      // reverser un mots exemple hello ==>olleh

      function solution(str){
  
        var ch=str.split("").reverse().join("");
      
      return (ch);
        
      }

      //slice(1, -1)
      // suppresion de premier et dernier element de chaine de caractere exemple rim ===> i

      function removeChar(str){
  
  
        var supp=str.slice(1, -1);
       
       return(supp);
       
       };
       

       // stocker les langues sous forme de base de données

       function greet(language) {
        var database = {
         english: 'Welcome',
         czech: 'Vitejte',
         danish: 'Velkomst',
         dutch: 'Welkom',
         estonian: 'Tere tulemast',
         finnish: 'Tervetuloa',
         flemish: 'Welgekomen',
         french: 'Bienvenue',
         german: 'Willkommen',
         irish: 'Failte',
         italian: 'Benvenuto',
         latvian: 'Gaidits',
         lithuanian: 'Laukiamas',
         polish: 'Witamy',
         spanish: 'Bienvenido',
         swedish: 'Valkommen',
         welsh: 'Croeso'
       };
        return database[language] || database['english'];
     }



     //fonction qui fait operation des deux valeur 

     function basicOp(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } else if(operation === '-') {
      return value1 - value2;
    }  else if(operation === '*') {
      return value1 * value2;
    } else if(operation === '/'){
      return value1/value2;
      
    }
  }

  //Create a function that takes an integer as an argument and returns "Even" for even numbers
  // or "Odd" for odd numbers.
