import { Modifier } from "./modifier";

export enum SealVariant {
    BLUE = 'blue',
    GOLD = 'gold',
    NO_SEAL = 'no_seal',
    PURPLE = 'purple',
    RED = 'red'
}

export interface SealType extends Modifier {
    variant: SealVariant.BLUE | SealVariant.GOLD | SealVariant.NO_SEAL | SealVariant.PURPLE | SealVariant.RED
}