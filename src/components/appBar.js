import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  homePage: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function ButtonAppBar({ page, homePage, history }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          {page}
        </Typography>
        {homePage ? (
          <Typography
            variant="h6"
            className={classes.homePage}
            onClick={() => history.push("/")}
          >
            Home
          </Typography>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  page: PropTypes.string,
  homePage: PropTypes.bool,
  history: PropTypes.object,
};
