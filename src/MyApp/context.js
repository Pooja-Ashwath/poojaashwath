import React, { createContext } from "react";
import {useState, useEffect, useContext} from "react";
import Child from "./usingContext";
import Child2 from "./Child2";
import Providers from "./combiningProviders";

export const Con = createContext("hello");
export const Con2 = createContext(null);
function Context(){
   




    return(
    <>
   <Providers>
         <Child />
         <Child2 />
    </Providers>
    </>
    )
}

export default Context;