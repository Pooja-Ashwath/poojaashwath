// import { useEffect, useState, useRef } from "react";
// import Axios from "./axios";
// import Axios1 from "./classComponent1";
// import MyClassComponent from "./classComponent";

// // LifeCycle methods in class components
// // ComponentDidMount, shouldComponentUpdate, ComponentDidUpdate , componentDidUnmount
// function MyApp(props) {
//   const [name, setName] = useState("pooja");
//   const [country, setCountry] = useState("India");
//   const [id, setId] = useState(1);
//   const [id1, setId1] = useState();
//   const [payload, setPayload] = useState({});
//   const [payload1, setPayload1] = useState({});

//   const myRef = useRef();



//   useEffect(() => {
//     console.log("Component Mounted", props);


//   }, [props.festival]);
//   console.log("ref Varaible", myRef.current);
//   return (
//     <div>
//       <input type="number" onChange={(val) => {
//         payload["id1"] = val.target.value;
//         setPayload({ ...payload })
//         if (myRef.current)
//           console.log('ref latest calue ', myRef.current.value)
//       }} />ID

//       <div>

//         <input ref={myRef} type="number"
//           onChange={(val) => {
//             // console.log(val.target.value);
//             const data = { ...payload };
//             data["userId1"] = val.target.value;
//             setPayload(data)
//           }} />userId</div>

//       <div><input type="text" onChange={(val) => {
//         const data = { ...payload };
//         data["title1"] = val.target.value;
//         setPayload(data)
//       }} />title</div>

//       <div><input type="text" onChange={(val) => {
//         const data = { ...payload };
//         data["body1"] = val.target.value;
//         setPayload(data)
//       }} />body</div>

//       <button type="submit" onClick={() => { setPayload1(payload) }}>Submit</button>

//       <Axios payload1={payload1} />
//       <Axios1 payload1={payload1} />
//       {"Hello"
//       }
//       {/* {props.festival == "diwali" ?
//         props.festival : ""
//       }
//       <button onClick={() => {
//         props.setFestival("diwali");
//       }}>Click ME</button> */}

//       {/* <MyClassComponent name={name} setName={setName} country={country} setCountry={setCountry}/> */}
//     </div>
//   );
// }

// export default MyApp;

 import React from "react";
 import {useState, useEffect} from 'react';
 import Axios from "./axios";
 import MyComponent from "./classComponent";
 import Context from "./context";
 import Providers from "./combiningProviders";

 function MyApp(props){
     const [name, setName] = useState("pooja");
     const [country, setCountry] = useState("India");
     const [Id, setId] = useState();
     const [Id1, setId1] = useState();
     const [payload, setPayload] = useState({});
     const data = {...payload};
     //const data = {};
    //  console.log("hiiiiiiiiiiiiiiii", data);
     const [payload1, setPayload1] = useState({});
   useEffect(()=>{

   },[])

   return(
    <>
    <input type="number" onChange = {(val)=>{
        console.log(val.target.value);
        // setId(val.target.value);
        // payload["Id"] = val.target.value;
        data["Id"] = val.target.value;
        setPayload({...data});

    }} /> ID
 
    <input type="number" onChange = {(val)=>{
        console.log(val.target.value);
        // setUserId(val.target.value);
        // payload["UserId"] = val.target.value;
        data["UserId"] = val.target.value;
        setPayload({...data});

    }} /> UserId

    <input type="text" onChange = {(val)=>{
        console.log(val.target.value);
        // setTitle(val.target.value);
        // payload["Title"] = val.target.value;
        data["Title"] = val.target.value;
        setPayload({...data});

    }} /> Title

    <input type="text" onChange = {(val)=>{
        console.log(val.target.value);
        // setBody(val.target.value);
        // payload["Body"] = val.target.value;
        data["Body"] = val.target.value;
        setPayload({...data});

    }} /> Body

    <div>
      <button onClick = {()=>{
        // setId1(Id);
        setPayload1({...payload});
        console.log("PayLoad", payload);
        console.log("PayLoad1", payload1);
      }}>Submit</button>

    </div>


    <Axios payload1 = {payload1}/>
    <Context /> 
  
    
    <MyComponent name = {name} setName={setName} country = {country} setCountry={setCountry} />
    {props.festival == "diwali" ? props.festival : ""}

    </>
   )

 }


 export default MyApp;
