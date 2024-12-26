import { Modifier } from "./Modifier";

export enum EditionVariant {
    FOIL = 'foil',
    HOLO = 'holographic',
    NO_EDITION = 'no_edition',
    POLY = 'polychrome'
}

export interface Edition extends Modifier {
    variant: EditionVariant.FOIL | EditionVariant.HOLO | EditionVariant.NO_EDITION | EditionVariant.POLY
}