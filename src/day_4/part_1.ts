export function getPairs(input: string) {
    const pairs = input.split('\n');
    return pairs.map((pair) => {
        const teams = pair.split(',');
        return teams.map((team) => team.split('-').map((s) => Number.parseInt(s)));
    });
}

export function getCompleteOverlappingSections(pairsSections: number[][][]) {
    let overlapping = 0;
    pairsSections.forEach((pair) => {
        const [[startFirst, endFirst], [startSecond, endSecond]] = pair;
        if (startFirst >= startSecond && endFirst <= endSecond) {
            overlapping += 1;
        } else if (startSecond >= startFirst && endSecond <= endFirst) {
            overlapping += 1;
        }
    });
    return overlapping;
}
