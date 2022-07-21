import React from "react";
import NavBar from "./components/NavBar";
import Bars from "./components/Bars";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

  // generate an array of random numbers between 1 and 520
  const [arr, setArr] = useState(Array(25).fill(5).map(() => Math.round(Math.random() * (520 - 1 + 1) + 1)));
  const [algorithm, setAlgorithm] = useState('');
  const [speed, setSpeed] = useState('');
  const [beginSort, setBeginSort] = useState(false);
  return (
    <>
    <main>
      <NavBar setArr={setArr} setAlgorithm={setAlgorithm} setSpeed={setSpeed} setBeginSort={setBeginSort}/>
      <Bars arr={arr} algorithm={algorithm} speed={speed} beginSort={beginSort}/>
      <Footer setBeginSort={setBeginSort}/>
    </main>
    </>
    
  );
}

export default App;