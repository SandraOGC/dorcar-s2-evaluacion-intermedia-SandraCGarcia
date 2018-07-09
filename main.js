'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
//   console.log('> ' + getRandomNumber(100));

var counterElement= document.querySelector(".contador");
var userNumber= document.querySelector(".number");
var prueba= document.querySelector(".boton");
var pista= document.querySelector(".text");
var randomNumber= getRandomNumber(100);

console.log (randomNumber);

var counter= 0;

counterElement.innerHTML= counter;

function juego(){
    var yourNumber=parseInt(userNumber.value);
    // console.log(yourNumber);
    if (yourNumber===randomNumber){
        pista.innerHTML= "Ganador";
        //ganador
    }else if (yourNumber<randomNumber){
        pista.innerHTML= "Te has quedado corto";
        userNumber.value= "";
        counter= counter + 1;
        counterElement.innerHTML= counter;

        //corto
    }else{
        pista.innerHTML= "Te has pasado";
        userNumber.value= "";
        counter= counter + 1;
        counterElement.innerHTML= counter;
        
    }
}


prueba.addEventListener("click", juego);








//   var random= getRandomNumber;

// var chooseNumber= document.querySelector('.number');
// var button = document.querySelector('.boton');

// function play(){
//     console.log(chooseNumber.value);
//     if (chooseNumber = getRandomNumber) {
//         console.log = 'Bien'; 
//     }
// }
// button.addEventListener('click', play);


// // function contador(){
// //     for (var i=0; i++);

// //     }

//   var miAleatorio= (getRandomNumber(100));

//   varContador.innerHTML