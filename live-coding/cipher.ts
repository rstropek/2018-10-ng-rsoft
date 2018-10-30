const codeOfA = 'A'.charCodeAt(0);
const codeOfa = 'a'.charCodeAt(0);
const codeOfZ = 'Z'.charCodeAt(0);
const codeOfz = 'z'.charCodeAt(0);
const alphaBetCount = 26;



export function encrypt(plainText: string, key: number): string {
    let res = '';

  for (const char of plainText) {
      let charCode = char.charCodeAt(0);
      if ((charCode >= codeOfA && charCode <= codeOfZ) || (charCode >= codeOfa && charCode <=codeOfz)) {
          const offset = charCode >= codeOfa ? codeOfa : codeOfA;
          charCode = (charCode - offset + key) % alphaBetCount;
          res += String.fromCharCode(charCode + offset);
      } else {
          res += char;
      }
  }

  return res;
}

export function decrypt(cypherText: string, key: number): string {
    let res = '';
    for (const char of cypherText) {
        let charCode = char.charCodeAt(0);
        if ((charCode >= codeOfA && charCode <= codeOfZ) || (charCode >= codeOfa && charCode <=codeOfz)) {
            const offset = charCode >= codeOfa ? codeOfa : codeOfA;
            charCode = (charCode - offset - key) % alphaBetCount;
            if (charCode < 0) {
                res += String.fromCharCode(charCode + offset + alphaBetCount);
            } else {
                res += String.fromCharCode(charCode + offset);
            }
        } else {
            res += char;
        }
    }

    return res;
}
