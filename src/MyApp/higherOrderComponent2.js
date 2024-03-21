import React from "react";

function HOC2(Wrapped) {
    return function WrappedComponent(props) {
        return (
            <>
            {"Inside wrapped component"}
            <Wrapped {...props}/>
            </>
        )
    }
}

function cmp1(props) {
    console.log('props in cmp1 ', props);

    return (
        <>
            {"Inside cmp1"}
        </>
    )
}

function cmp2(props) {
    console.log('props in cmp2 ', props);
    return (
        <>
            {"Inside cmp2"}
        </>
    )
}

export const Wrap1 = HOC2(cmp1);
export const Wrap2 = HOC2(cmp2);






