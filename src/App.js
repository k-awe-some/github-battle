import React from "react";
import "./App.css";
import Popular from "./pages/popular/popular.component";
import Battle from "./pages/battle/battle.component";
import { ThemeProvider } from "./contexts/theme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(theme => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="App">
          <Popular />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
