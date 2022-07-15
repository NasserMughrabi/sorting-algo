import React from "react";
import Bars from "./components/Bars";
import NavBar from "./components/NavBar";
import Bottom from "./components/Bottom";
import { useState } from "react";



function App() {

  const [arrSize, setArrSize] = useState(25);
  // generate an arr of random numbers between 1 and 69 (1 and 69 included)
  const arr = Array(arrSize).fill(5).map(() => Math.round(Math.random() * (69 - 1 + 1) + 1));

  return (
    <>
    <main>
      <NavBar setArrSize={setArrSize}/>
      <Bars arr={arr}/>
      <Bottom />
    </main>
    </>
    
  );
}

export default App;