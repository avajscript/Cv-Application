import React from "react";
import styled from "styled-components";

const FooterElem = styled.div`
  background-color: ${(props) => props.colors.grey};
  height:100px;
  border-radius: 0 0 .5rem .5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default function Footer(props) {
  return <FooterElem colors={props.colors}></FooterElem>;
}
