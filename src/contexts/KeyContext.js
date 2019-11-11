import React, { createContext, useState } from "react";

export const KeyContext = createContext({});

const KeyContextProvider = props => {
  const [key, setKey] = useState("c");

  const keyContext = {
    key,
    setKey
  };

  return (
    <KeyContext.Provider value={keyContext}>
      {props.children}
    </KeyContext.Provider>
  );
};

export default KeyContextProvider;
