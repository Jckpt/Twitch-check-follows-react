import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  flex-flow: column nowrap;
  z-index: 20;
  list-style: none;
  background-color: #503483;
  position: fixed;
  margin: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 100px;
  font-size: 2rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
  }
`;
export default ({ isOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li>Rewizja czatu</li>
      <li>Rewizja użytkownika</li>
    </Ul>
  );
};
