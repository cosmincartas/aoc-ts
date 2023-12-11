const digitMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
} as const;
const r1 = new RegExp(/\d/g);
const r2 = new RegExp(/one/g);
const r3 = new RegExp(/two/g);
const r4 = new RegExp(/three/g);
const r5 = new RegExp(/four/g);
const r6 = new RegExp(/five/g);
const r7 = new RegExp(/six/g);
const r8 = new RegExp(/seven/g);
const r9 = new RegExp(/eight/g);
const r10 = new RegExp(/nine/g);

const regexes = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

export function getCalibrationValueV3(document: string) {
    const calibrationValues: string[] = [
        ...Object.keys(digitMap),
        ...Object.values(digitMap).map((val) => val.toString()),
    ];
    return document
        .split('\n')
        .map((line) => {
            const indices: [number, string][] = [];
            regexes.forEach((regex) => {
                const results = Array.from(line.matchAll(regex));
                if (results.length) {
                    results.forEach((match) => {
                        indices.push([
                            match.index!,
                            (digitMap[match[0] as keyof typeof digitMap] || match[0]).toString(),
                        ]);
                    });
                }
            });
            indices.sort((a, b) => a[0] - b[0]);
            const firstDigit = indices[0][1];
            const secondDigit = indices[indices.length - 1][1];
            return Number(`${firstDigit}${secondDigit}`);
        })
        .reduce((sum, val) => (sum += val), 0);
}

export function getCalibrationValueV2(document: string) {
    const regex = new RegExp(/(\d|(one)|(two)|(three)|four|five|six|seven|eight|nine)/g);
    return document
        .split('\n')
        .map((line) => {
            const digits = Array.from(line.matchAll(regex));
            if (digits.length) {
                const firstDigit = digitMap[digits[0][0] as keyof typeof digitMap] || digits[0][0];
                const secondDigit =
                    digitMap[digits[digits.length - 1][0] as keyof typeof digitMap] ||
                    digits[digits.length - 1][0];
                return Number(`${firstDigit}${secondDigit}`);
            }
            return 0;
        })
        .reduce((sum, val) => (sum += val));
}
