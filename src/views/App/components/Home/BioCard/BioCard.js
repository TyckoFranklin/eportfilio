import React, { Component } from 'react';

// import '../App.css';

export default class BioCard extends Component {
  render() {
    return (
      <div className="BioCard"
        style={{width:"20%", display:"inline-block"}}
      >
        <img 
          src="https://i.imgur.com/YLKqtnH.jpg"
          style={{width:"100%"}}     
          />
        <div className="info">
          <div className="info-name">Tycko Franklin</div>
          <div className="info-college">Columbia Basin College</div>
          <div className="info-program">BAS-IT Est. 2019</div>
        </div>
        
      </div>
    );
  }
}


