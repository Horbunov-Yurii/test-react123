import React, { Component } from "react";

class Sticker extends Component {

  handleClick = () => {
      const {onSelect,label} = this.props;
    onSelect(label);
  };

  render() {
    const { img, label } = this.props;

    return (
      <div onClick={this.handleClick}>
        <img src={img} alt={label} width="120" />
      </div>
    );
  }
}

export default Sticker;