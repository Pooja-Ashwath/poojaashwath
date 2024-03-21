import React from "react";

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name1: "pooja1",
            country1: "America"
        }
        console.log("props" , props.name);
    }
    componentDidMount(){
        console.log("propsInComponentDidMount" , this.props);
        console.log("In componentDidMount", this.state);
    }
    componentWillUnmount(){
        console.log("In componentwillUnMount");
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.name !== this.props.name)
        console.log("In componentDidUpdate", prevProps, this.props.name);
        if(prevProps.country !== this.props.country)
        console.log("In componentDidUpdate", prevProps, this.props.country);

        if(prevState.name1 !== this.state.name1)
        console.log("In componentDidUpdate", this.state.name1);
        if(prevState.country1 !== this.state.country1)
        console.log("In componentDidUpdate", this.state.country1);


        
    }
    render(){
        return(
        <div>
            <button onClick={()=>{this.props.setName("NewPooja") ;
        this.setState({
            name1:"pooja2"
        },()=>{
            console.log("Name1 state is updated", this.state.name1)
        })}}>Click Name</button>
            <button onClick={()=>{this.props.setCountry("US")}}>Click Country</button>


           {"class component"}
        </div>
        )
    }

}

export default MyClassComponent;