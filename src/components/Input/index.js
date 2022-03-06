import React from "react";
import styled from "styled-components";
import Field from "./Field";
import SkillSection from "./SkillSection";
import Section from "./Section";
import { PlusData } from "./PlusBtn";
import COLORS from "../../colors";

const InputSectionElem = styled.div`
  width: 100%;
  background-color: ${COLORS.grey};
  padding: 20px;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

const DesTextArea = styled.textarea`
  border-radius: 0.25rem;
  resize: none;
  outline: none;
  border: none;
  height: 60px;
  width: 100%;
  padding-left: 5px;
  &:focus {
    border: 1px solid black;
  }
`;

const Header = styled.h2`
  font-weight: 700;
  color: black;
  margin-bottom: 1rem;
`;

export default function InputSection(props) {
  const educationSections = props.education.data.map((dataField, index) => {
    return (
      <Section
        data={dataField}
        setData={props.updateEducation}
        deleteData={props.deleteEducation}
        addData={props.addEducation}
        colors={COLORS}
        index={index}
      />
    );
  });
  const experienceSections = props.experience.data.map((dataField, index) => {
    return (
      <Section
        data={dataField}
        setData={props.updateExperience}
        deleteData = {props.deleteExperience}
        colors={COLORS}
        index={index}
      />
    );
  });

  return (
    <InputSectionElem>
      <Header>Personal Information </Header>

      <Field
        data={props.personalInfo.data[0]}
        setData={props.updatePersonalInfo}
        colors={COLORS}
        fileUploadHandler={props.fileUploadHandler}
      />
      <DesTextArea
        value={props.about}
        placeholder="Description"
        onChange={props.updateAbout}
      >
        {" "}
      </DesTextArea>

      <Header>Education </Header>
      {educationSections}
      <PlusData addData = {props.addEducation}/>

      <Header> Experience </Header>
      {experienceSections}
      <PlusData addData = {props.addExperience}/>
      <Header> Skills </Header>
      <SkillSection
        addSkill={props.addSkill}
        skills={props.skills}
        updateSkills={props.updateSkills}
        colors={COLORS}
        deleteSkill={props.deleteSkill}
      />
    </InputSectionElem>
  );
}
