import React from "react";

function HOC(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                'myname': 'pooja'
            }
        }
        render() {
            return (
                <WrappedComponent customState={this.state} {...this.props}/>
            )
            
        }
    }
}

function hello(props) {
    console.log('hello props ', props);
    return (
        <div>
            {"hello"}
        </div>
    )
}

function hi(props) {
    console.log('hi props ', props);
    return (
        <div>
            {"hi"}
        </div>
    )
}

export const NewComponent = HOC(hello);
export const NewComponent2 = HOC(hi);