import React from "react";
import styled from "styled-components";

export const DashboardSection = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  background-color: #0d111e;
`;

export const ZoneOptions = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 2rem;
`;

export const SeverityIndecators = styled.div`
  display: flex;
`;

// export const

export const AddZoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  > svg {
    height: 22px;
    width: 22px;
    margin-right: 5px;
    color: #fff;
  }
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  background: #0d111e;
  color: #fff;
  cursor: pointer;
`;

export const AddIcon = function () {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
  );
};

export const MainMapView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MapImage = styled.img`
  height: 700px;
  width: 1350px;
  margin: auto;
`;
