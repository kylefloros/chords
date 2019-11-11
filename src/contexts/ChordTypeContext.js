import React, { createContext, useState } from "react";

export const ChordTypeContext = createContext({});

const ChordTypeContextProvider = props => {
  const [chordType, setChordType] = useState("triad");

  const chordTypeContext = {
    chordType,
    setChordType
  };

  return (
    <ChordTypeContext.Provider value={chordTypeContext}>
      {props.children}
    </ChordTypeContext.Provider>
  );
};

export default ChordTypeContextProvider;
