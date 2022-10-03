import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

function App() {

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer style={{float:"left", border: "2px solid red"}} />
    </div>
  );
}

export default App;
