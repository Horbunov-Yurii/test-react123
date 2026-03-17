import React, { Component } from "react";
import style from "./Sticker.module.css"

class Sticker extends Component {



  render() {
    const { img, label,onSelect } = this.props;

    return (
      <div className={style.item} onClick={()=>onSelect(label)}>
        <img src={img} alt={label} width="120" />
      </div>
    );
  }
}

export default Sticker;