import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CameraCard from "./CameraCard";
import { Grid, Paper } from "@material-ui/core";
import { DropArea, Directions, TextInfo } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxheight: "743px",
    // minheight: "500px",
    overflow: "auto",
    flexGrow: 1,
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
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CameraZone = (props) => {
  const {
    className,
    selectedCamera,
    deleteCard,
    setDefaultCam,
    defaultCam,
    afterDrop,
    afterDragOver,
    ...rest
  } = props;
  const classes = useStyles();
  let isDefault = true;
  if (selectedCamera.length === 1) {
    setDefaultCam(selectedCamera[0].camera_id);
  }
  console.log("default camera", selectedCamera);
  const cameraCards = selectedCamera.map((camera, index) => {
    return (
      <Grid item md={3} sm={6}>
        <CameraCard
          deleteCard={deleteCard}
          isDefault={defaultCam === camera.camera_id ? true : false}
          camera={camera}
          setDefaultCam={setDefaultCam}
        />
      </Grid>
    );
  });

  return (
    <DropArea
      onDrop={afterDrop}
      onDragOver={afterDragOver}
      style={{ height: "740px", overflowY: "auto" }}
    >
      <Grid container spacing={2}>
        {selectedCamera.length ? (
          selectedCamera.map((camera, index) => {
            return (
              <Grid item md={3} sm={6}>
                <CameraCard
                  deleteCard={deleteCard}
                  isDefault={defaultCam === camera.camera_id ? true : false}
                  camera={camera}
                  setDefaultCam={setDefaultCam}
                />
              </Grid>
            );
          })
        ) : (
          <Directions>
            <TextInfo>Please Darg and drop selected camera here</TextInfo>
          </Directions>
        )}
      </Grid>
    </DropArea>
  );
};

CameraZone.propTypes = {
  className: PropTypes.string,
};

export default CameraZone;
