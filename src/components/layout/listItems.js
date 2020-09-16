import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const mainListItems = (
  <>
    <ListItem button>
      <a href="/dashboard">
        <ListItemIcon>
          <DashboardIcon style={{ color: "white" }} />
        </ListItemIcon>
      </a>
      <ListItemText primary="Dashboard" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon >
        <ShoppingCartIcon style={{ color: "white" }}/>
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </>
);
