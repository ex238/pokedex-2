import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 120,
        height: 120,
    },
    media: {
        width: 50,
        height: 50
    },
    divStyle: {
        width: 400,
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
            <Typography gutterBottom variant="body2" component="h6">
                <Link to={'/pokemon/' + e.id}>{e.name}</Link>
            </Typography>
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
    {id:15,name:"スピアー"}
];