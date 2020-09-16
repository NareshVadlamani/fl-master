import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import Paper from "@material-ui/core/Paper";
import { DraggableItem, CustomTypography } from './styles';
import {
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxHeight: 780,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "white",
  },
  accordianItem: {
    width: "100%",
    textAlign: "justify",
  },
  VideocamIcon: {
    verticalAlign: "middle",
  },
  listStyle: {
    backgroundColor: "rgb(17, 23, 40)",
    maxHeight: "550px",
    overflow: "auto",
    width: "100%",
  },
  listItem: {
    border: "solid 1px #5f5d70",
  },
  accordianBoard: {
    padding: '10px 0px'
  }
}));

const SimpleAccordion = (props) => {
  const classes = useStyles();
  const { allCamera, handleClickItem, handleDrag, ...rest } = props;
  allCamera.sort();

  let accordianObj = (
    <Accordion style={{ backgroundColor: "rgb(17, 23, 40)" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Default</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordianBoard}>
        <List className={classes.listStyle}>
          {allCamera.map(({name, camera_id}) => (
            <DraggableItem
              onDragStart={handleDrag}
              divider={true}
              draggable={true}
              id={camera_id}
            >
            <VideocamIcon className={classes.VideocamIcon} />
              <CustomTypography>
                {"  "}
                {name}
              </CustomTypography>
            </DraggableItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );

  return <div className={classes.root}>{accordianObj}</div>;
};
export default SimpleAccordion;
