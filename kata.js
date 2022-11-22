
// supression des voyelles dans une phrase

function remouvoyelle(str){
    return str.replace(/[aeiou]/ig, '')
    
}
    console.log(remouvoyelle("Bonjour tout le monde"));


//convertir une chaine to number "123" ==> 123
const stringToNumber = function(str){
    // put your code here
     
    return +str; // ou bien return number(str);
  }
  console.log("123");

  // supression des exclamation dans une phrase

  function removeExclamationMarks(s) {
  
    return s.replace(/[!]/ig, '');
   }
   console.log(removeExclamationMarks("Bonjour! tout! le monde!"));

   //_____________________________________________________________
   
   // convertire la lettre miniscule au majuscule ou bien l'inverse


   var conv = "RiM"; // string prototype ==> var conv = this.toString();
   var inverse = '';
   
   for(var i=0;i<conv.length;i++){
   if(conv[i]===conv[i].toLowerCase()){
      inverse += conv[i].toUpperCase();
     
   }else if(conv[i]===conv[i].toUpperCase()){
      inverse += conv[i].toLowerCase(); 
   }
   
   }console.log(inverse);
   
