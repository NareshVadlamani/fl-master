import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../common/userTable";
import { ManagementSection, BannerHeading } from "./styles";
import Panel from "../common/panel";
import AddUserForm from "./addUserForm";
import { sampleData } from "./sampleData";
import { workforceSelectWorkers } from "../../modals/workForceManagement/selectors";
import {
  fetchWorkForceWorkers,
  deleteWorkForceWorker,
  addWorkForceWorker,
  updateWorkForceWorker,
} from "../../modals/workForceManagement/thunk";
import {
  appFetchAllDesignations,
  appFetchAllUnits,
} from "../../modals/app/thunk";
import DeleConfirmationDailog from "../common/confirmationDailog";

class WorkForceManagement extends Component {
  state = {
    panelOpenType: "",
    activeUser: null,
    showDailog: false,
    deletingUser: null,
  };
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo, "==>");
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  toggleUserPanel = (panelOpenType) => {
    if (!panelOpenType) this.setUser(null);
    this.setState({ panelOpenType });
  };

  editUser = (user) => {
    this.setState({ panelOpenType: "edit", activeUser: user });
  };

  setUser = (user) => {
    this.setState({ activeUser: null });
  };

  showConfirmation = (user) => {
    const { showDailog } = this.state;
    this.setState({ showDailog: !showDailog, deletingUser: user });
    console.log("show dailog clicked ==>", !this.state.status, user);
  };

  confirmDelete = (user) => {
    const { deleteUser } = this.props;
    console.log("deleting user ==>", user);
    deleteUser(user);
    this.showConfirmation(null);
  };

  render() {
    const { panelOpenType, activeUser, showDailog, deletingUser } = this.state;
    const {
      addUser,
      updateUser,
      fetchUnits,
      fetchDesignations,
      workers,
    } = this.props;
    return (
      <ManagementSection>
        <BannerHeading>Work force Management</BannerHeading>
        <Table
          action={this.toggleUserPanel}
          rowData={workers}
          panelType={panelOpenType}
          editUser={this.editUser}
          deleteUser={this.showConfirmation}
          confirmDelete={this.confirmDelete}
        />
        <Panel
          panelType={panelOpenType}
          isPanelOpen={Boolean(panelOpenType)}
          Heading={
            panelOpenType === "edit"
              ? "Update user details"
              : panelOpenType === "add"
              ? "Add user"
              : "Bulk upload users"
          }
          closeAction={this.toggleUserPanel}
        >
          {panelOpenType && (panelOpenType === "add" || "edit") ? (
            <AddUserForm
              cancelAction={this.toggleUserPanel}
              addUser={addUser}
              // deleteUser={this.handleDelete}
              fetchUnits={fetchUnits}
              fetchDesignations={fetchDesignations}
              preLoadedValues={activeUser}
              isEditing={panelOpenType === "edit"}
              updateUser={updateUser}
            />
          ) : null}
        </Panel>
        <DeleConfirmationDailog
          openDailog={showDailog}
          confirmAction={this.confirmDelete}
          cancelAction={this.showConfirmation}
          user={deletingUser}
        />
      </ManagementSection>
    );
  }
}

const mapStateToProps = (state) => ({
  workers: workforceSelectWorkers(state),
});

const mapDispatchToProps = {
  addUser: addWorkForceWorker,
  updateUser: updateWorkForceWorker,
  fetchUsers: fetchWorkForceWorkers,
  deleteUser: deleteWorkForceWorker,
  fetchUnits: appFetchAllUnits,
  fetchDesignations: appFetchAllDesignations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkForceManagement);
