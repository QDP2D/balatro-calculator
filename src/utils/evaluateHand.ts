import { PlayingCard } from "../types";

function isHandValidSize(handSize: number): boolean {
    return (handSize >= 1) && (handSize <= 5)
}

export function evaluateHand(playedCards: Array<PlayingCard>): void {
    if (!isHandValidSize(playedCards.length)) return
}

