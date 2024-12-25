import { Modifier } from "./modifier"

export enum EnhancementVariant {
    BONUS = 'bonus',
    GLASS = 'glass',
    MULT = 'mult',
    NO_ENHANCEMENT = 'no_enhancement',
    STEEL = 'steel',
    STONE = 'stone',
    WILD = 'wild'
}

export interface Enhancement extends Modifier {
    variant: EnhancementVariant.BONUS | EnhancementVariant.GLASS | EnhancementVariant.MULT | EnhancementVariant.NO_ENHANCEMENT | EnhancementVariant.STEEL | EnhancementVariant.STONE | EnhancementVariant.WILD
}