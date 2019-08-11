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
