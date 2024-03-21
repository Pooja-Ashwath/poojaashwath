import React from "react";
import axios from "axios";
import { useEffect,useState, useContext } from "react";
import {Con} from "./context";
import {Con2} from "./context";

function Providers(props){
   const conValue = useContext(Con);
   const [name, setName] = useState("pooja");
   //console.log("context", conValue);
   console.log("Props", props);

    return(
       <>
     <Con.Provider value={{"name": name, "setName": setName}}>
         <Con2.Provider value={"hi"} >
            {props.children}
         </Con2.Provider>
    </Con.Provider>
    

       </>
    )
}

export default Providers;