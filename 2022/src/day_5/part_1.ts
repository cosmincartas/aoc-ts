class Stack {
    private items: string[];

    constructor() {
        this.items = [];
    }

    public pushEnd(element: string) {
        this.items.push(element);
    }

    public pushFront(element: string) {
        this.items = [element].concat(this.items);
    }

    public pop() {
        return this.items.pop();
    }
}

export function splitInStacks(input: string) {
    const rows = input.split('\n');
    const stacks: Stack[] = [];

    rows.forEach((row) => {
        const items = row.split(' ');
    });
}
