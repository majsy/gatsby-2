import React from "react";
import styles from "./footer.module.css";
import { StaticQuery } from "gatsby";

const Footer = () => (
  <StaticQuery 
    query = {graphql`
      query FooterQuery {
        allDataJson {
          edges {
            node {
              footer {
                title
              } 
            }
          }
        }  
      }
    `}
    render = {data => (
      <footer className={styles.container}>
        <h1>{data.allDataJson.edges[0].node.footer.title}</h1>
      </footer>
    )}
  />  
);

export default Footer;