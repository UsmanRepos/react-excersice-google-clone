import React from 'react';
import { Switch, Route  } from "react-router-dom";
import './App.css';
import SearchResult from './pages/SearchResult';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path = "/" >
          <Home />
        </Route>
        <Route path = "/search">
          <SearchResult />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
