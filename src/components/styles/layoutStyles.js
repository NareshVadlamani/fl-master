import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#111728",
    height: 55,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  infopaper: {
    marginLeft: "10px",
  },
  infoMap: {
    marginLeft: "10px",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  nextbutton: {
    color: "white",
  },
  drawerPaper: {
    position: "relative",
    background: "#111728",
    color: "white",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7),
    },
  },
  ruleCard: {
    height: "124px",
    width: "222px",
    marginLeft: "22px",
    backgroundColor: "#111728",
  },
  rulecardLogo: {
    maxHeight: 80,
    paddingBottom: 10,
    paddingRight: 200,
  },
  navigationButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
  },
  Buttons: {
    color: "white",
  },
  SubTitle: {
    color: "white",
    display: "flex",
    fontSize: "28px",
    justifyContent: "flex-start",
  },
  addzone: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    background: "#0D111E",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(30),
    backgroundColor: "#111728",
    overflow: "auto",
    flexDirection: "column",
    paddingRight: "100px",
  },
  fixedHeight: {
    height: 10,
  },
  selectionIndecator: {
    color: "#2dd1ac",
  },
}));
