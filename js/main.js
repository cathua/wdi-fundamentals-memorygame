var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];

var cardsInPlay = [];

var checkForMatch = function (cardElement) {
  console.log(cardElement);
  cardElement.setAttribute('src', cards[cardElement.getAttribute('dataId')].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match! Nice! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
    }
    else{
      alert("Sorry, try again (◡△◡✿)");
    }
  }
}


var flipCard = function() {
  var x = this.getAttribute('dataId');
  console.log("User flipped " + cards[x].rank);
  cardsInPlay.push(cards[x].rank);
  console.log(cards[x].cardImage);
  console.log(cards[x].suit);
  console.log(this);
  checkForMatch(this);
}

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('dataId', i);
    // console.log(cardElement);
    //console.log(cardElement.getAttribute('dataId'));
    var board = document.getElementById("game-board");
    //console.log(board);
    cardElement.addEventListener("click", flipCard);

    board.appendChild(cardElement);
  }
  // return cards[i].cardImage;
}

createBoard();
