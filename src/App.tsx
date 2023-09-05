import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data1 from "../../data.json"
import data2 from "../../data2.json"
import { ReactElementFactory } from './ReactElementFactory';
function App() {
  const js = data1;
  const js2 = data2;
   let factory = new ReactElementFactory();
    factory.generateTree(js2);


  return (
    <>
        {factory.root.value}
    </>
  );
}

export default App
