import { ACE_OF_SPADES } from "./constants/BaseCards"
import { BoardState, PlaybleHand } from "./types"

const startingHand: PlaybleHand = [ACE_OF_SPADES]

const currBoard = new BoardState(startingHand)

console.log('testing ', currBoard.isHighCard())