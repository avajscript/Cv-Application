import React from "react";
import styled from "styled-components";
import ContentSection from "./ContentSection";
const LeftContentElem = styled.div`
  border-right: 30px solid ${(props) => props.colors.grey};
`;

const Header = styled.h2`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Section = styled.div``;
export default function LeftContent(props) {
  const experienceSections = props.experience.data.map((field) => {
    return <ContentSection values={field}> </ContentSection>;
  });

  const educationSections = props.education.data.map((field) => {
    return <ContentSection values={field}> </ContentSection>;
  });

  return (
    <LeftContentElem colors={props.colors}>
      <Section>
        <Header> EDUCATION</Header>
        {educationSections}
      </Section>

      <Section>
        <Header> EXPERIENCE </Header>
        {experienceSections}
      </Section>
    </LeftContentElem>
  );
}
