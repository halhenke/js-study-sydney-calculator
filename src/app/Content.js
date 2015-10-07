import React from 'react';
import styles from './Content.css';
import * as calc from './calcFunctionality';

// class Calc extends React.Component {
const Calc = React.createClass({

  getInitialState() {
    return {
      result: "Do some Calculatin'!"
    };
  },

  onClick(e) {
    e.preventDefault();
    calc.queueStuff(e.target.innerHTML);
    console.log(`${e.target.innerHTML}`);
  },

  evaluate(e) {
    e.preventDefault();
    const result = calc.evaluate();
    console.log(`${result}`);
    this.setState({result: result});
  },

  render () {
    return (
      <div className={styles.calc} >
        <div className="row">
          <div className="button" onClick={this.onClick}> 1 </div>
          <div className="button" onClick={this.onClick}> 2 </div>
          <div className="button" onClick={this.onClick}> 3 </div>
        </div>
        <div className="row">
          <div className="button" onClick={this.onClick}> 4 </div>
          <div className="button" onClick={this.onClick}> 5 </div>
          <div className="button" onClick={this.onClick}> 6 </div>
        </div>
        <div className="row">
          <div className="button" onClick={this.onClick}> 7 </div>
          <div className="button" onClick={this.onClick}> 8 </div>
          <div className="button" onClick={this.onClick}> 9 </div>
        </div>
        <div className="row">
          <div className="button" onClick={this.onClick}> 0 </div>
          <div className="button operation" onClick={this.onClick}> + </div>
          <div className="button operation" onClick={this.onClick}> - </div>
        </div>
        <div className="row">
          <div className="button operation" onClick={this.onClick}> * </div>
          <div className="button operation" onClick={this.onClick}> / </div>
          <div className="button operation" onClick={this.evaluate}> = </div>
        </div>
        <div className="row">
          <div className="result">
            <h3>{this.state.result}</h3>
          </div>
        </div>
      </div>
    );
  }
})



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
        <div>
          <Calc />
        </div>
      </section>
    );
  }
}
