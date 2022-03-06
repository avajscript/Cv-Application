import React from "react";
import styled from "styled-components";

const SkillSectionElem = styled.div`
  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  text-align: center;
`;

export default function SkillSection(props) {
  const skills = props.skills.map((skill) => {
    return <p>{skill.value}</p>;
  });
  return <SkillSectionElem>{skills}</SkillSectionElem>;
}
