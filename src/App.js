import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Pokedex } from './Containers/Pokedex';
import { MyHeroDex } from './Containers/MyHeroes';
import { Home } from './Containers/Home';
import Header from './Components/Header';


function App() {
  return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />    
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/myHeroes" component={MyHeroDex} />
          </Switch>
        </div>
      </Router>
    );  
}

export default App;
