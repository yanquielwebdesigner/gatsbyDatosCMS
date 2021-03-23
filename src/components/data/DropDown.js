import React from 'react';
import styled from '@emotion/styled';

import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import {menuData} from './MenuData.js';



const DropdownContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0' )};
  /* top: ${({isOpen}) => (isOpen ? '0' : '100%' )}; */
    left: ${({isOpen}) => (isOpen ? '0' : '100%' )};
    

  
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

`;

const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size: 3.5rem;
  

  &:hover {
    color: teal;
  }
  
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  
  
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;  
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: #303030;
  font-family: 'Roboto Slab', serif;
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 3rem;
  padding-top: 3rem;

  &:hover {
    color: teal;
  }

`;

const DropdownWrapper = styled.div``;

const DropDown = ({isOpen,toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
          <DropdownLink
            to={item.link} key={index} 
          >
            {item.title}
            
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default DropDown
