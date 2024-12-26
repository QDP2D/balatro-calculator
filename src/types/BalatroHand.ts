import { PlayingCard } from "./playingCard"

export type PlaybleHand = []
    | [PlayingCard]
    | [PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard]
    | [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard]

export class BalatroHand {
    cardsInHand: PlaybleHand = []
    handType: BalatroHandType = null
    handContains: Array<BalatroHandType> = []

    constructor(cardsInHand: PlaybleHand, handType: BalatroHandType) {
        this.cardsInHand = cardsInHand
        this.handType = handType
    }

    evaluateHand() {
        if (this.cardsInHand.length === 1) { 
            this.handType = HIGH_CARD
            return
        }
        if (this.cardsInHand.length === 2) {
            this.cardsInHand[0].rank === this.cardsInHand[1].rank
                ? this.handType = PAIR 
                : HIGH_CARD
            return
        }
    }
}

export interface BalatroHandInterface {
    baseChips: number
    baseMult: number
}

// +1 mult / +10 chips
export const HIGH_CARD: BalatroHandInterface = {
    baseChips: 5,
    baseMult: 1,
}

// +1 mult / +15 chips
export const PAIR: BalatroHandInterface = {
    baseChips: 10,
    baseMult: 2,
}

// +1 mult / +20 chips
export const TWO_PAIR: BalatroHandInterface = {
    baseChips: 10,
    baseMult: 2,
}

// +2 mult / +20 chips
export const THREE_OF_A_KIND: BalatroHandInterface = {
    baseChips: 30,
    baseMult: 3,
}

// + 3 mult/ +30 chips
export const STRAIGHT: BalatroHandInterface = {
    baseChips: 30,
    baseMult: 4,
}

// + 2 mult / +15 chips
export const FLUSH: BalatroHandInterface = {
    baseChips: 35,
    baseMult: 4,
}

// +2 mult / +25 chips
export const FULL_HOUSE: BalatroHandInterface = {
    baseChips: 40,
    baseMult: 4
}

// +3 mult / +30 chips
export const FOUR_OF_A_KIND: BalatroHandInterface = {
    baseChips: 60,
    baseMult: 7
}

// 4 mult / 40 chipss
export const STRAIGHT_FLUSH: BalatroHandInterface = {
    baseChips: 100,
    baseMult: 8
}

export const FIVE_OF_A_KIND: BalatroHandInterface = {
    baseChips: 120,
    baseMult: 12
}

export const FLUSH_HOUSE: BalatroHandInterface = {
    baseChips: 140,
    baseMult: 14
}

export const FLUSH_FIVE: BalatroHandInterface = {
    baseChips: 160,
    baseMult: 16
}

export type BalatroHandType = null
    | typeof HIGH_CARD
    | typeof PAIR
    | typeof TWO_PAIR
    | typeof THREE_OF_A_KIND
    | typeof STRAIGHT
    | typeof FULL_HOUSE
    | typeof FOUR_OF_A_KIND
    | typeof STRAIGHT_FLUSH
    | typeof FIVE_OF_A_KIND
    | typeof FLUSH_HOUSE
    | typeof FLUSH_FIVE