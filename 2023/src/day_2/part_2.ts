import { CUBES } from './constants';

export function getMinCubes(games: string) {
    return games
        .split('\n')
        .map((game) => {
            const [_id, results] = game.split(':').map((part) => part.trim());
            return results
                .split(';')
                .map((round) => {
                    return round
                        .split(',')
                        .map((cubes) => cubes.trim())
                        .reduce(
                            (result, cubes) => {
                                CUBES.forEach((key, index) => {
                                    const score = cubes.split(key);
                                    if (score.length === 2) {
                                        result[index] = Number(score[0]);
                                    }
                                });
                                return result;
                            },
                            [0, 0, 0]
                        );
                })
                .reduce(
                    (mins, round) => {
                        CUBES.forEach((_, index) => {
                            if (mins[index] <= round[index]) {
                                mins[index] = round[index];
                            }
                        });
                        return mins;
                    },
                    [0, 0, 0]
                )
                .reduce((power, cube) => (power *= cube), 1);
        })
        .reduce((sum, game) => (sum += game), 0);
}
