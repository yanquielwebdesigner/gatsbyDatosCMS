import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import yag from '../images/yag.jpg'


const Wrapper = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 3em 2em;
    height: 350px;
    
  @media (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 180px;
      grid-template-areas: 
            "title img"
            "subtitle img"
            "text img";
      grid-column-gap: 2em;
  }
`;

  const ContenidoText = styled.p`
        display: inline-block;
    align-self: start;
        grid-column: 1 / -1;
        grid-row: 2;
        position: relative;
        left: 0em;
        width: calc(70% + 2em);
        padding-right: calc(200px + 4em); 
        background-color: #16e0bd;
        height: 5rem;
        font-size: 2.3rem;
        padding: .25em 1em;
        margin: 0 auto;
        font-weight: 700;
        font-family: 'Roboto', serif;
        text-align: center;
       
      @media (min-width: 600px) {
      text-align: left;
      left: -1em;
      width: calc(100% + 4em);
  }
    

  `;



const Image = styled.img`
    display: block;
    max-width: 100%;
    min-width: 220px;
    margin-bottom: 2rem;  
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.25);

  @media (min-width: 600px) {
      grid-area: img;
      position: relative;
      z-index: 2;
  }
`;

const TextoPrincipal = styled.h2`
      
      font-size: 2.3em;
      margin-bottom: .25em;
      
   @media (min-width: 600px) {
      grid-area: title;
      font-size: 4em;
      margin: 0;
      padding: 0;
   }   

`;

const AboutMe = () => {

      const info = useStaticQuery(graphql`
        query  {
            allDatoCmsPagina(filter: {slug: {eq: "about"}}) {
              nodes {
                
                titulo
                contenido
              }
            }
          }

      
      `);

          console.log(info.allDatoCmsPagina.nodes); 
          const {titulo, contenido }= info.allDatoCmsPagina.nodes[0];

  return (
    <Wrapper>
      <TextoPrincipal>{titulo}</TextoPrincipal>
      <ContenidoText>Frontend Developer</ContenidoText>
      <div>
        <p>{contenido}</p>
      </div>
      <Image src={yag} />
      
    </Wrapper>
  )
}

export default AboutMe
