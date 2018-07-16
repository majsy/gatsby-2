import React from "react";

import Intro from "../components/home-page/intro/Intro";
import Layout from "../components/layout/Layout";

const IndexPage = ({ children, data:{allDataJson} }) => {
  return (
  <Layout>
    <h1>{allDataJson.edges[0].node.homePage.title}</h1>
    <Intro data={allDataJson.edges[0].node.homePage.introText} />
  </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          homePage {
            title
            introText {
              first
              second
            }
          } 
        }
      }
    }  
  }
`
