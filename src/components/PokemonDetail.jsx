import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    list: {
        width: 250,
        height: 800,
    },
    fullList: {
        width: 'auto',
    },
});

export default function PokemonDetail(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const PokemonDetailDrawer = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
        <img src={`${process.env.PUBLIC_URL}/pokemon.json-master/pokemon_dot/` + props.id + `.png`} alt="Logo" />
        <h4　 onClick={toggleDrawer(anchor, false)}>閉じる</h4>
        </div>
    );

    return (
        <div>
        {['bottom'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{props.name}</Button>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {PokemonDetailDrawer(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}
