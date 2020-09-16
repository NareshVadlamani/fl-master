import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../common/userTable";
import { ManagementSection, BannerHeading } from "./styles";
import Panel from "../common/panel";
import AddUserForm from "./addUserForm";
import { sampleData } from "./sampleData";
import { selectUsers } from "../../modals/userManagement/selectors";
import {
  fetchUsers,
  deleteUser,
  addUser,
  updateUser,
} from "../../modals/userManagement/thunk";
import {
  appFetchAllDesignations,
  appFetchAllUnits,
  appFetchAllRoles,
} from "../../modals/app/thunk";

class UserManagement extends Component {
  state = {
    panelOpenType: "",
    activeUser: null,
  };
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo, "==>");
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  toggleUserPanel = (panelOpenType) => {
    console.log("panel function inside ==>");
    this.setState({ panelOpenType });
  };

  editUser = (user) => {
    this.setState({ panelOpenType: "edit", activeUser: user });
  };

  handleDelete = (status) => {
    this.setState({ showconfirmation: status });
  };

  confirmDelete = () => {
    const { deleteUser } = this.props;
    deleteUser();
    this.handleDelete(false);
  };

  render() {
    const { panelOpenType, activeUser } = this.state;
    const {
      addUser,
      deleteUser,
      updateUser,
      fetchUnits,
      fetchRoles,
      fetchDesignations,
      users,
    } = this.props;
    return (
      <ManagementSection>
        <BannerHeading>User Management</BannerHeading>
        <Table
          action={this.toggleUserPanel}
          rowData={users.users}
          requiredElements={[
            "emp_id",
            "name",
            "phone_number",
            "unit_name",
            "designation_name",
            "role_name",
            "email_id",
            "status",
            "is_active",
          ]}
          columnsElements={[
            "Employee ID",
            "Name",
            "Phone Number",
            "Unit",
            "Designation",
            "Role",
            "Email ID",
            "Setup Status",
            "Active",
          ]}
          panelType={panelOpenType}
          editUser={this.editUser}
          deleteUser={this.confirmDelete}
        />
        <Panel
          panelType={panelOpenType}
          isPanelOpen={Boolean(panelOpenType)}
          Heading={
            panelOpenType === "edit"
              ? "Update user details"
              : panelOpenType === "add"
              ? "Add user"
              : panelOpenType === "searchBy"
              ? "Search By"
              : "Bulk upload users"
          }
          closeAction={this.toggleUserPanel}
        >
          {panelOpenType && (panelOpenType === "add" || "edit") ? (
            <AddUserForm
              cancelAction={this.toggleUserPanel}
              addUser={addUser}
              deleteUser={deleteUser}
              fetchUnits={fetchUnits}
              fetchRoles={fetchRoles}
              fetchDesignations={fetchDesignations}
              preLoadedValues={activeUser}
              isEditing={panelOpenType === "edit"}
              updateUser={updateUser}
            />
          ) : null}
        </Panel>
      </ManagementSection>
    );
  }
}

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = {
  addUser: addUser,
  updateUser: updateUser,
  fetchUsers: fetchUsers,
  deleteUser: deleteUser,
  fetchUnits: appFetchAllUnits,
  fetchDesignations: appFetchAllDesignations,
  fetchRoles: appFetchAllRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
