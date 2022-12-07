//exmaple of class component and state in class 

import React, { Component } from "react";
//import React from "react";
// class User extends React.Component{ or

export default class User extends Component{
    // when we use this keyword then used constructor
    constructor(){
        super();
        this.state={
            // data:"nischal"
            data : 1
        }
    }
    hello(){
        // alert("Say Happy Birthday!!");
        // this.setState({data:"Happy Birthday Rita"});
        
        this.setState({data:this.state.data + 1});
    }
    render()
    {
        return(
            <div>
            <h1 style={{color:"red"}}>User Class Component Demo,{this.state.data}</h1>
            <button onClick = {()=>this.hello()}>Update Data</button>
            </div>
        );
    }
}

//we can use class component in single file