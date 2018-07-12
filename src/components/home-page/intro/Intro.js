import React, { Component } from "react";
// import Transition from 'react-transition-group/Transition';

import styles from "./intro.module.css";
import typography from "../../../base/typography.module.css";

// const defaultStyle = {
//   transition: `opacity 600ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered:  { opacity: 1 },
// };

export default class Intro extends Component {

  render() {
    const { data } = this.props;

    return (
      <section className={styles.container}>
          <div className={`${styles.textContainer}`} >
            <h2 className={typography.display1}>{data.first}</h2>
            <h2 className={typography.display1}>{data.second}</h2>
          </div>
          <div className={styles.descriptionContainer}>
            {/* <h3 className={typography.display1}>}</h3> */}
          </div>
      </section>
    )
  }
}
  