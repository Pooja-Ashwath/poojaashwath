import React, { useCallback, useMemo, useRef } from "react";
import HooksDemoParent from "./hooksDemoParent";

function HooksDemoChild(props) {
  console.log("Hi", props);

  const f = () => {
    const sum = props.arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    console.log("Child", sum);
    return sum;
  };

  const ref2 = useRef();

  const ref = useRef();

  const useCallBackResult = useCallback(() => {
    const sum = props.arr.reduce((prev, curr) => {
      //  console.log("Inside Reduce");
      return prev + curr;
    }, 0);
    console.log("UseCallBack", sum);
    return sum;
  }, [props.arr]);

  const memoisedResult = useMemo(() => {
    const sum = props.arr.reduce((prev, curr) => {
      console.log("Inside Reduce");
      return prev + curr;
    }, 0);
    console.log("UseMemo", sum);
    ref.current = useCallBackResult;
    ref2.current = f;
    return sum;
  }, [props.arr]);

  console.log("callBack", String(useCallBackResult));

  return (
    <>
      <div>{f()}</div>
      <div>{memoisedResult}</div>
      <div>
        {"hello"}
        {/* szzz */}
        {String(Boolean(useCallBackResult === ref.current))}
        <div>{String(Boolean(f === ref2.current))}</div>
      </div>
    </>
  );
}

export default HooksDemoChild;
