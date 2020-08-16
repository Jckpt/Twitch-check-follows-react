import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
const Focus = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  opacity: ${({ isOpen }) => (isOpen ? '0.4' : '0')};
  background-color: #000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
const Ul = styled.ul`
  flex-flow: column nowrap;
  z-index: 20;
  list-style: none;
  background-color: #1e2021;
  padding-left: 0;
  position: fixed;
  margin: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 75px;
  font-size: 25px;
  transition: transform 0.3s ease-in-out;
  li:hover {
    background-color: #2f3333;
    transition: all 0.25s ease;
  }
  li:active {
    background-color: #404548;
    transition: all 0.25s ease;
  }
  li {
    padding: 2vh 0;
    cursor: pointer;
  }
  #head {
    font-size: 20px;
    padding: 0.5vh 20px;
    font-weight: bold;
  }
`;
export default ({ isOpen, handleOpen }) => {
  return (
    <>
      <Focus isOpen={isOpen} onClick={handleOpen} />
      <Ul isOpen={isOpen}>
        <div id='head'>Rewizja</div>
        <Link to='/czatu' draggable='false'>
          <li>
            <FontAwesomeIcon icon={faCommentAlt} style={{ fontSize: '20px', paddingRight: '5px', borderRight: '2px solid #fff' }} /> czatu
          </li>
        </Link>
        <Link to='/uzytkownika'>
          <li>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', paddingRight: '5px', borderRight: '2px solid #fff' }} /> użytkownika
          </li>
        </Link>
      </Ul>
    </>
  );
};
