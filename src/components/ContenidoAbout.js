import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { useInformacion } from './hooks/use-informacion';
import SkillPreview from './skillPreview';




const ImageBackground = styled(BackgroundImage)`
    height: 500px;
    width: 100%;

    @media (min-width: 600px) {
       height: 400px;
       width: 100%;
    }
`;

const TextoImage = styled.div`
  background-image: linear-gradient(to top, rgba(34,49,63,.75), rgba(34,49,63,.75) );
  color: #16e0bd;
  height: 100%;
  /* text-align: center; */
  
  
`;

const Text = styled.h2`
    
    padding-top: 3rem;
    position: relative;
    font-size: 5rem;
    text-align: center;

    &:after {
      content: '';
      display: block;
      width: 2em;
      height: 1px;
      margin: 0.5em auto;
      background: #fff;
      opacity: 0.25;

      @media (min-width: 600px) {
         margin: 0.5em auto 1em;
    }
    }
    
`;

const Info = styled.ul`
  color: #fff;
  max-width: 1000px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 3rem;
      
  
  }
`;

function ContenidoAbout() {


    const datos = useInformacion();

    
  

          const { image } = useStaticQuery(graphql`
                      query {
                          image: file(relativePath: {eq: "1.jpg"}) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                          }
                        }

          
              `)

              
  return (

    <ImageBackground tag="section" fluid={image.childImageSharp.fluid} fadeIn="soft">
        <TextoImage>
          <Text>What I do</Text>
          <Info>
            {datos.map(dato => (
                <SkillPreview
                  key={dato.id}
                  dato={dato}
                />

            ))}
          </Info>
        </TextoImage>
        
    </ImageBackground> 

      
  );
}

export default ContenidoAbout;