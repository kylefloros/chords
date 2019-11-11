import React, { createContext, useState, useContext } from "react";
import ChordsContextProvider from "./contexts/ChordsContext";
import ChordsDisplay from "./components/ChordDisplay";
import GenerateChordButton from "./components/GenerateChordButton";
import KeyTypeContextProvider from "./contexts/KeyTypeContext";
import ChordTypeContextProvider from "./contexts/ChordTypeContext";
import KeyType from "./components/KeyType";
import ChordType from "./components/ChordType";
import Key from "./components/Key";
import KeyContextProvider from "./contexts/KeyContext";
import ChordsInKey from "./components/ChordsInKey";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <KeyTypeContextProvider>
        <ChordTypeContextProvider>
          <KeyContextProvider>
            <ChordsDisplay></ChordsDisplay>
            <ChordsInKey></ChordsInKey>
            <KeyType></KeyType>
            <ChordType></ChordType>
            <Key></Key>
            <GenerateChordButton></GenerateChordButton>
          </KeyContextProvider>
        </ChordTypeContextProvider>
      </KeyTypeContextProvider>
    </div>
  );
}

export default App;
