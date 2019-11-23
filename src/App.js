import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heros: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then(response => response.json())
      .then(heros => this.setState({ heros: heros }));
  }
  render() {
    const { heros, searchField } = this.state;
    const filteredHeros = heros.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // eslint-disable-next-line no-unused-expressions
    return (
      <div className="App">
      <h1>Enhanced Humans Database</h1>
        <SearchBox
          placeholder="Search Characters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList heros={filteredHeros}></CardList>
      </div>
    );
  }
}

export default App;
