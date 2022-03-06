import React from "react";
import styled from "styled-components";

const Plus = styled.div`
  --b: 3px; /* the thickness */
  width: 30px; /* the size */
  aspect-ratio: 1/1;
  border: 10px solid #000; /* the outer space */
  cursor: pointer;

  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #000 90deg,
      #fff 0
    )
    calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
    calc(50% + var(--b));
  &:hover {
    background: conic-gradient(
        from 90deg at var(--b) var(--b),
        #fff 90deg,
        #000 0
      )
      calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
      calc(50% + var(--b));
    border: 10px solid #fff;
  }
  display: inline-block;
`;

export default function PlusBtn(props) {
  return <Plus onClick={props.addSkill}></Plus>;
}

export function PlusData(props) {
  return <Plus onClick={props.addData}> </Plus>;
}
