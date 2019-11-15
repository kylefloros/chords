import React from "react";
import KeyDisplay from "./KeyDisplay";
import ChordsInKey from "./ChordsInKey";

export default function KeyInfoWrapper() {
  return (
    <div className="flex flex-col items-center p-6 border-2 rounded-lg mt-8 mb-4 bg-indigo-100">
      {/* <KeyDisplay></KeyDisplay> */}
      <ChordsInKey></ChordsInKey>
    </div>
  );
}
