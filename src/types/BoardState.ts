import { PlayingCard } from ".";

export type PlaybleHand = [] 
    | [PlayingCard] 
    | [PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]

export class BoardState {
    cardsInPlay: PlaybleHand
    // cardsInHand: Array<PlayingCards>


    constructor(initialCardsInPlay: PlaybleHand = []) {
        this.cardsInPlay = initialCardsInPlay
    }

    isHighCard() {
        if (this.cardsInPlay.length === 1) return true
    }

}