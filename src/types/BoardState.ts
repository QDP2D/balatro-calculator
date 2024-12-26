import { PlayingCard } from ".";

export type ValidHand = [] 
    | [PlayingCard] 
    | [PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]

export class BoardState {
    cardsInPlay: ValidHand
    // cardsInHand: Array<PlayingCards>


    constructor(initialCardsInPlay: ValidHand = []) {
        this.cardsInPlay = initialCardsInPlay
    }

}