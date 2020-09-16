import React from "react";
import clsx from "clsx";
import Axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { Checkbox, Grid } from "@material-ui/core";
import { useStyles } from "../styles/layoutStyles";
import AddUsers from "./addusers/addusers";
import EditUsers from "./editUser";
import "./users.css";
import { ManagementSection, BannerHeading, UsersSection } from "./styles";

export default function Users() {
  const classes = useStyles();
  const [currentData, setCurrentData] = React.useState({});
  const [users, setUsers] = React.useState([]);
  const [state, setState] = React.useState({
    right: false,
  });
  const [editState, setEditState] = React.useState({
    right: false,
  });

  const toggleAddUser = (anchor, open, data = null, isSaved = false) => (
    event
  ) => {
    if (data) {
      data.isSelected = true;
      setCurrentData(data);
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const toggleEditUser = (anchor, open, data = null, isSaved = false) => (
    event
  ) => {
    if (data) {
      data.isSelected = true;
      setCurrentData(data);
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setEditState({ ...editState, [anchor]: open });
  };

  const uploadImage = () => {
    console.log("Inside upload image");
  };

  const list = (anchor) => (
    <AddUsers data={currentData} anchor={anchor} toggleDrawer={toggleAddUser} />
  );

  const edit = (anchor) => (
    <EditUsers
      data={currentData}
      anchor={anchor}
      toggleDrawer={toggleEditUser}
    />
  );

  React.useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/user/fetch/all")
      .then((res) => {
        console.log("All Users ", res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {});
  }, []);

  const deleteUser = (user) => {
    let id = user.user_id;
    console.log(id);
    Axios.delete("http://shark-api-v2.herokuapp.com/api/user/delete/" + id, {
      user_id: id,
    })
      .then((res) => {
        alert("User deleted successfully ");
        window.location = "/users";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UsersSection>
      <ManagementSection>
        <main className={classes.content}>
          <BannerHeading>Platform Users</BannerHeading>
          <div className="Mask">
            <a onClick={toggleAddUser("right", true, users)}>
              <div className="Default">+ Add Users</div>
            </a>
            <a>
              <div className="Default">Bulk Upload Users</div>
            </a>
            <a>
              <div className="Default">Search By</div>
            </a>
          </div>
          <table >
            <tr >
              <Checkbox />
              <th>Employee ID</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Unit</th>
              <th>Designation</th>
              <th>Role</th>
              <th>Email ID</th>
              <th>SetUp Status</th>
              <th>Active</th>
            </tr>
            {users.map((user) => {
              return (
                <tr className="myRow">
                  <Checkbox />
                  <td>{user.emp_id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.unit_name}</td>
                  <td>{user.designation_name}</td>
                  <td>{user.role_name}</td>
                  <td>{user.email_id}</td>
                  <td>{user.status}</td>
                  <td>
                    <label class="switch">
                      <input type="checkbox" checked={user.is_active} />
                      <span class="slider round"></span>
                    </label>
                  </td>
                  <td className="hide">
                    <span>
                      <a onClick={uploadImage}>upload Image</a>
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      |{" "}
                      <a onClick={toggleEditUser("right", true, user)}>Edit</a>
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      | <a onClick={() => deleteUser(user)}>delete</a>
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
        </main>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleAddUser("right", false)}
        >
          {list("right")}
        </Drawer>
        <Drawer
          anchor="right"
          open={editState["right"]}
          onClose={toggleEditUser("right", false)}
        >
          {edit("right")}
        </Drawer>
      </ManagementSection>
    </UsersSection>
  );
}
