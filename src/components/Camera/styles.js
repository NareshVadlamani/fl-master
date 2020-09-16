import styled from "styled-components";

export const DraggableItem = styled.div`
  border: "solid 1px #5f5d70";
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 0.5px solid #5f5d70;
  cursor: move;
  & > svg {
    margin-right: 10px;
  }
`;

export const DropArea = styled.div``;

export const CustomTypography = styled.p`
  font-size: 15px;
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const Directions = styled.div`
  color: #fff;
  padding: 10px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextInfo = styled.div``;
