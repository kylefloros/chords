import React from "react";
import KeyTypeContextProvider from "./contexts/KeyTypeContext";
import ChordTypeContextProvider from "./contexts/ChordTypeContext";
import KeyContextProvider from "./contexts/KeyContext";
import KeyOptionsWrapper from "./components/KeyOptions/KeyOptionsWrapper";
import ChordDisplay from "./components/KeyInfo/ChordDisplay";
function App() {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col justify-center items-center w-full lg:w-10/12  max-w-5xl">
        <KeyTypeContextProvider>
          <ChordTypeContextProvider>
            <KeyContextProvider>
              <h5 className="text-lg self-start mt-4 hidden">Jam Chords</h5>
              <ChordDisplay></ChordDisplay>
              <KeyOptionsWrapper></KeyOptionsWrapper>
              <div className="flex justify-end w-full mr-32">
                <a
                  className="m-2 self-end text-blue-400 text-2xl hover:underline"
                  href="https://github.com/kylefloros/chords"
                  target="_blank"
                  rel="noopener"
                >
                  repo
                </a>
                <a
                  className="m-2 self-end text-blue-400 text-2xl hover:underline"
                  href="https://twitter.com/kylefloros"
                  target="_blank"
                  rel="noopener"
                >
                  @kylefloros
                </a>
              </div>
            </KeyContextProvider>
          </ChordTypeContextProvider>
        </KeyTypeContextProvider>
      </div>
    </div>
  );
}

export default App;
