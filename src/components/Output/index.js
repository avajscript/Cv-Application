import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import COLORS from "../../colors";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Footer from "./Footer";
const OutputSectionElem = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  position: relative;
`;

const Content = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export default React.forwardRef((props, ref) => {
  return (
    <OutputSectionElem ref={ref}>
      <Navbar
        colors={COLORS}
        img={props.personalInfo.data[0][2].value}
        name={`${props.personalInfo.data[0][0].value} ${props.personalInfo.data[0][1].value}`}
        address={props.personalInfo.data[0][3].value}
        email={props.personalInfo.data[0][5].value}
        phoneNumber={props.personalInfo.data[0][4].value}
      />
      <Content>
        <LeftContent
          experience={props.experience}
          education={props.education}
          colors={COLORS}
        />
        <RightContent
          colors={COLORS}
          skills={props.skills}
          about={props.about}
        />
      </Content>
      <Footer colors={COLORS} />
    </OutputSectionElem>
  );
});
