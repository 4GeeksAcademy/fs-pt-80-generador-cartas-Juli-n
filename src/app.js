/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //valores
  const valores = [
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `J`,
    `Q`,
    `K`,
    `A`
  ];
  const palos = [`heart`, `spade`, `club`, `diamond`];
  const simbolos = {
    heart: `♥`,
    spade: `♠`,
    club: `♣`,
    diamond: `♦`
  };

  function generarCarta() {
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

    const card = document.querySelector(`#card`);
    const paloUp = document.querySelector(`#paloUp`);
    const valoresDiv = document.querySelector(`#valores`);
    const paloDown = document.querySelector(`#paloDown`);
    console.log(valorAleatorio);

    paloUp.innerHTML = simbolos[paloAleatorio];
    valoresDiv.innerHTML = valorAleatorio;
    paloDown.innerHTML = simbolos[paloAleatorio];

    card.className = `card`;
    card.classList.add(paloAleatorio);
  }

  generarCarta();

  setInterval(generarCarta, 2000);
};
