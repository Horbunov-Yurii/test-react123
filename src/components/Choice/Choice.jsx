import React, { Component } from "react";

class Choice extends Component {
  render() {
    const { selected } = this.props;

    return (
      <div>
        {selected ? `Ви обрали: ${selected}` : "Оберіть стікер"}
      </div>
    );
  }
}

export default Choice;