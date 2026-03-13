import React, { Component } from "react";
import StickerList from "./components/StickerList/StickerList";
import Choice from "./components/Choice/Choice";

class App extends Component {

  state = {
    selectedSticker: null
  };

  handleSelectSticker = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    return (
      <div>
        <h1>Sticker App</h1>

        <StickerList onSelect={this.handleSelectSticker} />

        <Choice selected={this.state.selectedSticker} />
      </div>
    );
  }
}

export default App;



// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     selectedSticker: null
//   };

//   stickers = [
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/32.webp",
//       label: "Coding"
//     },
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/41.webp",
//       label: "Chilling"
//     },
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/61.webp",
//       label: "Astronaut"
//     },
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/72.webp",
//       label: "Doing his thing"
//     },
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/86.webp",
//       label: "Napping"
//     },
//     {
//       img: "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/84.webp",
//       label: "In the cold"
//     }
//   ];

//   handleSelectSticker = (label) => {
//     this.setState({ selectedSticker: label });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Sticker App</h1>

//         <div>
//           {this.stickers.map((sticker) => (
//             <div
//               key={sticker.label}
//               onClick={() => this.handleSelectSticker(sticker.label)}
//             >
//               <img src={sticker.img} alt={sticker.label} width="120" />
//             </div>
//           ))}
//         </div>

//         <h2>
//           {this.state.selectedSticker
//             ? `Ви обрали: ${this.state.selectedSticker}`
//             : "Оберіть стікер"}
//         </h2>
//       </div>
//     );
//   }
// }

// export default App;