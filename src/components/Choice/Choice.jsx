import React, { Component } from "react";
import style from "./Choice.module.css"

class Choice extends Component {
  render() {
    const { selected } = this.props;

    return (
      <div className={style.title}>
        {selected ? `Ви обрали: ${selected}` : "Оберіть стікер"}
      </div>
    );
  }
}

export default Choice;