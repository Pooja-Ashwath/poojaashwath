import React from "react";
import axios from "axios";
import { useEffect,useState, useContext } from "react";
import {Con} from "./context";
import Child2 from "./Child2";

function Child(props){
   const conValue = useContext(Con);
   console.log("context", conValue);

    return(
       <>
    <button onClick={()=>{
        conValue.setName("Child1");
        console.log("In Child1", conValue.name);

    }}>Submit1</button>
    

       </>
    )
}

export default Child;