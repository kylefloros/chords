import React from "react";
import KeyTypeContextProvider from "./contexts/KeyTypeContext";
import ChordTypeContextProvider from "./contexts/ChordTypeContext";
import KeyContextProvider from "./contexts/KeyContext";
import KeyInfoWrapper from "./components/KeyInfo/KeyInfoWrapper";
import KeyOptionsWrapper from "./components/KeyOptions/KeyOptionsWrapper";
function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <KeyTypeContextProvider>
        <ChordTypeContextProvider>
          <KeyContextProvider>
            <KeyInfoWrapper></KeyInfoWrapper>
            <KeyOptionsWrapper></KeyOptionsWrapper>
          </KeyContextProvider>
        </ChordTypeContextProvider>
      </KeyTypeContextProvider>
    </div>
  );
}

export default App;
