import React from "react";
import styled from "styled-components";

const SkillLineCont = styled.div`
  width: 100%;
  height: 30px;
`;

const SkillLineElem = styled.input`
  width: 90%;
  border-radius: 0.25rem;
  border-style: none;
  height: 30px;
  padding: 5px;
  outline: none;
  &:focus {
    border: 1px solid black;
  }
`;

const Delete = styled.div`
  width: 5%;
  margin-left: 5px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    &:before {
      color: #000;
    }
  }
  &::before {
    content: "x";
    color: #fff;
    font-size: 20px;
    transition: 0.2s ease color;
  }
`;
export default function SkillLine(props) {
  return (
    <SkillLineCont>
      <SkillLineElem
        placeholder={`skill-${props.index}`}
        value={props.value}
        onChange={(e) => props.updateSkills(e, props.index)}
      ></SkillLineElem>
      <Delete onClick={() => props.deleteSkill(props.index)}> </Delete>
    </SkillLineCont>
  );
}
