enum Note {
  A = "A",
  ASharp = "A#",
  B = "B",
  C = "C",
  CSharp = "C#",
  D = "D",
  DSharp = "D#",
  E = "E",
  F = "F",
  FSharp = "F#",
  G = "G",
  GSharp = "G#",
}


type Fret = {
  fretNumber: number
  value: Note
  octave: number
}

type String = {
  root: Note
  frets: Fret[]
}

const Fretboard = () => {
  const numOfFrets = 12
  const numOfStrings = 6

  const strings: String[] = createAll([Note.E, Note.A, Note.D, Note.G, Note.B, Note.E], numOfFrets)

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: numOfFrets,
      gridTemplateRows: numOfStrings
    }}>
      {strings.flatMap(s => s.frets.map(s => (
        <div>
          {s.value}
        </div>
      )))}
    </div>
  )
}

const createAll = (roots: Note[], frets: number): String[] => {
  return roots.map(r => {
    return createString(r, frets)
  })
}

const createString = (root: Note, numOfFrets: number): String => {
  let frets: Fret[] = []
  const allNotes = Object.values(Note) // [A, B, C]
  let currNote = root // C
  const start = allNotes.findIndex(v => v === currNote.toString()) // 2
  frets.push({
    fretNumber: 0, octave: 0, value: allNotes[start] as Note // {0, 0, C}
  })

  for (let i = 1; i < numOfFrets; i++) {
    const noteNumber = (start + i) % allNotes.length // i + 1 = 3 % 3 = 0
    currNote = allNotes[noteNumber]
    frets.push({
      fretNumber: i, octave: 0, value: currNote as Note // {0, 0, C}
    })
  }

  return {
    frets: frets, root: root

  }
}

export default Fretboard