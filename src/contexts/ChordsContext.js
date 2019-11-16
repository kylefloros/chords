import React, { createContext, useState } from "react";

export const ChordsContext = createContext({});

const ChordsContextProvider = props => {
  const [chords, setChords] = useState(["C"]);

  const chordsContext = {
    chords,
    setChords
  };

  return (
    <ChordsContext.Provider value={chordsContext}>
      {props.children}
    </ChordsContext.Provider>
  );
};

export default ChordsContextProvider;
