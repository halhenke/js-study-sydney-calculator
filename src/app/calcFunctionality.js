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
