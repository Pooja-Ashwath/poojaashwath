import logo from './logo.svg';
import './App.css';
import MyApp from './MyApp';
import React from 'react';
import { useEffect, useState } from "react";

function App() {
  const [festival,setFestival] = useState("diwali");
  return (
    <React.Fragment>
    <MyApp  festival={festival} setFestival={setFestival}/>
    </React.Fragment>
  );
}

export default App;


