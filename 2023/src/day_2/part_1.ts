import { AVAILABLE_EXTRACTIONS, CUBES } from './constants';

export function getPossibleGames(games: string) {
    return games
        .split('\n')
        .map((game) => {
            const [id, results] = game.split(':').map((part) => part.trim());
            const mappedRounds = results.split(';').map((round) => {
                return round
                    .split(',')
                    .map((cubes) => cubes.trim())
                    .reduce(
                        (result, cubes) => {
                            CUBES.forEach((key) => {
                                const score = cubes.split(key);
                                if (score.length === 2) {
                                    result[key] = Number(score[0]);
                                }
                            });
                            return result;
                        },
                        { red: 0, green: 0, blue: 0 }
                    );
            });
            if (
                mappedRounds.some((round) =>
                    CUBES.find((cube, index) => round[cube] > AVAILABLE_EXTRACTIONS[index])
                )
            ) {
                return null;
            } else {
                return id;
            }
        })
        .filter((game) => game !== null)
        .map((game) => {
            return Number(game!.split('Game ')[1]);
        })
        .reduce((sum, curr) => (sum += curr), 0);
}
