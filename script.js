
//   exercice2

 function findAvg(gradesList){
    //une function reduce pour executer une fonction (calcule de sum)
    const add = arr => arr.reduce((a, b) => a + b, 0);
    var gradesList = [45, 55, 56, 5, 56,66,45,45];
    var sum = add(gradesList);
    console.log(`la somme des notes est ${sum}`);
  
  //la moyenne des valeur du tableau
   var  moyenne = sum / gradesList.length ;
        console.log(moyenne);
// les conditions sur  lees moyennes
     if(moyenne > 65){
       console.log("reussir");
      }
     else if(moyenne < 65){
        console.log( "echouer,vueillez répéter le cours");
      }
   
 }
 //retour de la fonction
 findAvg();

// exercice 1
let IMC1 =0;
let hummain1 ={
    NomPrenom :"diarra sekou",
    Masse : "85 kg",
    hauteur :"1.72 m",
    IMC1: function imc(){
        IMC1 =hummain1.Masse/(hummain1.hauteur*hummain1.hauteur);
    
    }
  
}
hummain1.IMC1;

   
let IMC2 = 0; 
let hummain2 ={
    NomPrenom :"ouattara issa",
    Masse : "45 kg",
    hauteur :"1.70 m",
    IMC2: function imc(){
        IMC2 =hummain2.Masse/(hummain2.hauteur*hummain2.hauteur);
    
    }

}
hummain2.IMC2;


function js(){
if(IMC1 > IMC2) {
    console.log(hummain1.NomPrenom);
    
}else {
    console.log(hummain2.NomPrenom);
}
}
js();