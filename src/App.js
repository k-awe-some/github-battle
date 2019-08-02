import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
