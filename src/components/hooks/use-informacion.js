import { graphql, useStaticQuery } from 'gatsby';



  
  
  export const useInformacion = () => {


      const informacion = useStaticQuery(graphql`
            query MyQuery {
                      allDatoCmsSkill {
                        nodes {
                          titulo
                          descripcion
                          slug
                          id
                        }
                      }
                    }
                  `);
      
                return informacion.allDatoCmsSkill.nodes.map(skill => ({
                  titulo: skill.titulo,
                  id: skill.id,
                  descripcion: skill.descripcion,
                  slug: skill.slug
                   

                }))
   
  }
  