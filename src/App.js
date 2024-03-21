import logo from './logo.svg';
import './App.css';
import MyApp from './MyApp';
import React from 'react';
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Context from './MyApp/context';

function App() {
  const router = createBrowserRouter([{"path": "/", "element": <MyApp />},{"path": "/context", "element": <Context /> }])

  const [festival,setFestival] = useState("diwali");
  return (
    <React.Fragment>
    {/* <MyApp  festival={festival} setFestival={setFestival}/> */}
    <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;


