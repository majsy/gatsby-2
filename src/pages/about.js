import React from "react";
import Layout from "../components/layout/Layout";

const AboutPage = ({ children, data:{allDataJson} }) => {
  return (
    <Layout>
      <h1>{allDataJson.edges[0].node.aboutPage.title}</h1>
    </Layout>
  )
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    allDataJson {
      edges {
        node {
          aboutPage {
            title
          } 
        }
      }
    }  
  }
`