' use strict';
// Selecting elemets
const player0Elemne = document.querySelector('.player--0');
const player1Elemne = document.querySelector('.player--1');
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.querySelector('#current--0');
const current1Eement = document.querySelector('#current--1');

let scores, currentScore, activPlayer, playing;

// Starting condition function (intz)
const intz = function () {
  scores = [0, 0];
  currentScore = 0;
  activPlayer = 0;
  playing = true;

  diceElement.classList.add('hidden');
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  player0Elemne.classList.remove('player--winner');
  player1Elemne.classList.remove('player--winner');
  player0Elemne.classList.add('player--active');
  player1Elemne.classList.remove('player--active');
  current0Element.textContent = 0;
  current1Eement.textContent = 0;
};
intz();

const switchPlayer = function () {
  document.querySelector(`#current--${activPlayer}`).textContent = 0;
  activPlayer = activPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Elemne.classList.toggle('player--active');
  player1Elemne.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice; // = currentScore = currentScore + dice
      console.log(currentScore);
      document.querySelector(`#current--${activPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
// Holding functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activPlayer] += currentScore;
    document.querySelector(`#score--${activPlayer}`).textContent =
      scores[activPlayer];
    if (scores[activPlayer] >= 100) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
// New game functionlity / Starting condition
btnNew.addEventListener('click', intz);
