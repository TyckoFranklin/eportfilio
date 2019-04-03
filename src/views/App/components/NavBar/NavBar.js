import React, { Component } from 'react';

// import '../App.css';

/**
 * 
 */
export default class NavBar extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.NavBarItemStyle = {
      width: `calc(80% / 5)`,
      // padding: `0 2.5% 0 2.5%`,
      display: "inline-block",
    };
    this.LinkTextStyle = {
      width: "fit-content",
      cursor: "pointer",
      margin: "auto"
    };
  }

  render() {
    const { handleNav, currentPage } = this.props;
    return (
      <div className="NavBar">
        <div className={"NavBar-Item"} style={this.NavBarItemStyle}>
          <div className={(currentPage === "Home" ? " active":"")} style={this.LinkTextStyle} onClick={()=>handleNav("Home")}>Home</div>
        </div>
        <div className={"NavBar-Item"} style={this.NavBarItemStyle}>
          <div className={(currentPage === "Resume" ? " active":"")} style={this.LinkTextStyle} onClick={()=>handleNav("Resume")}>Resume</div>
        </div>
        <div className={"NavBar-Item"} style={this.NavBarItemStyle}>
          <div className={(currentPage === "Scrum" ? " active":"")} style={this.LinkTextStyle} onClick={()=>handleNav("Scrum")}>Scrum</div>
        </div>
        <div className={"NavBar-Item"} style={this.NavBarItemStyle}>
          <div className={(currentPage === "Resources" ? " active":"")} style={this.LinkTextStyle} onClick={()=>handleNav("Resources")}>Resources</div>
        </div>
        {/* <div className={"NavBar-Item"} style={this.NavBarItemStyle}>
          <div className={(currentPage === "Testing" ? " active":"")} style={this.LinkTextStyle} onClick={()=>handleNav("Testing")}>Testing</div>
        </div> */}
      </div>
    );
  }
}


