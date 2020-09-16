import React, { Component } from "react";
import { ColumnContainer, Cell, ColumnName, ColumnActions } from "./styles";
import { Checkbox } from "antd";

class Column extends Component {
  render() {
    const {
      columnsElements = [
        "Employee ID",
        "Name",
        "Phone Number",
        "Unit",
        "Designation",
        "Contractor name",
        "Setup Status",
        "Active",
      ],
      filterFunction,
    } = this.props;
    return (
      <ColumnContainer>
        {columnsElements.map((element, i) => {
          return (
            <Cell size={i === 0 || element === "Email ID" ? 15 : null}>
              <ColumnName>
                {i === 0 ? <Checkbox>{element}</Checkbox> : element}
              </ColumnName>
              <ColumnActions></ColumnActions>
            </Cell>
          );
        })}
      </ColumnContainer>
    );
  }
}

export default Column;
