import React, { createContext, useState } from "react";

export const ChordsContext = createContext({});

const ChordsContextProvider = props => {
  console.log("in context", props.value);
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
