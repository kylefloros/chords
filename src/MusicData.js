export const notesLookup = {
  c: {
    major: ["C", "D", "E", "F", "G", "A", "B"],
    natural_minor: ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
    harmonic_minor: ["C", "D", "E♭", "F", "G", "A♭", "B"]
  },
  g: {
    major: ["G", "A", "B", "C", "D", "E", "F♯"],
    natural_minor: ["G", "A", "B♭", "C", "D", "E♭", "F", "G"],
    harmonic_minor: ["G", "A", "B♭", "C", "D", "E♭", "F♯"]
  },
  d: {
    major: ["D", "E", "F♯", "G", "A", "B", "C♯"],
    natural_minor: ["D", "E", "F", "G", "A", "B♭", "C", "D"],
    harmonic_minor: ["D", "E", "F", "G", "A", "B♭", "C♯"]
  },
  a: {
    major: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
    natural_minor: ["A", "B", "C", "D", "E", "F", "G", "A"],
    harmonic_minor: ["A", "B", "C", "D", "E", "F", "G♯"]
  },
  e: {
    major: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
    natural_minor: ["E", "F♯", "G", "A", "B", "C", "D", "E"],
    harmonic_minor: ["E", "F♯", "G", "A", "B", "C", "D♯"]
  },
  b: {
    major: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
    natural_minor: ["B", "C♯", "D", "E", "F♯", "G", "A", "B"],
    harmonic_minor: ["B", "C♯", "D", "E", "F♯", "G", "A♯"]
  },
  f_sharp: {
    major: ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],
    natural_minor: ["F♯", "G♯", "A", "B", "C♯", "D", "E", "F♯"],
    harmonic_minor: ["F♯", "G♯", "A", "B", "C♯", "D", "E♯"]
  },
  d_flat: {
    major: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
    natural_minor: ["C♯", "D♯", "E", "F♯", "G♯", "A", "B", "C♯"],
    harmonic_minor: ["D♭", "E♭", "F♭", "G♭", "A♭", "B♭♭", "C"]
  },
  a_flat: {
    major: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
    natural_minor: ["G♯", "A♯", "B", "C♯", "D♯", "E", "F♯", "G♯"],
    harmonic_minor: ["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G"]
  },
  e_flat: {
    major: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
    natural_minor: ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭", "E♭"],
    harmonic_minor: ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D"]
  },
  b_flat: {
    major: ["B♭", "C", "D", "E♭", "F", "G", "A"],
    natural_minor: ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭", "B♭"],
    harmonic_minor: ["B♭", "C", "D♭", "E♭", "F", "G♭", "A"]
  },
  f: {
    major: ["F", "G", "A", "B♭", "C", "D", "E"],
    natural_minor: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F"],
    harmonic_minor: ["F", "G", "A♭", "B♭", "C", "D♭", "E"]
  }
};
export const chordsLookup = {
  major: {
    triad: ["", "m", "m", "", "", "m", "dim"],
    tetrad: ["maj7", "m7", "m7", "maj7", "7", "m7", "m7(♭5)"]
  },
  natural_minor: {
    triad: ["m", "°", "", "m", "m", "", ""],
    tetrad: ["min7", "m7(♭5)", "maj7", "min7", "min7", "maj7", "7"]
  },
  harmonic_minor: {
    triad: ["m", "°", "aug", "m", "", "", "°"],
    tetrad: ["m/M7", "m7(♭5)", "augM7", "min7", "7", "maj7", "dim7"]
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
  harmonic_minor: "Harmonic Minor"
};

export const chordTypeLookup = {
  triad: "Triads",
  tetrad: "7th Chords"
};
