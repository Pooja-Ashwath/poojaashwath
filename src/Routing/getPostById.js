import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
  redirect,
  Link,
} from "react-router-dom";

function GetPostById(props) {
  const [data, setData] = useState([]);
  // const [queryData, setQueryData] = useState([]);
  const param = useParams();
  const nav = useNavigate();

  async function f() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${
        param.id ? param.id + "/" : ""
      }`
    );
    setData(res.data);
  }

  useEffect(() => {
    f();
  }, []);

  return (
    <>
      {(Array.isArray(data) ? data : [data]).map((val) => {
        return (
          <div>
            <ul>
              <div
                onClick={() => {
                  nav(`/${val.id}`);
                }}
              >
                {val.id}
              </div>
              {/* <Link to={`/${val.id}`} /> */}
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

export default GetPostById;
