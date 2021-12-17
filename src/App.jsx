import { Switch, Route } from "react-router-dom";

import "./index.css";
import BrowsePage from "./pages/BrowsePage";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import SignupOptionsPage from "./pages/SignupOptionsPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/signup">
          <SignupOptionsPage />
        </Route>

        <Route exact path="/signup/display-name">
          <SignupPage />
        </Route>

        <Route exact path="/browse">
          <BrowsePage />
        </Route>

        <Route exact path="/game/:id">
          <GamePage />
        </Route>

        <Route exact path="/wishlist">
          {/* wishlist */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
