import { PUZZLE_INPUT, SAMPLE_INPUT_1, SAMPLE_INPUT_2 } from './constants';
import { getCalibrationValue } from './part_1';
import { getCalibrationValueV2, getCalibrationValueV3 } from './part_2';

console.log(getCalibrationValue(SAMPLE_INPUT_1));
console.log(getCalibrationValue(PUZZLE_INPUT));
console.log(getCalibrationValueV2(SAMPLE_INPUT_2));
console.log(getCalibrationValueV2(PUZZLE_INPUT));
console.log(getCalibrationValueV3(PUZZLE_INPUT));
