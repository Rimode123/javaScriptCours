// REMPLACER LES LETTRES 

var nom="Rim";

console.log(nom.replace("R","B"));

//________________________________________

//Number Methods Math.pow ,Math.abs ,Math.floor,toFixed,Math.ceil

var n=3;
// 3*3

console.log(Math.pow(3,2));

// -3 ==> 3

var n=-3;
console.log(Math.abs(n));

// 7.5 ===> 7 INGNORER LA VERGULE

var n=7.5;
console.log(Math.floor(n));

// 7.56432 ==> 7.56

var n=7.56432;
console.log(n.toFixed(2));

// si x au carré est supérieur à 1000, 
//retournez It\'s hotter than the sun!!, 
//sinon, retournez Help yourself to a honeycomb Yorkie for the glovebox.


if(Math.pow(x,2) > 1000){
    return 'It\'s hotter than the sun!!';
  }else{
    return 'Help yourself to a honeycomb Yorkie for the glovebox.';
    }



    //combien de littres par heur 


    function litres(time) {
  
      return Math.floor(time*0.5);
    }
