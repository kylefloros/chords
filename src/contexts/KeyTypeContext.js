import React, { createContext, useState } from "react";

export const KeyTypeContext = createContext({});

const KeyTypeContextProvider = props => {
  const [keyType, setKeyType] = useState("major");

  const keyTypeContext = {
    keyType,
    setKeyType
  };

  return (
    <KeyTypeContext.Provider value={keyTypeContext}>
      {props.children}
    </KeyTypeContext.Provider>
  );
};

export default KeyTypeContextProvider;
