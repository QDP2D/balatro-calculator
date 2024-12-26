import { PlaybleHand, PlayingCard } from ".";

export class BoardState {
    cardsInPlay: PlaybleHand
    // cardsInHand: Array<PlayingCards>
    chips: number = 0
    mult: number = 0


    constructor(
        initialCardsInPlay: PlaybleHand = []
    ) {
        this.cardsInPlay = initialCardsInPlay
    }

    evaluateHand() {

    }


}