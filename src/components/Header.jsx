import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#333",
  },
  input: {
    color: "#fff",
    backgroundColor: "#515151",
    marginLeft: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    width: 120,
    // flex: 1,
  },
  iconButton: {
    color: "#fff",
    padding: 10,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <div class="logo">
            <b>
              <span>P</span>
              <span>o</span>k<span></span>e<span></span>
              <span>d</span>e<span></span>x<span></span>
            </b>
          </div>
          <InputBase className={classes.input} placeholder="ポケモン検索" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <i class="nes-charmander"></i>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
