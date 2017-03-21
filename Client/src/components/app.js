import React, { Component } from 'react';
import { Link } from 'react-router';
export default class App extends Component {
  render() {
    return (
      <div>
      <header>
      <div className="logo"><h1>BrownSugar  <span className="guitar"><img src="http://localhost:3090/hand-holding-up-a-guitar.png" /></span></h1></div>
      <nav>
      <ul>
      	<li><Link to="/home">Home</Link></li>
      	<li><Link to="/about">About me</Link></li>
      	<li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
      </header>
      {this.props.children}
      </div>
    );
  }
}
