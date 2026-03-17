// import React, { Component } from "react";
// import stickers from "../../stickers.json";

// class StickerList extends Component {
//   render() {
//     const { onSelect } = this.props;

//     return (
//       <div>
//         {stickers.map(({label,img}, index) => (
//           <div key={index} onClick={() => onSelect(label)}>
//             <img src={img} alt={label} width="120" />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
// export default StickerList;

import React, { Component } from "react";
import Sticker from "../Sticker/Sticker";
import stickers from "../../stickers.json";
import style from "./StickerList.module.css"

class StickerList extends Component {
  render() {
    const { onSelect } = this.props;

    return (
      <div className={style.list}>
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
