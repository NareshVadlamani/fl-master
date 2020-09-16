import React, { Component } from "react";
import Columns from "./columns";
import { TableContainer, TableActionsBar } from "./styles";
import ActionsBar from "./actionsBar";
import Rows from "./rows";

class Table extends Component {
  render() {
    const {
      rowData,
      columnsElements,
      action,
      editUser,
      panelType,
      requiredElements,
      deleteUser,
      confirmDelete,
    } = this.props;
    return (
      <TableContainer>
        <TableActionsBar>
          <ActionsBar clickAction={action} panelType={panelType} />
        </TableActionsBar>
        <Columns columnsElements={columnsElements} />
        <Rows
          rowData={rowData}
          confirmDelete={confirmDelete}
          deleteUser={deleteUser}
          requiredElements={requiredElements}
          columnsElements={columnsElements}
          editUser={editUser}
        />
      </TableContainer>
    );
  }
}

export default Table;
