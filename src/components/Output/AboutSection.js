import React from "react";
import styled from "styled-components";

const AboutElem = styled.div`
  word-wrap: break-word;
`;

export default function AboutSection(props) {
  return (
    <AboutElem>
      <p>{props.about}</p>
    </AboutElem>
  );
}
