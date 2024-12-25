import { PlayingCard } from ".";

type ValidHand = [] | [PlayingCard] | [PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]

export class BoardState {
    cardsInPlay: ValidHand

    constructor(initialCardsInPlay: ValidHand = []) {
        this.cardsInPlay = initialCardsInPlay
    }

    evaluateHand() {

    }
}