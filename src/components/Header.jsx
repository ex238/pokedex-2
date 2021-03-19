import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    },
    heading: {
    fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    column: {
        flexBasis: '33.33%',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Accordion>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <div className={classes.column}>
                <Typography className={classes.heading}>Pokedex</Typography>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <TextField id="standard-basic" label="Standard" />
        </AccordionDetails>
        </Accordion>
    </div>
    );
}