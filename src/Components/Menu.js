import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 20px;
  z-index: 21;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;

    background-color: ${({ isOpen }) => (isOpen ? '#6441a5' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
export default ({ isOpen, handleOpen, clearUsers }) => {
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={handleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <RightNav isOpen={isOpen} />
    </>
  );
};
