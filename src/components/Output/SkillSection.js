import React from "react";
import styled from "styled-components";

const SkillSectionElem = styled.div`
  padding: 1rem;
  gap: 0.5rem;
  word-wrap: break-word;
`;

export default function SkillSection(props) {
  const skills = props.skills.map((skill, index) => {
    return (
      <p>
        ({index + 1}){skill.value}
      </p>
    );
  });
  return <SkillSectionElem>{skills}</SkillSectionElem>;
}
