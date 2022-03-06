import React from "react";
import styled from "styled-components";
import PlusBtn from "./PlusBtn";

export const FieldLineElem = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  border-style: none;
  height: 30px;
  padding: 5px;
  outline: none;
  &:focus {
    border: 1px solid black;
  }
`;

const FieldImagePlace = styled(FieldLineElem)`
  display: none;
  visibility: none;
`;

const SubmitBtn = styled.button``;
const ImageCont = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FieldImage = styled.input``;

export default function FieldLine(props) {
  const image = React.useRef("");

  return props.type !== "file" ? (
    <FieldLineElem
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => props.setData(e, props.placeholder, props.index)}
      value={props.value}
    ></FieldLineElem>
  ) : (
    <ImageCont>
      <label for="img">
        <PlusBtn />
      </label>
      <FieldImagePlace
        type={props.type}
        onChange={(e) => {
          props.setData(e, props.placeholder, props.index);
          image.current = e;
        }}
        accept="image/*"
        value={props.value}
        id="img"
      ></FieldImagePlace>
      <SubmitBtn onClick={() => props.fileUploadHandler(image.current)}>
        {" "}
        Submit{" "}
      </SubmitBtn>
    </ImageCont>
  );
}
