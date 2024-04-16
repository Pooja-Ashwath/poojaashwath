import React from "react";
import { useState } from "react";
import HooksDemoChild from "./hooksDemoChild";

function HooksDemoParent() {
  const [toggle, setToggle] = useState(false);
  const [arr, setArr] = useState([1, 2, 3, 4]);

  return (
    <div>
      <HooksDemoChild arr={arr} />
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
    </div>
  );
}

export default HooksDemoParent;
