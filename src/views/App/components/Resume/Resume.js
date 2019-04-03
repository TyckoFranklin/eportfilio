import React, { Component } from "react";
import ResumeNav from "./ResumeNav/ResumeNav";
import ResumeItem from "./ResumeItem/ResumeItem";
import ResumeItems from "./resumeItemsStub";

export default class Resume extends Component {

  constructor(props) {
    super(props);
    this.ScrumStyle = {
      margin: "5%",
      width: `90%`,
      borderRadius: "10px",
      backgroundColor: "light-grey",
      position: "relative"
    };
    this.state = {
      scrumItems: new Set(["Roles"]),
      selectedItem: "Roles"
    };
  }


  handleSelect = (toSelect) => {
    this.setState({
      selectedItem: toSelect
    });
  }


  render() {
    return (
      <div className="Scrum" style={this.ScrumStyle}>        
        <ResumeNav selected={this.state.selectedItem} items={this.state.scrumItems} />
        <div style={{ width: "80%", position: "absolute", left:"20%", top:"0%", display: "inline-block", backgroundColor: "lightGrey" }}>
          <ResumeItem title={ResumeItems.summary.title} description={ResumeItems.summary.description} />
          <ResumeItem title={ResumeItems.technicalSkills.title} description={ResumeItems.technicalSkills.description} />
          <ResumeItem title={ResumeItems.education.title} description={ResumeItems.education.description} />
          <ResumeItem title={ResumeItems.programmingProjects.title} description={ResumeItems.programmingProjects.description} />
          <ResumeItem title={ResumeItems.employmentHistory.title} description={ResumeItems.employmentHistory.description} />
        </div>
      </div>
    );
  }
}
