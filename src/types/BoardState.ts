import { PlayingCard } from ".";

// export interface BoardStateInterface {
//     cardsInPlay: null
//         | []
//         | [PlayingCard]
//         | [PlayingCard, PlayingCard]
//         | [PlayingCard, PlayingCard, PlayingCard]
//         | [PlayingCard, PlayingCard, PlayingCard, PlayingCard]
//         | [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]
// }

type ValidHand = [] | [PlayingCard] | [PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard, PlayingCard]| [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]

export class BoardState {
    cardsInPlay: ValidHand

    constructor(initialCardsInPlay: ValidHand = []) {
        this.cardsInPlay = initialCardsInPlay
    }

    evaluateHand() {
        
    }
}