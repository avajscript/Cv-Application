import React from "react";
import styled from "styled-components";
import FieldLine from "./FieldLine";

const FieldElem = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default function Field(props) {
  const fields = props.data.map((data) => {
    return (
      <FieldLine
        setData={props.setData}
        placeholder={data.placeholder}
        type={data.type}
        fileUploadHandler={props.fileUploadHandler}
        index={data.index}
      />
    );
  });
  return <FieldElem>{fields}</FieldElem>;
}
