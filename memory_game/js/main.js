
let cards = [ "queen", "queen", "king", "king" ];

let cardsInPlay = [];

//function flipCard (cardID) {

	let cardOne = cards[1];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);

	for (var i = 0; i < cardsInPlay.length; ++i) {
			if (cardsInPlay[0]===cardsInPlay[1]) {
				alert ("You found a match!")
			} else {
				alert ("Sorry, try again.")
			}
		}
		
//	console.log ("User flipped " + cards[cardID]);	




