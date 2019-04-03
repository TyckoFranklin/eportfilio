import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Scrum from './Scrum/Scrum';
import Testing from './Testing/Testing';
import Resume from './Resume/Resume';
import ol from "ol";
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Tycko Franklin E-Portfolio";
    this.state = {
      visible:{
        "Home": true
      }      
    }
    /**
     * 
     * @param {string} navTo 
     */
    this.handleNav = (navTo) => {
      let visible = {};
      visible[navTo] = true;
      this.setState({
        visible
      })
    }
  } 

  render() {
      if(false===false){
          let aa = "this is a test";
          console.log("this was true");          
      }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blah Blah Tycko's E-Portfolio</h1>
          <NavBar currentPage={Object.keys(this.state.visible)[0]} handleNav={this.handleNav}/>
        </header>
        {this.state.visible["Home"] ? <Home /> : null}
        {this.state.visible["Scrum"] ? <Scrum /> : null}
        {this.state.visible["Resume"] ? <Resume /> : null}
        {/* {this.state.visible["Testing"] ? <Testing /> : null} */}
      </div>
    );
  }
}

export default App;
