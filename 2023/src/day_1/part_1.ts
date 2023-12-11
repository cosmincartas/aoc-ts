export function getCalibrationValue(document: string) {
    const regex = new RegExp(/[0-9]{1}/g);
    return document
        .split('\n')
        .map((line) => {
            const digits = line.match(regex);
            return digits
                ? Number.parseInt(`${digits[0]}${digits[digits.length - 1] ?? digits[0]}`)
                : 0;
        })
        .reduce((sum, curr) => (sum += curr), 0);
}
