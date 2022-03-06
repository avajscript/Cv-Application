import React from "react";
import styled from "styled-components";

const PrintBtnElem = styled.button`
  position: absolute;
  width: 50px;
  height: 25px;
`;

export default function PrintBtn(props) {
  return <PrintBtnElem onClick={props.func}>Print </PrintBtnElem>;
}
