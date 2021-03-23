import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { Global, css } from '@emotion/react';
import DropDown from './data/DropDown.js';


const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
        <Global
            styles={css`
              html {
                  font-size: 62.5%;
                  box-sizing: border-box;
              }
              
              *, *:before, *:after {
                box-sizing: inherit;
              }

              body {
                font-size: 18px;
                font-size: 1.8rem;
                line-height: 1.5;
                font-family: 'Lora', serif;
                 margin: 0;
                color: #303030;
              }
              h1,h2,h3 {
                margin: 0;
                line-height: 1.2;
              }
              h3, h2 {
                font-family: 'Roboto Slab', serif;
              }
             /*  h1{
                font-family: 'PT Sans', sans-serif;
              } */
              ul {
                list-style: none;
                margin: 0;
                padding: 0;
              }
              
              

            `}
        />

        <Helmet>
          <title>yanquielwebdev</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
        </Helmet>

        <Header toggle={toggle}/>
        <DropDown isOpen={isOpen} toggle={toggle}/>
        {children}
    </>
  )

  }

    export default Layout

