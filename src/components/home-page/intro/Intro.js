import React, { Component } from "react";
import { Transition, TransitionGroup } from 'react-transition-group';

import styles from "./intro.module.css";
import typography from "../../../base/typography.module.css";

export default class Intro extends Component {
  constructor() {
    super();

    this.state = {
      showFirstname: false,
      showLastname: false,
      showDescription: false,
    }
  }

  render() {
    const { data } = this.props;
    const { showFirstname, showLastname, showDescription } = this.state;

    return (
      
      <Transition in={data !== null} appear mountOnEnter timeout={300} 
        onEnter={() => {this.setState({showFirstname: true})}}>
        {(status) => (
          <section className={styles.container}>
            <div className={`${styles.textContainer}`}>
              <h2 className={`${typography.display1}
                ${styles.firstname} 
                ${status === 'entered' ? styles.showFirstname : ''}`}>
                {data.first}
              </h2>

              <h2 className={`${typography.display1} 
                ${styles.lastname}
                ${status === 'entered' ? styles.showLastname : ''}`}>{data.second}</h2>
            </div>

            <div className={`${styles.descriptionContainer} 
              ${status === 'entered' ? styles.showDescriptionContainer : ''}`}>
              <h3 className={typography.display1}></h3>
            </div>
          </section>
        )}
      </Transition>
    )
  }
}

  