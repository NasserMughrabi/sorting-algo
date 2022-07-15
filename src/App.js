import React from "react";
import NavBar from "./components/NavBar";
import Bars from "./components/Bars";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

  const [arrSize, setArrSize] = useState(25);
  const [algorithm, setAlgorithm] = useState('');
  const [speed, setSpeed] = useState('');
  const [beginSort, setBeginSort] = useState(false);
  // console.log('be', beginSort);
  return (
    <>
    <main>
      <NavBar setArrSize={setArrSize} setAlgorithm={setAlgorithm} setSpeed={setSpeed} setBeginSort={setBeginSort}/>
      <Bars arrSize={arrSize} algorithm={algorithm} speed={speed} beginSort={beginSort}/>
      <Footer setBeginSort={setBeginSort}/>
    </main>
    </>
    
  );
}

export default App;