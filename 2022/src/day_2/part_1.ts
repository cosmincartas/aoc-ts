const WIN_SCORE = 6;
const DRAW_SCORE = 3;
const LOSE_SCORE = 0;
const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;

const MOVES = ['ROCK', 'PAPER', 'SCISSORS'] as const;

type MoveType = (typeof MOVES)[number];
type Nullable<T> = T | null;

function transform(move: string): Nullable<MoveType> {
    switch (move) {
        case 'A':
        case 'X':
            return 'ROCK';
        case 'B':
        case 'Y':
            return 'PAPER';
        case 'C':
        case 'Z':
            return 'SCISSORS';
    }
    return null;
}

function mapMove(move: string): [MoveType, MoveType] {
    const [first, second] = move.split(' ');
    return [transform(first)!, transform(second)!];
}

function getScore(round: string) {
    const [first, second] = mapMove(round);
    switch (`${first} ${second}`) {
        case 'ROCK ROCK':
            return DRAW_SCORE + ROCK_SCORE;
        case 'ROCK PAPER':
            return WIN_SCORE + PAPER_SCORE;
        case 'ROCK SCISSORS':
            return LOSE_SCORE + SCISSORS_SCORE;
        case 'PAPER ROCK':
            return LOSE_SCORE + ROCK_SCORE;
        case 'PAPER PAPER':
            return DRAW_SCORE + PAPER_SCORE;
        case 'PAPER SCISSORS':
            return WIN_SCORE + SCISSORS_SCORE;
        case 'SCISSORS ROCK':
            return WIN_SCORE + ROCK_SCORE;
        case 'SCISSORS PAPER':
            return LOSE_SCORE + PAPER_SCORE;
        case 'SCISSORS SCISSORS':
            return DRAW_SCORE + SCISSORS_SCORE;
        default:
            return 0;
    }
}

export function checkScore(input: string) {
    const rounds = input.split('\n');
    return rounds.reduce((sum, round) => (sum += getScore(round)), 0);
}
