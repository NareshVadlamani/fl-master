import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../styles/layoutStyles";
import Information from "../information/information";
import { Camera } from "../Camera/camera";
import Rules from "../rules/rules";
import Preview from "../preview/preview";
import Select from "../select/select";

import TabPanel from "../TabPanel/TabPanel";
import styled from "styled-components";
import { ZonesPanelsContainer, ZonesSection } from "./styles";

export default function Layout({ navOpen }) {
  const classes = useStyles();
  const tabClasses = customSTabtyles();
  const [value, setValue] = React.useState(0);

  const handleChangeButton = (event) => {
    setValue(event);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  } // if(personnelPermitted)

  return (
    <ZonesSection>
      <Header>
        <AppBar classsName={classes.appBar} position="static">
          <Tabs
            className={tabClasses.root}
            value={value}
            aria-label="simple tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2dd1ac",
              },
            }}
          >
            <Tab label="Select" {...a11yProps(0)} />
            <Tab label="Zone Information" {...a11yProps(1)} />
            <Tab label="Camera" {...a11yProps(2)} />
            <Tab label="Rules" {...a11yProps(3)} />
            <Tab label="Preview" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
      </Header>
      <ZonesPanelsContainer>
        <TabPanel value={value} index={0}>
          <Select handleChange={handleChangeButton} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Information handleChange={handleChangeButton} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Camera setValue={setValue} value={value} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Rules handleChange={handleChangeButton} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Preview
            handleChange={handleChangeButton}
            setValue={setValue}
            value={value}
          />
        </TabPanel>
      </ZonesPanelsContainer>
    </ZonesSection>
  );
}

const Header = styled.div`
  margin: 24px 32px 0 32px;
  pointer-events: none;
  border-bottom: 1px solid #5f5d70;
`;

const styles = {
  root: {
    padding: "0 1rem 0 1rem",
    fontSize: "1.4rem",
    background: "#111728",
  },
};

const customSTabtyles = makeStyles(styles);
