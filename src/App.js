import React from "react";
import "./App.css";
import Popular from "./pages/popular/popular.component";
import Battle from "./pages/battle/battle.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Popular />
      </div>
    );
  }
}

export default App;
