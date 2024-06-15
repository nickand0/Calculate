var loadwindow = addEventListener('DOMContentLoaded',function(){
   // recuperation d'element
   var Affichage = document.getElementById('affichage');

   // recuperation nombre
   var nombre1= document.getElementById('one')
   var nombre2= document.getElementById('two')
   var nombre3= document.getElementById('three')
   var nombre4= document.getElementById('four')
   var nombre5= document.getElementById('five')
   var nombre6= document.getElementById('six')
   var nombre7= document.getElementById('seven')
   var nombre8= document.getElementById('eight')
   var nombre9= document.getElementById('nine')
   var nombre0= document.getElementById('zero')
   var plusBouton= document.getElementById('plus')
   var minusBouton= document.getElementById('minus')
   var multiplicationBouton= document.getElementById('multiplication')
   var divisionBouton= document.getElementById('division')
   var virguleBouton= document.getElementById('virgule')
   var egalBouton= document.getElementById('egal')
   var etiquette = document.querySelector('.etiquette')
   //recuperation bouton clear
   var ClearBouton= document.getElementById('clear')

   //affichage en click
   nombre0.addEventListener('click',function(){
    Affichage.textContent += 0 ;
   });
   nombre1.addEventListener('click',function(){
    Affichage.textContent += 1;
   });

   nombre2.addEventListener('click',function(){
    Affichage.textContent += 2;
   });

   nombre3.addEventListener('click',function(){
    Affichage.textContent += 3;
   });

    nombre4.addEventListener('click',function(){
    Affichage.textContent += 4 ;
   });

   nombre5.addEventListener('click',function(){
    Affichage.textContent += 5;
   });

   nombre6.addEventListener('click',function(){
    Affichage.textContent += 6;
   });

    nombre7.addEventListener('click',function(){
    Affichage.textContent += 7;
   });

   nombre8.addEventListener('click',function(){
    Affichage.textContent += 8;
   });

   nombre9.addEventListener('click',function(){
    Affichage.textContent += 9;
   });

   plusBouton.addEventListener('click',function(){
    Affichage.textContent += " + "
   
   });
   minusBouton.addEventListener('click',function(){
      Affichage.textContent += " - "
     
   });

   multiplicationBouton.addEventListener('click',function(){
      Affichage.textContent += " * "
   });

   divisionBouton.addEventListener('click',function(){
      Affichage.textContent += " / "
   });

   virguleBouton.addEventListener('click',function(){
      Affichage.textContent += "."
   });

   ClearBouton.addEventListener('click',function(){
    Affichage.textContent=''
    etiquette.style.display='none'
   });   

   egalBouton.addEventListener('click',function(){
      try {
         let resultat = eval(Affichage.textContent);
         Affichage.textContent = resultat;
     } catch (e) {
         Affichage.textContent = 'Erreur';
         Affichage.style.color='red'

     }
     if (Affichage.textContent == 586){
      Affichage.textContent = "JE T'AIME ❤️";
      etiquette.style.display='block'
     }
   })
})

