import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

class App extends Component {
	        constructor(props) {
  super(props);
  this.state = {
  working: false
};
}
handleClick = () => {
  this.setState({ working: !this.state.working });
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={(this.state.working === false) ? "App-logo" : "App-logobis"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
	<button
  	onClick={this.handleClick}
	>WORK WORKK WORK WOOORK WORK
	</button>

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;

