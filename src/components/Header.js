import React from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {menuData} from '../components/data/MenuData';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FaLaptopCode } from 'react-icons/fa';


const Span = styled.span`
      font-weight: bold;
      color: #303030;
      font-family: 'Roboto Slab', serif;
      text-transform: uppercase;

`;

const Span1 = styled.span`
      font-weight: bold;
      color: teal;
      font-family: 'Roboto Slab', serif;
      text-transform: uppercase;
  `;

const Header = ({toggle}) => {
  

  return (
    <Nav >
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          <Span>Yanquiel</Span>
          <Span1>Web</Span1>
          <Span>Dev</Span>
        </NavLogo>
      <MenuBars onClick={toggle}/>
        <NavMenu >      
            {menuData.map((item, index) => (
              <NavLinks 
                to={item.link} key={index} 
              >
                {item.title}
              </NavLinks>
            ))}      
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Header;


  const Nav = styled.nav`
    background-color: #fff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    font-family:'PT Sans', sans-serif;
    font-weight:700;
    text-transform: uppercase;    
    z-index: 100;
    width: 100%;
  `;

  const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;  
  align-items: center;
  font-size: 2.5rem;
  
  `;
  const NavLinks = styled(Link)`
    color: #303030;
    font-family: 'Roboto Slab', serif;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer; 
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: 3.5rem;

    &:hover {
      color: teal;
      
    }
              
  `; 

  const NavLogo =  styled(Link)`
    color: teal;
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer; 
    margin-top: 33px;
    font-size: 2.5rem;
    justify-content: space-between;
  `;

  const MenuBars = styled(FaAlignRight)`
    display: block;
    color: teal;
    margin-right: 1.4rem;
    font-size: 3rem;
    cursor: pointer;

    &:hover {
      color: #000;
    }

    @media (min-width: 768px) {
      display: none;
    }
  `;

  const NavMenu = styled.div`
    display: none;

   @media (min-width: 768px) {
     display: flex;
     align-items: center;

   }
  `;

  const NavIcon = styled(FaLaptopCode)`
  margin: 0 0.5rem 0.5 2rem;
  font-size: 3.5rem;
  align-items: center;
    
  `;

  
    


  