import React, { useState } from "react";
import axios from "axios";
import { NewComponent, NewComponent2 } from "./higherOrderComponent";
import { Wrap1, Wrap2 } from "./higherOrderComponent2";
import { MyApp } from "./DefaultImports";

class Axios1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "payLoad1" : {}
        }
    }

    componentDidMount(){

    }
    componentDidUpdate(props){
        if(props.payload1 !== this.props.payload1){
        const payLoad = {
            "id": this.props.payload1.id1,
            "userId": this.props.payload1.userId1,
            "title": this.props.payload1.title1,
            "body": this.props.payload1.body1
        }

      

        this.setState({payLoad1:payLoad });

        
       
       this.func(payLoad).then((res)=>{
            console.log("pooja", res);
        }).catch(err =>{
            console.log(err);
        })

    } 
    }

    

   async func(p){
        const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/`,p.id);
        return res.data;
    }

    render(){
        return (
            <>
            <NewComponent name={"pooja"} />
            <NewComponent2 />
            <Wrap1 prop1={"prop1"}/>
            <Wrap2 prop2={"prop2"}/>
            <MyApp />
            </>
            
        );

        
    }
}

export default Axios1;