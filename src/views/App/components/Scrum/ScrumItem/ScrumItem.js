import React, { Component } from "react";

// import '../App.css';

export default class ScrumItem extends Component {
  constructor(props){
    super(props);   
    
  }
  
  render() {
    return (
      <div
        className="ScrumItem"       
      >
        <div style={{fontWeight: "700", fontSize:"2rem", margin:"3rem"}}>{this.props.title}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}
