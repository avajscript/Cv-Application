import React from "react";
import styled from "styled-components";

const NavbarElem = styled.nav`
  background-color: ${(props) => props.colors.grey};
  border-radius: 0.5rem 0.5rem 0 0;
  img {
    width: 100px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    float: left;
  }
  overflow: hidden;
`;

const Name = styled.h2`
  display: inline-block;
  margin-left: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 70%;

  white-space: nowrap;
`;
const NavContent = styled.div`
  padding: 10px;
`;

const Line = styled.div`
  height: 30px;
  background: black;
  width: 2px;
  transform: translateY(50%);
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const DetailContent = styled.div`
  flex: 1;
  margin: 0 1rem;
  padding: 10px;
  &:first-of-type {
    margin: 0 1rem 0 0;
  }

  p {
    font-weight: 300;
    &:first-of-type {
      font-weight: 400;
    }
  }
`;

export default function Navbar(props) {
  return (
    <NavbarElem colors={props.colors}>
      <img src={props.img} alt="face" />
      <NavContent>
        <Name> {props.name} </Name>
        <Details>
          <DetailContent>
            <p> Address</p>
            <p> {props.address}</p>
          </DetailContent>
          <Line />
          <DetailContent>
            <p>Phone # </p>
            <p> {props.phoneNumber} </p>
          </DetailContent>
          <Line />
          <DetailContent>
            <p> Email</p>
            <p> {props.email}</p>
          </DetailContent>
        </Details>
      </NavContent>
    </NavbarElem>
  );
}
