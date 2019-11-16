import React from "react";
import KeyTypeContextProvider from "./contexts/KeyTypeContext";
import ChordTypeContextProvider from "./contexts/ChordTypeContext";
import KeyContextProvider from "./contexts/KeyContext";
import KeyOptionsWrapper from "./components/KeyOptions/KeyOptionsWrapper";
import ChordsInKey from "./components/KeyInfo/ChordsInKey";

function App() {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col justify-center items-center w-full md:w-10/12 max-w-5xl">
        <KeyTypeContextProvider>
          <ChordTypeContextProvider>
            <KeyContextProvider>
              <ChordsInKey></ChordsInKey>
              <KeyOptionsWrapper></KeyOptionsWrapper>
            </KeyContextProvider>
          </ChordTypeContextProvider>
        </KeyTypeContextProvider>
      </div>
    </div>
  );
}

export default App;
