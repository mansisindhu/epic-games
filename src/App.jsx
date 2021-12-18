import "./index.css";
// import BrowsePage from "./pages/BrowsePage";
// import Footer from './components/Footer/Footer';
import Read from './components/News/Readmore/index'
import Readjurassic from './components/News/Readmorejurassic/index'
import News from './components/News/Newsmain/index'
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
     
          <Switch>
        <Route exact path="/News">
          <News />
        </Route>

        <Route exact path="/Readmore">
          <Read/>
        </Route>
        <Route exact path="/Readmorejurassic">
          <Readjurassic/>
        </Route>
       </Switch>


    </div>
  );
};

export default App;

