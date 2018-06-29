'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  console.log('> ' + getRandomNumber(100));

  var random= getRandomNumber;

var chooseNumber= document.querySelector('.number');
var button = document.querySelector('.boton');

function play(){
    console.log(chooseNumber.value);
    if (chooseNumber = getRandomNumber) {
        console.log = 'Bien'; 
    }
}
button.addEventListener('click', play);


// function contador(){
//     for (var i=0; i++);

//     }

  var varContador= 1;

  varContador.innerHTML