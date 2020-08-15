import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
const Ul = styled.ul`
  flex-flow: column nowrap;
  z-index: 20;
  list-style: none;
  background-color: #111213;
  padding-left: 0;
  position: fixed;
  margin: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 75px;
  font-size: 2rem;
  transition: transform 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: #fff;
  }
  li:hover {
    background-color: #232527;
    transition: all 0.25s ease;
  }
`;
export default ({ isOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li>
        <Link to='/czatu'>
          Rewizja <FontAwesomeIcon icon={faCommentAlt} />
        </Link>
      </li>
      <li>
        <Link to='/uzytkownika'>
          Rewizja <FontAwesomeIcon icon={faUser} />
        </Link>
      </li>
    </Ul>
  );
};
