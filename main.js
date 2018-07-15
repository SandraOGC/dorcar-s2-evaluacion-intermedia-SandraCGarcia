"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//   console.log('> ' + getRandomNumber(100));

var counterElement = document.querySelector(".contador");
var userNumber = document.querySelector(".number");
var prueba = document.querySelector(".boton");
var pista = document.querySelector(".text");
var randomNumber = getRandomNumber(100);

console.log(randomNumber);

var counter = 0;
var counterElement = document.querySelector('.contador');

function actualizaContador() {
  counter = counter + 1;
  counterElement.innerHTML = counter;
}

actualizaContador();

counterElement.innerHTML = counter;

function clue (texto){
    pista.innerHTML = texto;
  }
  

function juego() {
  var yourNumber = parseInt(userNumber.value);
  // console.log(yourNumber);
  if (yourNumber === randomNumber) {
    clue("Ganador");
    //ganador
  } else if (yourNumber < randomNumber) {
    clue("Te has quedado corto");
    userNumber.value = "";
    // counter = counter + 1;
    actualizaContador();
    // counterElement.innerHTML = counter;

    //corto
  } else {
    clue ("Te has pasado");
    userNumber.value = "";
    // counter = counter + 1;
    actualizaContador();
    // counterElement.innerHTML = counter;
  }
}

prueba.addEventListener("click", juego);

