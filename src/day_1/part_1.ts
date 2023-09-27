export function splitElvesCalories(input: string): number[] {
    const caloriesData = input.split('\n');
    const totalCalories: number[] = [];
    let sum = 0;
    caloriesData.forEach((calories) => {
        if (calories) {
            sum += Number.parseInt(calories);
        } else {
            totalCalories.push(sum);
            sum = 0;
        }
    });
    if (sum != 0) {
        totalCalories.push(sum);
    }
    totalCalories.sort((a, b) => b - a);
    return totalCalories;
}
