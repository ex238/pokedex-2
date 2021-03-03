import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

function App() {
 return (
   <Router>
     <Route component={PokemonList} />
     <Route path='/pokemon/:id' component={PokemonInfo} />
   </Router>
 );
}

export default App;

const pokemons = [
  {id:1,name:"フシギダネ"},
  {id:2,name:"フシギソウ"},
  {id:3,name:"フシギバナ"},
  {id:4,name:"ヒトカゲ"},
  {id:5,name:"リザード"},
  {id:6,name:"リザードン"},
  {id:7,name:"ゼニガメ"},
  {id:8,name:"カメール"},
  {id:9,name:"カメックス"},
  {id:10,name:"キャタピー"},
  {id:11,name:"トランセル"},
  {id:12,name:"バタフリー"}
];