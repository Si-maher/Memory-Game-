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

const cardMatches = () => {
  setTimeout(function() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("match");
      openCards[1].classList.add("match");
      matchedCards.push(openCards[0]);
      matchedCards.push(openCards[1]);
    } else {
      openCards[0].classList.remove("open", "show", "unclick");
      openCards[1].classList.remove("open", "show", "unclick");
    }
    // #####Winning game logic###
    if (matchedCards.length == 16) {
      winGame();
    }
    // ### Clears the open cards to check the next two ###

    openCards = [];
  }, 500);
};
// #### Shuffle function #####

const shuffle = array => {
  let currentIndex = array.length;
  temporaryValue;
  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
// ###### Timer functionality ####

const timeInterval = () => {
  interval = setInterval(timer, 1000);
};

const timer = () => {
  totalSeconds++;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutes.innerHTML = pad(parseInt(totalSeconds / 60));
};

const pad = val => {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
};
// #### Wining the game invokes this function ####

const winGame = () => {
  clearInterval(interval);
  if (matchedCards.length == 16) {
    modal.style.display = "block";
    totalMoves.innerHTML = moves;
    gameTime.innerHTML = minutes.innerHTML + ":" + seconds.innerHTML;
    stars.forEach(function(star) {
      if (!star.classList.contains("hidden")) {
        totalStarCounter++;
        starRating.innerHTML = totalStarCounter + "stars.";
      } else if (totalStarCounter == 1) {
        starRating.innerHTML = totalStarCounter + "star.";
      }
    });
  }
};

// ##### Clicking th play button on the modal starts a new game ###

newGameButton.addEventListener("click", function() {
  window.location = window.location;
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});
