import {decrypt, encrypt} from './cipher';

const plainText = 'Hello World!Zzzz';
const key = 1;  // key between 1..25

// Do something to encrypt with Caesar
let cyperText = encrypt(plainText, key);

console.log(cyperText);

// Do something to decrypt with Caesar
let newPlainText = decrypt(cyperText, key);

console.log(newPlainText);
