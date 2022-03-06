import React from "react";
import styled from "styled-components";

const DelBtnElem = styled.div`
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 30px;
  opacity: 1;
  background-color: black;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: white;
    &:before,
    &:after {
      background-color: black;
    }
  }
  &:before,
  &:after {
    position: absolute;
    left: 14px;
    top: 5px;

    content: " ";
    height: 20px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default function DelBtn(props) {
  return (
    <DelBtnElem onClick={() => props.deleteData(props.index)}></DelBtnElem>
  );
}
