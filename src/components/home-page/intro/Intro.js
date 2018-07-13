import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from "./intro.module.css";
import typography from "../../../base/typography.module.css";

export default class Intro extends Component {
  state = {
    showFirstname: false,
    showDescription: false
  }

  render() {
    const { data } = this.props;
    const { showFirstname, showLastname, showDescription } = this.state;

    return (
      <section className={styles.container}>
        <CSSTransition in={true} appear={true} classNames='slide' timeout={1000}>
          <div className={`${styles.textContainer}`} >
            <h2 className={typography.display1} >{data.first}</h2>
            <h2 className={typography.display1}>{data.second}</h2>
          </div>
        </CSSTransition>
        <div className={styles.descriptionContainer}>
          <h3 className={typography.display1}>}</h3>
        </div>
      </section>
    )
  }
}
  