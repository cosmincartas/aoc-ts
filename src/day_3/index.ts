import {
    PUZZLE_INPUT,
    SECOND_PUZZLE_INPUT,
    LOWERCASE_PRIORITY,
    UPPERCASE_PRIORITY,
    DELTA,
    TEST_INPUT,
} from './constants';

function isLowerCase(asciiValue: number) {
    return asciiValue >= 97 && asciiValue <= 122;
}

function getPriority(item: string) {
    const asciiValue = item.charCodeAt(0);
    return isLowerCase(asciiValue)
        ? asciiValue - LOWERCASE_PRIORITY
        : asciiValue - UPPERCASE_PRIORITY + DELTA;
}

function getCommonItem([first, second]: [string, string]) {
    const secondItems = second.split('');
    const matchingItem = secondItems.find((char) => first.includes(char));
    return matchingItem as string;
}

function getItemsFromCompartments(rucksack: string): [string, string] {
    const size = rucksack.length;
    const [first, second] = [rucksack.slice(0, size / 2), rucksack.slice(size / 2, size)];
    return [first, second];
}

function splitItems(input: string) {
    const rucksacks = input.split('\n');
    return rucksacks.reduce((sum, rucksack) => {
        const items = getItemsFromCompartments(rucksack);
        const commonItem = getCommonItem(items);
        const priority = getPriority(commonItem);
        sum += priority;
        return sum;
    }, 0);
}

function groupElves(input: string) {
    const rucksacks = input.split('\n');
    let sum = 0;
    for (let i = 0; i < rucksacks.length - 2; i += 3) {
        const badge = getElvesBadge([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
        const priority = getPriority(badge);
        sum += priority;
    }
    return sum;
}

function getElvesBadge([first, second, third]: [string, string, string]) {
    const secondItems = second.split('');
    return secondItems.find((char) => first.includes(char) && third.includes(char)) as string;
}
const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
//console.log(splitItems(PUZZLE_INPUT));
console.log(groupElves(SECOND_PUZZLE_INPUT));
