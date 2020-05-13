import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false
    }
  }

  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          rolling={this.props.rolling && !this.props.locked[idx]}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;