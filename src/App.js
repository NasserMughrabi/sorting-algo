import React from "react";
import Bar from "./components/Bar";
import NavBar from "./components/NavBar";


const arr = Array(30).fill(5).map(() => Math.round(Math.random() * 80))

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {arr.map((item, index)=>{
          return (
            <Bar key={index} item={item}/>
          )
        })}
      </main>
    </>
    
  );
}

export default App;
