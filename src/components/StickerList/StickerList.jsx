import React, { Component } from "react";
import Sticker from "../Sticker/Sticker";
import stickers from "../../stickers.json";

class StickerList extends Component {
  render() {
    const { onSelect } = this.props;

    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            img={sticker.img}
            label={sticker.label}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  }
}

export default StickerList;