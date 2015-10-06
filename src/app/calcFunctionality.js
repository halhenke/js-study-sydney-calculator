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
