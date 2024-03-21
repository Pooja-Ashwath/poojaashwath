import React from "react";
import axios from "axios";
import { useEffect,useState, useContext } from "react";
import {Con} from "./context";

function Child2(props){
   const conValue = useContext(Con);
   console.log("context", conValue);

    return(
       <>
    <button onClick={()=>{conValue.setName("Child2")}}>Submit2</button>
    

       </>
    )
}

export default Child2;