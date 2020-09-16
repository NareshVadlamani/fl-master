/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // backgroundColor: "rgb(17, 23, 40)",
  },
  card: {
    backgroundColor: "rgb(17, 23, 40)",
  },
  media: {
    height: 140,
  },
  closeButton: {
    height: "15px",
    position: "absolute",
    right: theme.spacing.unit / 10,
    top: theme.spacing.unit / 10,
    // color: theme.palette.grey[500],
    color: "white",
  },
}));

const CameraCard = (props) => {
  const classes = useStyles();
  const { camera, deleteCard, isDefault, setDefaultCam } = props;
  return (
    <Card
      onClick={() => setDefaultCam(camera.camera_id)}
      style={
        isDefault
          ? { border: "1px solid red" }
          : { border: "1px solid #5f5d70" }
      }
      className={classes.card}
    >
      <CardActionArea>
        <CloseIcon
          className={classes.closeButton}
          onClick={() => deleteCard(camera)}
        />
        <CardContent>
          {/* Having some issue with plugin */}
          {/* <div id="cctv-container"> */}
          {/* <object
              classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921"
              codebase="http://downloads.videolan.org/pub/videolan/vlc/latest/win32/axvlc.cab"
              id="vlc"
              events="True"
              width="200"
              height="200"
            >
              <param
                name="Src"
                value="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4
"
              />
              <param name="ShowDisplay" value="True" />
              <param name="AutoLoop" value="False" />
              <param name="AutoPlay" value="True" />
              <embed
                id="vlcEmb"
                type="application/x-google-vlc-plugin"
                version="VideoLAN.VLCPlugin.2"
                autoplay="yes"
                loop="no"
                target="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
                width="200"
                height="200"
              />
            </object> */}
          {/* <embed
              type="application/x-vlc-plugin"
              pluginspage="http://www.videolan.org"
              width="200"
              height="200"
            //   target="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov"
                target="https://www.youtube.com/watch?v=eqrKxDbzhbg"
              id="vlc"
            /> */}
          <iframe
            width="100%"
            height="100%"
            src={camera.video_url}
          ></iframe>
          <Typography style={{ color: "white", fontSize: 10 }}>{camera.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CameraCard;
