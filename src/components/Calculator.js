import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <table className="container">
        <tbody>
          <tr>
            <td className="table Input" colSpan="4">{next || (total || '0')}</td>
          </tr>
          <tr>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>AC</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>+/-</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>%</button></td>
            <td className="table pink"><button className="btn" type="button" onClick={this.handler}>÷</button></td>
          </tr>
          <tr>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>7</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>8</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>9</button></td>
            <td className="table pink"><button className="btn" type="button" onClick={this.handler}>x</button></td>
          </tr>
          <tr>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>4</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>5</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>6</button></td>
            <td className="table pink"><button className="btn" type="button" onClick={this.handler}>-</button></td>
          </tr>
          <tr>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>1</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>2</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>3</button></td>
            <td className="table pink"><button className="btn" type="button" onClick={this.handler}>+</button></td>
          </tr>
          <tr>
            <td className="table" colSpan="2"><button className="btn" type="button" onClick={this.handler}>0</button></td>
            <td className="table"><button className="btn" type="button" onClick={this.handler}>.</button></td>
            <td className="table pink"><button className="btn" type="button" onClick={this.handler}>=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
