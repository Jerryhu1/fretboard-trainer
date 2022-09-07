import React from 'react';
import Fretboard from "./components/Fretboard";

const App = () => {
  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100vh"
    }}>
      <Fretboard/>
    </div>
  );
}
export default App;