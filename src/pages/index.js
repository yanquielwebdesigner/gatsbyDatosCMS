import  React from "react";
import AboutMe from "../components/AboutMe";
import ContenidoAbout from "../components/ContenidoAbout";
//import ContenidoAbout from "../components/data/ContenidoAbout";
import Hero from "../components/Hero";
import Layout from '../components/Layout';





const IndexPage = () => (
    
  
    <Layout>
    
        <Hero/>
        <ContenidoAbout/>
        <AboutMe/>   

    </Layout>
  
)

export default IndexPage;
