import React from 'react';
import {Link} from "react-router-dom";

class PokemonList extends React.Component {
    render () {
        const pokemonList = pokemons.map(e => (
        <li key={e.id}>
            <Link to={'/pokemon/' + e.id}>{e.name}</Link>
        </li>
        ))
        return (
        <div>
            <ul>{pokemonList}</ul>
        </div>
        )
    }
}

export default PokemonList;

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