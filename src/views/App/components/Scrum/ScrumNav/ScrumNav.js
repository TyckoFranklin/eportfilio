import React, { Component } from "react";

// import '../App.css';

export default class ScrumNav extends Component {
  constructor(props){
    super(props);
    this.style = {
      color: "white"
    }
    this.activeStyle = {
      ...this.style,
      backgroundColor: "purple"
    }
  }
  renderItems() {
    let returnArray = [];
    this.props.items.forEach(element => {
      let style = element === this.props.selected ? this.activeStyle : this.style;
      returnArray.push(<div className="scrumItem" style={style}>{element}</div>);
    })
    
    return returnArray;
  }
  render() {
    return (
      <div
        className="ScrumNav"
        style={{ width: "20%", position: "absolute", left:"0%", top:"0%", display: "inline-block" }}
      >
        <div className="Title"
        style={{ fontSize: "1.3rem", margin: "1rem", color: "white", fontWeight: "700" }}
        >Scrum Information</div>
        {this.renderItems()}
      </div>
    );
  }
}
