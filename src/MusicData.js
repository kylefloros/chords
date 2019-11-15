export const notesLookup = {
  c: ["C", "D", "E", "F", "G", "A", "B"],
  g: ["G", "A", "B", "C", "D", "E", "F♯"],
  d: ["D", "E", "F♯", "G", "A", "B", "C♯"],
  a: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
  e: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
  b: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
  f_sharp: ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],
  d_flat: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
  a_flat: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
  e_flat: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
  b_flat: ["B♭", "C", "D", "E♭", "F", "G", "A"],
  f: ["F", "G", "A", "B♭", "C", "D", "E"]
};
export const chordsLookup = {
  major: {
    triad: ["", "m", "m", "", "", "m", "°"],
    tetrad: ["maj7", "m7", "m7", "maj7", "7", "m7", "m7(♭5)"]
  },
  natural_minor: {
    triad: ["m", "°", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(♭5)", "maj7", "7", "7", "maj7", "7"]
  },
  melodic_minor: {
    triad: ["m", "°", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(♭5)", "maj7", "7", "7", "maj7", "7"]
  },
  harmonic_minor: {
    triad: ["m", "°", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(♭5)", "maj7", "7", "7", "maj7", "7"]
  }
};

export const keyLookup = {
  a: "A",
  b_flat: "B♭",
  b: "B",
  c: "C",
  d_flat: "D♭",
  d: "D",
  e_flat: "E♭",
  e: "E",
  f: "F",
  f_sharp: "F♯",
  g: "G",
  a_flat: "A♭"
};

export const keyTypeLookup = {
  major: "Major",
  natural_minor: "Natural Minor",
  melodic_minor: "Melodic Minor",
  harmonic_minor: "Harmonic Minor"
};

export const chordTypeLookup = {
  triad: "Triads",
  tetrad: "7 Chords"
};
