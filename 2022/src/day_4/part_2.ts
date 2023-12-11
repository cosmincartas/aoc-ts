export function getOverlappingSections(pairsSections: number[][][]) {
    let overlapping = 0;
    pairsSections.forEach((pair) => {
        const [[startFirst, endFirst], [startSecond, endSecond]] = pair;
        if ((startFirst <= startSecond || endFirst <= endSecond) && endFirst >= startSecond) {
            overlapping += 1;
        } else if (
            (startSecond <= startFirst || endSecond <= endFirst) &&
            endSecond >= startFirst
        ) {
            overlapping += 1;
        }
    });
    return overlapping;
}
