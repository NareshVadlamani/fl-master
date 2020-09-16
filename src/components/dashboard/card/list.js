import React, { Component } from "react";
import { connect } from "react-redux";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import {
  LogoutMenuButton,
  LogoutMenuContainer,
  ProfileSection,
  ProfileInfo,
} from "./styles";
// import {
//   APP_MENU_SELECT_ACTIVITY,
//   LANDING_MORE_OPTIONS
// } from 'actions/app/constants/tracking';
// import { appSelectTheme } from 'selectors/app';
// import { userSelectId } from 'selectors/user';
// import { userHandleLogout } from 'actions/user';
// import { appSetIsContextMenuActive } from 'actions/app/actionCreators';
// import { landingSetActivity } from 'models/landing/actions';
// import { appTrackEvent } from 'actions/common';
// import themes from '../../../Shared/themes';

const styles = {
  popper: { zIndex: 1 },
  menustyles: {
    position: "absolute",
    bottom: "-1remrem",
    left: "-5rem",
    borderRadius: "0",
    padding: "0",
    width: "10rem",
    boxShadow: "0px 14px 13px -5px rgba(0,0,0,0.75)",
  },
  menuItemStyles: {
    color: "#fff",
  },
};

class ListComposition extends Component {
  state = { open: false };

  anchorEl = null;

  handleOptionsButtonClick = ({ currentTarget }) => {
    this.anchorEl = currentTarget;
    const { trackEvent } = this.props;
    const open = !this.state.open;
    this.setState({ open });
  };

  handleToggle = (e) => {
    if (this.anchorEl.contains(e.target)) {
      return;
    }
    this.setState({ open: false });
  };

  handleLogout = () => {
    this.props.logoutCurrentUser();
  };

  handlePreferencesOptionClick = () => {
    const { setLandingActivity, openContextMenu } = this.props;
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { userId, theme } = this.props;
    return (
      <LogoutMenuContainer>
        <LogoutMenuButton
          theme={theme}
          onClick={this.handleOptionsButtonClick}
          id={"profile_options"}
        >
          <MoreIcon />
        </LogoutMenuButton>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          placement="top-start"
          transition
          disablePortal
          style={styles.popper}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} id="menu-list-grow">
              <Paper
                style={{
                  ...styles.menustyles,
                  background: "#0d111e",
                }}
              >
                <ClickAwayListener onClickAway={this.handleToggle}>
                  <MenuList style={{ padding: "0" }}>
                    <MenuItem style={styles.menuItemStyles}>
                      <ProfileSection>
                        <p>Schedule WIP</p>
                      </ProfileSection>
                    </MenuItem>
                    <MenuItem
                      onClick={this.handlePreferencesOptionClick}
                      style={styles.menuItemStyles}
                    >
                      <p>View WIP</p>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </LogoutMenuContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  //   theme: appSelectTheme(state),
  //   userId: userSelectId(state)
});

export default connect(mapStateToProps, {
  // logoutCurrentUser: userHandleLogout,
  // openContextMenu: appSetIsContextMenuActive,
  // setLandingActivity: landingSetActivity,
  // trackEvent: appTrackEvent
})(ListComposition);
