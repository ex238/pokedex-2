import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PokemonDetail from './PokemonDetail';

const useStyles = makeStyles({
    root: {
        width: 150,
        height: 150,
        margin: 10,
        backgroundColor: 'rgba(209, 220, 226, 0.75)',
    },
    media: {
        width: 100,
        height: 100,
    },
    divStyle: {
        width: 1700,
        display: "flex",
        flexWrap: "wrap",
    },
});

export default function PokemonList() {
    const classes = useStyles();
    const pokemonList = pokemons.map(e => (
        <Card className={classes.root} key={e.id}>
            <CardMedia
                className={classes.media}a
                image={`${process.env.PUBLIC_URL}/pokemon.json-master/sprites/` +  ( '000' + e.id ).slice( -3 ) +`MS.png`}
                title="Contemplative Reptile"
            />
            <CardContent>
            <PokemonDetail id={e.id} name={e.name}/>
            </CardContent>
        </Card>
    ))
    return (
        <div className={classes.divStyle}>{pokemonList}</div>
    )
}

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
    {id:12,name:"バタフリー"},
    {id:13,name:"ビードル"},
    {id:14,name:"シミズ"},
    {id:15,name:"スピアー"},
    {id:16,name:"ポッポ"},
    {id:17,name:"ピジョン"},
    {id:18,name:"ピジョット"},
    {id:19,name:"コラッタ"},
    {id:20,name:"ラッタ"},
    {id:21,name:"オニスズメ"},
    {id:22,name:"オニドリル"},
    {id:23,name:"アーボ"},
    {id:24,name:"アーボック"},
    {id:25,name:"ピカチュウ"},
    {id:26,name:"ライチュウ"},
    {id:27,name:"サンド"},
    {id:28,name:"サンドパン"},
    {id:29,name:"ニドラン雌"},
    {id:30,name:"ニドリーナ"}
];