import React from "react";
import Bars from "./components/Bars";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

  const [arrSize, setArrSize] = useState(25);
  // generate an arr of random numbers between 1 and 69 (1 and 69 included)
  const arr = Array(arrSize).fill(5).map(() => Math.round(Math.random() * (65 - 1 + 1) + 1));

  return (
    <>
    <main>
      <NavBar setArrSize={setArrSize}/>
      <Bars arr={arr}/>
      <Footer />
    </main>
    </>
    
  );
}

export default App;