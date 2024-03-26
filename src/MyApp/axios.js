// import { useEffect, useState, useRef } from "react";
// import axios from "axios";

// // LifeCycle methods in class components
// // ComponentDidMount, shouldComponentUpdate, ComponentDidUpdate , componentDidUnmount
// function Axios(props) {
//     const [response, setResponse] = useState([]);
//     const [resData, setResData] = useState({});
//     const ref = useRef();

//     useEffect(() => {

//         const f = async () => {

//             const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id1 ? props.id1 : 1}/`);
//             return response;
//         }
//         try {
//             f().then((res) => {
//                 console.log(res);
//                 setResponse(res.data);
//                 ref.current = res.data;

//                 const data1 = [ref.current].reduce((prev, curr) => {
//                     return { ...prev, [curr.id]: curr }
//                 }, {});
//                 setResData(data1);
//                 console.log("Hello", data1);
//                 //console.log("hello",Object.keys(data1));
//                 // console.log(Object.values(data1));
//                 //console.log(Object.entries(data1));

//                 console.log("Hi", props.id);

//             });

//         }
//         catch {
//             console.log("ERROR");
//         }

//         console.log(props.payload1);
//         console.log('am here')
//         // const payLoad = {
//         //     "id": props.payload1.id1,
//         //     "userId": props.payload1.userId1,
//         //     "title": props.payload1.title1,
//         //     "body": props.payload1.body1
//         // }
//         // if (payLoad.id) {
//         //     f(payLoad).then((res) => {
//         //         console.log(res);
//         //     }).catch(err => {
//         //         console.log(err);
//         //     });
//         // }

//     }, [props.payload1]);

//     const f = async (p) => {
//         try {
//             const func = await axios.put(`https://jsonplaceholder.typicode.com/posts/${p.id}`, p);
//             return func.data;
//         } catch {

//         }

//     }
//     return (
//         <div>
//             {/* { response.map((val)=>{
//                 return <div><div>{val.id}</div> <div> {val.title}</div></div>;
//            })} */}
//             {/* {
//              <div>{resData}</div>
//            } */}
//             {
//                 Object.values(resData).map((val) => {
//                     //console.log(val);
//                     return <div><div>{val.id}</div> <div> {val.title}</div></div>;
//                     //return <div>{val}</div>
//                 })
//             }

//         </div>

//     )

// }

// export default Axios;

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Axios(props){
//     const [response,setResponse] = useState([]);
//     useEffect(() => {
//         const f = async () => {
//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//             return response;

//         }

//         f().then((res) => {
//             console.log(res.data);
//             setResponse(res.data);
//         }).catch((err) => {
//             console.log("hi", err);
//         })

//     }, [])
//     return(
//         <>

//         </>
//     )
// }

// export default Axios;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Axios(props) {
  const [response, setResponse] = useState([]);
  const [arr, setArr] = useState({});
  useEffect(() => {
    const f = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${
          props.Id1 ? props.Id1 : 2
        }/`
      );
      return res;
    };

    f()
      .then((res) => {
        setResponse(res.data);

        console.log("res", res.data);

        const data = [res.data].reduce((prev, curr) => {
          return { ...prev, [curr.id]: curr };
        }, {});
        console.log("Arr", data);
        setArr(data);
        console.log("values", Object.values(data));
      })
      .catch((err) => {
        console.log("error", err);
      });

    const payload2 = {
      Id1: props.payload1.Id,
      UserId1: props.payload1.UserId,
      Title1: props.payload1.Title,
      Body1: props.payload1.Body,
    };

    if (payload2.Id1) {
      f1(payload2)
        .then((res) => {
          console.log("hiiiiiiiiiiiiiii", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.payload1]);

  const f1 = async (p) => {
    const func = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      p
    );
    //const func = await axios.put(`https://jsonplaceholder.typicode.com/posts/${p.Id1}`, p);

    //console.log("return", func);
    return func;
  };

  return (
    <div>
      {/* {response.map((val) =>{
               return <div><div>{val.id}</div> <div>{val.title}</div>
               </div>
            })} */}

      {/* { 
                Object.entries(arr).map((val)=>{
                    return <div><div>{val[1].id}</div> <div>{val[1].title}</div></div>
                })
            } */}

      {Object.values(arr).map((val) => {
        return (
          <div>
            <div>{val.id}</div>
            <div>{val.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Axios;
