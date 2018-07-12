import React from "react";
import { StaticQuery, Link } from "gatsby";
import styles from "./header.module.css";

const Header = () => (
  <StaticQuery 
    query = {graphql`
      query HeaderQuery {
        allDataJson {
          edges {
            node {
              header {
                title
              } 
            }
          }
        }  
      }
    `}
    render = {data => (
      <header className={styles.container}>
        <h1>{data.allDataJson.edges[0].node.header.title}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
        </ul>
      </header>
    )}
  />  
);

export default Header;