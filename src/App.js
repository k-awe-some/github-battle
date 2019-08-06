import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import Popular from "./pages/popular/popular.component";
import Battle from "./pages/battle/battle.component";
import Results from "./components/results/results.component";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="App">
              <NavBar />
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
