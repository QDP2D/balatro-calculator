import { PlayingCard } from ".";

export interface BoardState {
    cardsInPlay: null
        | [PlayingCard]
        | [PlayingCard, PlayingCard]
        | [PlayingCard, PlayingCard, PlayingCard]
        | [PlayingCard, PlayingCard, PlayingCard, PlayingCard]
        | [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]
}