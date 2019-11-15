import React from "react";
import KeyTypeButton from "./KeyTypeButton";

export default function KeyType() {
  return (
    <div>
      <div className="flex">
        <KeyTypeButton value="major">Major</KeyTypeButton>
        <KeyTypeButton value="natural_minor">Natural Minor</KeyTypeButton>
      </div>
      <div className="flex">
        <KeyTypeButton value="melodic_minor">Melodic Minor</KeyTypeButton>
        <KeyTypeButton value="harmonic_minor">Harmonic Minor</KeyTypeButton>
      </div>
    </div>
  );
}
