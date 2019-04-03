import React, { Component } from "react";
import { relative } from "path";

export default class Testing extends Component {
  constructor(props) {
    super(props);
    this.Testing = {
      margin: "5%",
      width: `90%`,
      borderRadius: "10px",
      backgroundColor: "light-grey"
    };
    this.TestingDD = {
      width: `90%`,
      borderRadius: "10px",
      backgroundColor: "white",
      left: "5%",
      position: "relative",
      cursor: "pointer"
    };
    this.placeholder = {
      width: `90%`,
      borderRadius: "10px",
      backgroundColor: "blue",
      border: "1px solid lightblue",
      height: "1rem",
      left: "5%",
      position: "relative",
      cursor: "all-scroll"
    };
    this.draggingStyles = {
      width: `200px`,
      borderRadius: "10px",
      backgroundColor: "white",
      opacity: ".75",
      zIndex: "1000000",
      cursor: "all-scroll"
      
    };
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      draggingStyles:this.draggingStyles
    };
  }

  handleMouseDown(event, i) {
    this.holdingMouseDown = true;
    setTimeout(() => this.checkForDRRRRag(i), 150);
    event.preventDefault();
  }

  handleMouseUp(event, i) {
    this.holdingMouseDown = false;
    this.hoveringMouse = false;
    this.setState({ hovering: false, dragging: false });
  }

  checkForDRRRRag(i) {
    if (this.holdingMouseDown) {
      this.hoveringMouse = true;
      console.log("HOLDING");
      this.setState({
        dragging: i
      });
    } else {
      console.log("clicked");
    }
  }

  handleMouseOver(event, i) {
    if (!this.hoveringMouse) {
      return;
    }
    console.log(i, this.state);
    this.setState({ hovering: i });    
  }

  handleMouseCoords(event){
    const t = event.target.closest(".holderTest");
    const {left, top, height, width } = t.getBoundingClientRect();
    // let x = top < event.pageY ? top + height < event.pageY ? top + height : event.pageY : top
    let y = event.pageY - top;
    y = event.pageY < top + height - 20 ? y : height - 20;
    let x = event.pageX - left;
    // let x = event.pageY < top + height - 20 ? event.pageY - top : (event.pageY - top - 20);
    console.log(event.pageY, top + height - 20);
    let draggingStyles = Object.assign({},this.draggingStyles);
    draggingStyles.top = y+"px";
    // draggingStyles.left = `calc(50% - 100px)`;
    draggingStyles.left = `${x-100}px`;
    draggingStyles.position = "absolute";
    draggingStyles.pointerEvents = "none";
    this.setState({draggingStyles});
    // console.log("left",left,"top",top)
    // console.log("x",event.pageX,"y",event.pageY);
    // console.log("xr",event.pageX - left,"yr",event.pageY - top);
  }

  handleDrop(event, i){
    let items = [...this.state.items];
    const {dragging} = this.state;
    console.log(i, dragging);
    let temp = items.splice(dragging,1)[0];
    console.log(items);
    if(dragging <= i){
      items.splice(i-1,0,temp);
      console.log(items);
      this.setState({items});
    } else {
      items.splice(i,0,temp);
      console.log(items);
      this.setState({items});
    }
    
    
    this.handleMouseUp(event, i);
    
  }

  renderDD() {
    return this.state.items.map((a, i) => {
      return [
        this.state.hovering === i ? (
          <div
            key={i + "before"}
            style={this.placeholder}
            onMouseUp={event => {
              this.handleDrop(event, i);
            }}
          />
        ) : null,
        <div
          key={i}
          style={this.state.dragging === i ? this.state.draggingStyles : this.TestingDD}
          onMouseDown={event => {
            this.handleMouseDown(event, i);
          }}
          onMouseUp={event => {
            this.handleMouseUp(event, i);
          }}
          onMouseOver={event => {
            this.handleMouseOver(event, i);
          }}
        >
          {a}
        </div>,
        this.state.hovering === i ? (
          <div
            key={i + "after"}
            style={this.placeholder}
            onMouseUp={event => {
              this.handleDrop(event, i+1);
            }}
          />
        ) : null
      ];
    });
  }

  render() {
    return (
      <div className="Testing" style={this.Testing}>
        <div className="holderTest" style={{ width: "80%", display: "inline-block", position:"relative" }}
          onMouseMove={(e)=>this.handleMouseCoords(e)}>
          {this.renderDD()}
        </div>
      </div>
    );
  }
}
