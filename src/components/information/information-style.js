import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
export const useStyles = makeStyles((theme) => ({
  info: {
    color: "#ffffff",
  },
  hrd: {
    width: "422px",
    height: "26px",
    fontFamily: "HelveticaNeue",
    fontSize: "26px",
    fontWeight: 500,
    display: "flex",
  },
  content: {
    display: "flex",
    marginTop: "20px",
    alignItems: "stretch",
  },
  left: {
    width: "500px",
    height: "712px",
    border: "solid 1px #141924",
    backgroundColor: "#111728",
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    padding: "10px 30px",
  },
  right: {
    border: "solid 2px #111728",
    marginLeft: "20px",
    width: "calc(100% - 520px)",
    padding: "10px 20px",
    backgroundColor: "#111728",
  },
  rightImg: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  root: {
    display: "flex",
  },
  clr: {
    color: "red",
  },
  shifts: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    width: "78px",
    height: "26px",
    opacity: "0.8",
    borderRadius: "5px",
    border: "solid 1px #1a2747",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
}));

export const SeveritySelection = styled.div`
  display: flex;
  color: #fff;
  margin: 1rem 0 1rem 0;
  font-size: 1rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid #5f5d70;
  & > p {
    margin-right: 1rem;
  }
  .ant-radio + * {
    color: #fff;
  }
  .ant-radio:hover .ant-radio-inner {
    border-color: ${({ color }) => color};
    &:hover {
      border-color: ${({ color }) => color};
    }
  }
  .ant-radio-inner {
    height: 1.5rem;
    width: 1.5rem;
  }
  .ant-radio-inner::after {
    background-color: ${({ color }) => color};
    top: 4px;
    left: 4px;
    display: table;
    width: 14px;
    height: 14px;
  }
`;

export const ShiftsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #5f5d70;
  padding: 0.5rem 0;
  & > p {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

export const Shiftbox = styled.div`
  width: 5rem;
  text-align: center;
  background: ${({ isSelected }) => (isSelected ? "#1a2747" : "inherit")};
  border-radius: 5px;
  border: solid 1px #1a2747;
  margin-right: 1rem;
  cursor: pointer;
`;

export const ShiftText = styled.p`
  margin: 0.5rem 0;
`;
