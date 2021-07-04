import React, { Component } from "react";

import SideNav from "../../Components/SideNav/sideNav.component";
import "./Home.styles.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="Home-container">
        <SideNav />
        <section className="Home-Calender">
          <h1>Calender</h1>
        </section>
      </div>
    );
  }
}
