// Const and variables
let allCards = document.getElementsByClassName("card");
let cards = Array.from(allCards); //cards created from allcards
const cardList = document.querySelector(".cards-wrapper"); //card deck
let openCards = []; //empty array of cards
let matchedCards = []; // array of matches

const resetButton = document.querySelector(".reset");
// ###########################################
// ####Stars and Moves variables####
// #################################

let moves = 0;
let moveCounter = document.querySelector(".move-counter");
let stars = [...document.querySelectorAll(".fa-star")];

// ########################################
// ###Timer variables###
// ###########################

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let interval;
let totalSeconds = 0;

// #####################################
// ####Modal variables
// #####################################

const modal = document.querySelector(".modal");
const newGameButton = document.querySelector("#new-game");
const totalMoves = document.querySelector("#total-moves");
const gameTime = document.querySelector("#time");
const starRating = document.querySelector("#star-rating");
const closeButton = document.querySelector("#close-button");
let totalStarCounter = 0;

document.onLoad = gameStart();

// ######Function to start game######

const gameStart = () => {
  shuffle(cards);
  shuffledCards();
  moves = 0;
};

// ####### Loop over existing cards and display shuffled cards #####

const shuffledCards = () => {
  for (let i = 0; i < cards.length; i++) {
    cardList.innerHTML = "";
    // display shuffled cards
    for (let card of cards) {
      cardList.appendChild(card);
    }
  }
};
//##### Move counter functionality ####

const movesDisplay = () => {
  if (moves > 8) {
    stars[4].classList.add("hidden");
  }
  if (moves > 12) {
    stars[3].classList.add("hidden");
  }
  if (moves > 16) {
    stars[2].classList.add("hidden");
  }
  if (moves > 20) {
    stars[1].classList.add("hidden");
  }
};

// ####Reset current game####

resetButton.addEventListener("click", gameReset);
const gameReset = () => {
  window.location = window.location;
};

// ####Loop to add eventListeners to all cards####

for (let card of cards) {
  card.addEventListener("click", turnOver);
}

// ####Turn card over and display icon####

const turnOver = () => {
  // Timer starts on first move
  if (moves == 0) {
    timeInterval();
  }
  moves++;
  movesDisplay();
  moveCounter.innerHTML = moves;
  if (openCards.length < 2) {
    this.classList.add("open", "show", "unclick");
    openCards.push(this);
  }
  //######### Show cards in open array for 1 sec if there are two cards######

  if (openCards === 2) {
    cardMatches();
  }
};
// ###Check for matches ####
