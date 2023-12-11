import { splitElvesCalories } from './part_1';
import { PUZZLE_INPUT_2, TEST_INPUT } from './constants';
import { getTopThreeTotalCalories } from './part_2';

const calories = splitElvesCalories(PUZZLE_INPUT_2);
console.log('Part_1:', calories[0] ?? 0);
console.log('Part_2:', getTopThreeTotalCalories(calories));
