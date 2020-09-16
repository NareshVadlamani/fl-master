import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import styled from "styled-components";

const BottomNavigation = (props) => {
  const { className, value, handleSubmit, setValue, data, start, end } = props;
  return (
    <div
      style={{
        textAlign: "end",
        // , paddingRight: "380px"
      }}
    >
      <ButtonGroup>
        {value !== start && (
          <Button
            style={{ color: "white" }}
            onClick={() => setValue(value - 1)}
          >
            Previous
          </Button>
        )}
        <Button style={{ color: "white" }} onClick={() => handleSubmit()}>
          {value === end ? <P>Goto Dashboard</P> : <P>Next</P>}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BottomNavigation;

const P = styled.p`
  margin: 0;
`;
