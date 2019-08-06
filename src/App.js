import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import Loading from "./components/loading/loading.component";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Popular = React.lazy(() => import("./pages/popular/popular.component"));
const Battle = React.lazy(() => import("./pages/battle/battle.component"));
const Results = React.lazy(() =>
  import("./components/results/results.component")
);

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="App">
              <NavBar />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={Results} />
                  <Route render={() => <h2>404</h2>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
