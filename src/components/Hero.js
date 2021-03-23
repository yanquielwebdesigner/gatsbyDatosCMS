import React from 'react';
//import { graphql, useStaticQuery } from 'gatsby';
//import BackgroundImage  from 'gatsby-background-image';
import styled from '@emotion/styled';
import miFoto from '../images/miFoto.jpg';

const Wrapper = styled.section`
  position: relative;
  padding: 1em 2em;

  @media (min-width: 600px) {
        display: grid;
        width: min-content;
         padding: 5em 2em;
        margin: 0 auto;
        grid-column-gap: 1em;
        grid-template-areas: 
            "img title"
            "img subtitle";
        grid-template-columns: min-content max-content;
  }
`;

const Paragraph = styled.p`
    display: inline-block;
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: center;
    position: relative;
    left: 0em;
    width: calc(50% + 2em);
    margin: 0 auto;
    font-size: 2rem;
    background-color: #16e0bd;
    padding: 1rem 1rem;
    
    font-weight: 700;
    font-family: 'Roboto', serif;
    

  @media (min-width: 600px) {
      text-align: right;
      left: -2em;
      width: calc(100% + 2em);
  }
    
`;

const TextoPrincipal = styled.h1`
    font-weight: 400;
    margin-bottom: .25em;
    font-size: 4.5rem;

    @media (min-width: 600px) {
      font-size: 6rem;
    }

  strong {
    display: block;
    font-weight: 700;
  }


`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    grid-area: img;
    min-width: 250px;
    position: relative;
    margin-bottom: 4rem;
    z-index: 2;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.15);
`;




const Hero = () => {

   
  return (
    <Wrapper>
      <TextoPrincipal> Hi, I am <strong>Yanquiel Arango</strong></TextoPrincipal>
      <Paragraph>front-end dev</Paragraph>
      <Image  src={miFoto} />
    </Wrapper>
  )
}

export default Hero;
