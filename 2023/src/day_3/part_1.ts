const NUMBERS_REGEX = new RegExp(/\d{1}|[\.\*$#+@&=%\/-]?/gm);

export function getMissingEnginePart(engineBlueprint: string) {
    const matrix = engineBlueprint
        .split('\n')
        .map((row) => {
            return Array.from(row.matchAll(NUMBERS_REGEX))
                .map((match) => {
                    return [match[0], match.index as number] as const;
                })
                .filter((match) => Boolean(match[0]));
        })
        .reduce((blueprint: (readonly [string, number])[][], row) => {
            blueprint.push(row);
            return blueprint;
        }, []);
    function checkAdjacentPos(startIndex: number, endIndex: number, rowNo: number) {
        const bottom = [];
        const top = [];

        for (let index = startIndex; index <= endIndex; ++index) {
            bottom.push([rowNo + 1, index, 'jos']);
            top.push([rowNo - 1, index, 'sus']);
        }
        return (
            [
                [rowNo + 1, startIndex - 1, 'dg-st-jos'] as const,
                [rowNo - 1, startIndex - 1, 'dg-st-sus'] as const,
                [rowNo + 1, endIndex + 1, 'dg-dr-jos'] as const,
                [rowNo - 1, endIndex + 1, 'dg-dr-sus'] as const,
                [rowNo, startIndex - 1, 'st'] as const,
                [rowNo, endIndex + 1, 'dr'] as const,
                ...bottom,
                ...top,
            ] as [number, number, string][]
        )
            .filter(([r, c, _]) => r >= 0 && r < matrix.length && c >= 0)
            .some(([r, c, label]) => {
                return Boolean(matrix[r][c]?.[0].match(/[\*$#+@&=%\/-]?/gm)?.[0]);
            });
    }
    let sum = 0;
    matrix.forEach((row, i) => {
        let j = 0;
        let startIndex = 0;
        let endIndex = 0;
        let number = [];
        while (j < row.length) {
            const col = row[j];
            if (col[0].match(/\d+/g)?.[0]) {
                if (number.length === 0) {
                    startIndex = col[1];
                    endIndex = col[1];
                } else {
                    endIndex = col[1];
                }
                number.push(col[0]);
            } else {
                if (number.length && checkAdjacentPos(startIndex, endIndex, i)) {
                    sum += Number(number.join(''));
                }
                startIndex = 0;
                endIndex = 0;
                number = [];
            }
            j += 1;
        }
        if (number.length && checkAdjacentPos(startIndex, endIndex, i)) {
            sum += Number(number.join(''));
        }
        startIndex = 0;
        endIndex = 0;
        number = [];
    });
    return sum;
}
