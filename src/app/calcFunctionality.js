export const myMax = (list) => {
  return Math.max(...list);
};

const vowels = 'aeiouyAEIOUY';

export const vowelCount = (string) => {
  let count = 0;

  for (const c of string) {
    if (vowels.includes(c)) {
      count++;
    }
  }
  return count;
};

export const reverse = (forward) => {
  let rev = '';

  for (const c of forward) {
    rev = `${c}${rev}`;
  }
  return rev;
};

export const add = (n1, n2) => parseInt(n1, 10) + parseInt(n2, 10);
export const multiply = (n1, n2) => parseInt(n1, 10) * parseInt(n2, 10);
export const divide = (n1, n2) => parseInt(n1, 10) / parseInt(n2, 10);
export const subtract = (n1, n2) => parseInt(n1, 10) - parseInt(n2, 10);


export let pressed = [];
export const queueStuff = (press) => {
  pressed.push(press);
};
const empty = (result) => {
  console.log(`empty result is ${result}`);
  pressed = [];
  return result;
};

export const evaluate = () => {
    if (pressed.length < 3) {
      return `ERROR - not enough buttons pressed`;
    }
    switch (true) {
    // switch (pressed[1]) {
      case /\+/.test(pressed[1]):
      // case '+':
        return empty(add(pressed[0], pressed[2]));
        break;
      case /-/.test(pressed[1]):
      // case '-':
        return empty(subtract(pressed[0], pressed[2]));
        break;
      case /\*/.test(pressed[1]):
      // case '*':
        return empty(multiply(pressed[0], pressed[2]));
        break;
      case /\//.test(pressed[1]):
      // case '/':
        return empty(divide(pressed[0], pressed[2]));
        break;
      default:
        return empty(`Input needs to be 'NUM OP NUM' not ${pressed[0]} ${pressed[1]} ${pressed[2]}`);
    }
};
