function add(x: number, y: number): number {
    return x + y;
}

interface ICanPerformMathOp {
    add: (x: number, y: number) => number;
}

const mathOp: ICanPerformMathOp = {
    add: (a, b) => a + b
};


let addLamba: (x: number, y: number) => number;

addLamba = (x: number, y: number) => x + y;
addLamba = add;

function getSomethingAsync(cb: (result: string) => void) {
    // Simulate web api call
    setTimeout(() => {
        cb('Result');
    }, 500);
}

getSomethingAsync((res) => console.log(res));

const numbers = [1, 2, 3, 4];

numbers.filter((x) => x % 2 === 0).forEach(x => console.log(x));

const x: any = { firstName: 'John', lastName: 'asdf' };
delete x.lastName;
if (x.lastName) {
    console.log('yes');
}
