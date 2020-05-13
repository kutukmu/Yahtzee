import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";

function createMap() {
  const arrmap = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
  const newMap = new Map();
  arrmap.forEach((n, index) => newMap.set(index + 1, n))

  return newMap;

}

class Die extends Component {



  static defaultProps = {

    numberWords: createMap(),
    val: 5

  }

  constructor(props) {
    super(props)

    this.handleDice = this.handleDice.bind(this)


  }

  handleDice() {
    this.props.handleClick(this.props.idx)

  }

  render() {
    let classes = "Die "
    const { numberWords, locked, val, disabled, rolling } = this.props;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling"

    return (


      <FontAwesomeIcon
        icon={numberWords.get(val)}
        className={classes}
        size={"5x"}
        disabled={disabled}
        onClick={this.handleDice}
      />


    );
  }
}

export default Die;
