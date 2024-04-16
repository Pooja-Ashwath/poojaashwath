import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function GetPost(props) {
  const [data, setData] = useState([]);
  const [queryData, setQueryData] = useState([]);
  const param = useParams();

  async function f() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${
        param.id ? param.id + "/" : ""
      }`
    );
    return res.data;
  }

  async function params() {
    const params = new window.URLSearchParams(window.location.search);
    const records = [];
    const netreq = [];
    if (params.get("id") <= 10) {
      for (let i = 1; i <= params.get("id"); i++) {
        netreq.push(
          axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
        );
      }

      Promise.allSettled(netreq)
        .then((res) => {
          console.log("res is ", res);
          setQueryData(
            res
              .filter((rec) => rec.status === "fulfilled")
              .map((rec) => rec.value.data)
          );
        })

        .catch((res) => {});
    }
  }

  return (
    <>
      <button
        onClick={async () => {
          setData(await f());
        }}
      >
        GetAllPosts
      </button>

      {/* {console.log(useLocation())} */}

      {(Array.isArray(data) ? data : [data]).map((val) => {
        return (
          <div>
            <ul>
              <a href={`http://localhost:3000/post/${val.id}`}>{val.id} </a>

              <li>{val.title}</li>
            </ul>
          </div>
        );
      })}

      <button
        onClick={() => {
          params();
        }}
      >
        Submit2
      </button>
      {(Array.isArray(queryData) ? queryData : [queryData]).map((val) => {
        return (
          <div>
            <ul>
              <li>{val.id}</li>
              <li>{val.userId}</li>
              <li>{val.title}</li>
              <li>{val.body}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default GetPost;
