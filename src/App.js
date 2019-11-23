import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heros: [
        {
          id: "01",
          name: "Ironman"
        },
        {
          id: "02",
          name: "Captain America"
        },
        {
          id: "03",
          name: "Spiderman"
        },
        {
          id: "04",
          name: "Thor"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.heros.map(hero => (
          <h1 key={hero.id}> {hero.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
