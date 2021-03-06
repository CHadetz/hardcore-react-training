import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Loading = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  right: 1em;
  top: 1em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
`;
