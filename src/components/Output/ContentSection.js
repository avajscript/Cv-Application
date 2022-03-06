import React from "react";
import styled from "styled-components";

const ContentHolder = styled.div`
  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  & > div:first-of-type {
    font-size: 1.5rem;
    h3 {
      font-weight: 600;
    }
  }
`;

const ContentLineElem = styled.div`
  h3 {
    font-weight: 400;
  }
`;

function ContentLine(props) {
  return (
    <ContentLineElem>
      <h3> {props.value} </h3>
    </ContentLineElem>
  );
}

export default function ContentSection(props) {
  const lines = props.values.map((obj) => {
    return <ContentLine value={obj.value} />;
  });

  return <ContentHolder>{lines}</ContentHolder>;
}
