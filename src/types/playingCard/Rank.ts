export interface RankInterface {
    id: number
    name: string
    baseChipsValue: number
}

export const ACE: RankInterface = {
    id: 1,
    name: 'ace',
    baseChipsValue: 11
}

export const TW0: RankInterface = {
    id: 2,
    name: 'two',
    baseChipsValue: 2
}

export const THREE: RankInterface = {
    id: 3,
    name: 'three',
    baseChipsValue: 3
}

export const FOUR: RankInterface = {
    id: 4,
    name: 'four',
    baseChipsValue: 4
}

export const FIVE: RankInterface = {
    id: 5,
    name: 'five',
    baseChipsValue: 5
}

export const SIX: RankInterface = {
    id: 6,
    name: 'six',
    baseChipsValue: 6
}

export const SEVEN: RankInterface = {
    id: 7,
    name: 'seven',
    baseChipsValue: 7
}

export const EIGHT: RankInterface = {
    id: 8,
    name: 'eight',
    baseChipsValue: 8
}

export const NINE: RankInterface = {
    id: 9,
    name: 'nine',
    baseChipsValue: 9
}

export const TEN: RankInterface = {
    id: 10,
    name: 'ten',
    baseChipsValue: 10
}

export const JACK: RankInterface = {
    id: 11,
    name: 'jack',
    baseChipsValue: 10
}

export const QUEEN: RankInterface = {
    id: 12,
    name: 'queen',
    baseChipsValue: 10
}

export const KING: RankInterface = {
    id: 13,
    name: 'king',
    baseChipsValue: 11
}

export type Rank = typeof ACE 
    | typeof TW0 
    | typeof THREE 
    | typeof FOUR 
    | typeof FIVE 
    | typeof SIX 
    | typeof SEVEN 
    | typeof EIGHT 
    | typeof NINE 
    | typeof TEN 
    | typeof JACK 
    | typeof QUEEN 
    | typeof KING