export function getTopThreeTotalCalories(calories: number[]) {
    return calories.slice(0, 3).reduce((sum, value) => (sum += value));
}
