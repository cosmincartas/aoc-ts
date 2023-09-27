const strategy = new Map([
    ['A_LOSE', 3],
    ['A_WIN', 8],
    ['A_DRAW', 4],
    ['B_LOSE', 1],
    ['B_DRAW', 5],
    ['B_WIN', 9],
    ['C_LOSE', 2],
    ['C_DRAW', 6],
    ['C_WIN', 7],
]);

export function getTotalScore(input: string) {
    const rounds = input.split('\n');
    return rounds.reduce((sum, round) => {
        const [first, second] = round.split(' ');
        switch (second) {
            case 'X':
                sum += strategy.get(`${first}_LOSE`) ?? 0;
                break;
            case 'Y':
                sum += strategy.get(`${first}_DRAW`) ?? 0;
                break;
            case 'Z':
                sum += strategy.get(`${first}_WIN`) ?? 0;
                break;
        }
        return sum;
    }, 0);
}
