import React, { Component } from "react";
import { SearchContainer, InputBar } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
class SearchBar extends Component {
  render() {
    const { changeAction } = this.props;
    return (
      <SearchContainer>
        <SearchIcon />
        <InputBar
          onChange={(e) => changeAction(e.target.value)}
          placeholder={"Search By"}
        />
      </SearchContainer>
    );
  }
}

export default SearchBar;
