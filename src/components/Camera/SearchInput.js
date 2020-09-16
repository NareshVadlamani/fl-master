import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "4px",
    alignItems: "center",
    // padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
    backgroundColor: "rgb(17, 23, 40)",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "white",
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px",
    color: "white",
  },
}));

const SearchInput = (props) => {
  const { className, onChange, style, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper {...rest} className={clsx(classes.root, className)} style={style}>
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        onChange={onChange}
        // style={{ backgroundColor: "black" }}
      >
        <SearchIcon className={classes.icon} />
      </Input>
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default SearchInput;
