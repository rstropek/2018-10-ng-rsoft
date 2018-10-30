function add(x, y) {
    return x + y;
}
const mathOp = {
    add: (a, b) => a + b
};
let addLamba;
addLamba = (x, y) => x + y;
addLamba = add;
function getSomethingAsync(cb) {
    // Simulate web api call
    setTimeout(() => {
        cb('Result');
    }, 500);
}
getSomethingAsync((res) => console.log(res));
const numbers = [1, 2, 3, 4];
numbers.filter((x) => x % 2 === 0).forEach(x => console.log(x));
const x = { firstName: 'John', lastName: 'asdf' };
delete x.lastName;
if (x.lastName) {
    console.log('yes');
}
