import React, { Component } from "react";

// import '../App.css';

export default class ResumeItem extends Component {
  constructor(props){
    super(props);   
    
  }
  
  render() {
    return (
      <div
        className="ResumeItem"       
      >
        <div style={{fontWeight: "700", fontSize:"2rem", margin:"3rem"}}>{this.props.title}</div>
        <div><pre style={{ whiteSpace: "pre-wrap", wordWrap:"break-word"}}>{`${this.props.description}`}</pre></div>
      </div>
    );
  }
}
