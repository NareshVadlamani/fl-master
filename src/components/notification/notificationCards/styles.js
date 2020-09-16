import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  background: #0d111e;
  padding: 0.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SevierityIndicatior = styled.div`
  width: 0.5rem;
  border-radius: 0.2rem;
  background: ${({ severity }) =>
    severity === "high"
      ? "#ff7f83"
      : severity === "medium"
      ? "#fce595"
      : "#95e8d5"};
`;

export const DetailsBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1rem;
`;

export const NotificationType = styled.p`
  width: 100%;
  font-size: 1rem;
  margin: 0;
`;

export const NotificationSubDetail = styled.p`
  width: 100%;
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
`;

export const LocationDetails = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsWrapper = styled.div`
  font-size: 0.8rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    margin-right: 1rem;
  }
  > svg {
    margin-right: 0.5rem;
  }
`;
