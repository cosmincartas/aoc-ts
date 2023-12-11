import { PUZZLE_INPUT_1, TEST_INPUT_1 } from './constants';
import { getCompleteOverlappingSections, getPairs } from './part_1';
import { getOverlappingSections } from './part_2';

console.log('Part_1:', getCompleteOverlappingSections(getPairs(PUZZLE_INPUT_1)));
console.log('Part_2:', getOverlappingSections(getPairs(PUZZLE_INPUT_1)));
