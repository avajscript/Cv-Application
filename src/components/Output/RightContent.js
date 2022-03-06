import React from "react";
import styled from "styled-components";
import SkillSection from "./SkillSection";
import AboutSection from "./AboutSection";

const RightContentElem = styled.div`
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 0 5%;
`;

const Header = styled.h2`
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${(props) => props.colors.grey};
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

export default function RightContent(props) {
  return (
    <RightContentElem>
      <Header colors={props.colors}>SKILLS </Header>
      <SkillSection skills={props.skills} />

      <Header colors={props.colors}> ABOUT </Header>
      <AboutSection about={props.about} />
    </RightContentElem>
  );
}
