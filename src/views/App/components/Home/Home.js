import React, { Component } from 'react';
import BioCard from './BioCard/BioCard';

/**
 * 
 */
export default class Home extends Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.HomeStyle = {
      margin: "5%",
      width: `90%`,
      "borderRadius":"10px",
      "backgroundColor":"light-grey"
    };
    
  }

  render() {
    return (
      <div className="Home" style={this.HomeStyle}>
        <BioCard />
        <div style={{width:"80%", display:"inline-block"}}></div>
      </div>
    );
  }
}


