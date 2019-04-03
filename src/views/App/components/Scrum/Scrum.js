import React, { Component } from "react";
import ScrumNav from "./ScrumNav/ScrumNav";
import ScrumItem from "./ScrumItem/ScrumItem";
import ScrumRoles from "./scrumRolesStub";

export default class Scrum extends Component {

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
        <ScrumNav selected={this.state.selectedItem} items={this.state.scrumItems} />
        <div style={{ width: "80%", position: "absolute", left:"20%", top:"0%", display: "inline-block", backgroundColor: "lightGrey" }}>
          <ScrumItem title={ScrumRoles.scrumMaster.title} description={ScrumRoles.scrumMaster.description} />
          <ScrumItem title={ScrumRoles.productOwner.title} description={ScrumRoles.productOwner.description} />
          <ScrumItem title={ScrumRoles.teamMember.title} description={ScrumRoles.teamMember.description} />
        </div>
      </div>
    );
  }
}
