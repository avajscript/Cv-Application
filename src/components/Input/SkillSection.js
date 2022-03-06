import React from "react";
import styled from "styled-components";
import SkillLine from "./SkillLine";
import PlusBtn from "./PlusBtn";
const SkillElem = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default function SkillSection(props) {
  const skillLines = props.skills.map((skill) => {
    return (
      <SkillLine
        updateSkills={props.updateSkills}
        value={skill.value}
        index={skill.index}
        colors={props.colors}
        deleteSkill={props.deleteSkill}
      />
    );
  });

  return (
    <>
      <SkillElem>{skillLines}</SkillElem>
      <PlusBtn addSkill={props.addSkill} />
    </>
  );
}
