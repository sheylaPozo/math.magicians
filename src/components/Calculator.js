/*eslint-disable */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    const buttonsArray=['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    return (
      <div className='Calculator'>
        <p className = 'result'>0</p>
        <div className='buttons'>
          {buttonsArray.map((btn) =><button key={btn}>{btn}</button>)}
        </div>
        
      </div>
    )
  }
}

export default Calculator;