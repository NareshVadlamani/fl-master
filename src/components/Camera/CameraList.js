import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import { Card, CardContent, Divider } from "@material-ui/core";
import SearchInput from "./SearchInput";
import SimpleAccordion from "./SimpleAccordian";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    border: "0.5px solid #5f5d70",
  },
  content: {
    padding: 0,
  },
  image: {
    height: 48,
    width: 48,
  },
  actions: {
    justifyContent: "flex-end",
  },
  searchInput: {
    // marginRight:theme.spacing(2),
    margin: theme.spacing(2, 2, 2, 2),
  },
}));

const CameraList = (props) => {
  const { className, handleClickItem, allCamera, handleDrag, ...rest } = props;

  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{ backgroundColor: "rgb(17, 23, 40)" }}
    >
      <SearchInput
        className={classes.searchInput}
        placeholder="Search Camera"
        onChange={props.handleChangeSearch}
      />
      <Divider />

      <CardContent className={classes.content}>
        <SimpleAccordion
          allCamera={allCamera}
          handleClickItem={handleClickItem}
          handleDrag={handleDrag}
        />
      </CardContent>
    </Card>
  );
};

CameraList.propTypes = {
  className: PropTypes.string,
};

export default CameraList;
