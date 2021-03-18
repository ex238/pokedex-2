import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PokemonList from './components/PokemonList';

function App() {
  return (
    <Router>
      <Route component={PokemonList} />
    </Router>
  );
}

export default App;