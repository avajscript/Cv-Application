import React from "react";
import styled from "styled-components";
import DelBtn from "./DelBtn";
import { PlusData } from "./PlusBtn";
import Field from "./Field";

const SectionElem = styled.div``;

export default function Section(props) {
  return (
    <div>
      <SectionElem>
        <div>
          <Field
            data={props.data}
            setData={props.setData}
            colors={props.colors}
          />

          <DelBtn index={props.index} deleteData={props.deleteData} />
        </div>
      </SectionElem>
    </div>
  );
}
