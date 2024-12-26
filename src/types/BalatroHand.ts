export interface BalatroHandInterface {
    baseChips: number
    baseMult: number
}

export const HIGH_CARD: BalatroHandInterface = {
    baseChips: 5,
    baseMult: 1,
}

export const PAIR: BalatroHandInterface = {
    baseChips: 10,
    baseMult: 2,
}

export const TWO_PAIR: BalatroHandInterface = {
    baseChips: 10,
    baseMult: 2,
}

export const THREE_OF_A_KIND: BalatroHandInterface = {
    baseChips: 30,
    baseMult: 3,
}

export const STRAIGHT: BalatroHandInterface = {
    baseChips: 30,
    baseMult: 4,
}

export const FLUSH: BalatroHandInterface = {
    baseChips: 35,
    baseMult: 4,
}

export const FULL_HOUSE: BalatroHandInterface = {
    baseChips: 40,
    baseMult: 4
}

export const FOUR_OF_A_KIND: BalatroHandInterface = {
    baseChips: 60,
    baseMult: 7
}

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

export type BalatroHand = null
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