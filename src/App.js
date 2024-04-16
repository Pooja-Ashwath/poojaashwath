import logo from "./logo.svg";
import "./App.css";
import MyApp from "./MyApp";
import React from "react";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Context from "./MyApp/context";
import InvalidRoute from "./Routing/InvalidRoute";
import GetPost from "./Routing/getPosts";
import GetPostById from "./Routing/getPostById";
import HooksDemoParent from "./Hooks/hooksDemoParent";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MyApp />, errorElement: <InvalidRoute /> },
    { path: "/Context", element: <Context /> },
    { path: "/post", element: <GetPost /> },
    { path: "/post/:id", element: <GetPostById /> },
    { path: "/hooks", element: <HooksDemoParent /> },
  ]);

  const [festival, setFestival] = useState("diwali");
  return (
    <React.Fragment>
      {/* <MyApp  festival={festival} setFestival={setFestival}/> */}
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
