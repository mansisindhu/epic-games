import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./index.css";
import BrowsePage from "./pages/BrowsePage";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import SignupOptionsPage from "./pages/SignupOptionsPage";
import SignupPage from "./pages/SignupPage";
import { fetchGames, fetchUser } from "./store/actions";
import WishlistPage from "./pages/WishlistPage";

const App = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGames());
  }, []);

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

        <Route exact path="/games/:id">
          <GamePage />
        </Route>

        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
