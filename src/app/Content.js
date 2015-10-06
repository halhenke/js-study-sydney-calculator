import React from 'react';
import styles from './Content.css';
import * as calc from './calcFunctionality';

export default class Content extends React.Component {
  render() {
    const nums = [23, 2, 13, -34, 45, 33];
    const vowelString = "The King of Australia is here.";
    const reverseString = 'Hello, SydJS!';

    return (
      <section className={styles.content}>
        <h1>'{reverseString}' backwards is '{calc.reverse(reverseString)}'</h1>
        <h1>The Max Number in the List [{nums.toString()}] is {calc.myMax(nums)}
        </h1>
        <h1>The Number of vowels in the string '{vowelString}'
          is {calc.vowelCount(vowelString)}</h1>
      </section>
    );
  }
}
