import React from "react";
import styles from './AppLabel.module.css';

class AppLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles['label']}>
                <div className={styles['label-header']}>
                  <h2>CV Creator</h2>
                  <button className={styles['autofill']} type="button" onClick={this.props.autoFill}>
                      <img src={require("../../icons/autofill.png")} className={styles['icon']}></img>
                      Autofill
                  </button>
                </div>
                <div className={styles['credit']}>
                  <h3>An application by</h3>
                  <button className={styles['github']} type="button">
                      <img src={require("../../icons/github.png")} className={styles['icon']}></img>
                      gianlucajahn
                  </button>
                </div>
            </div>
        )
    }
}

export default AppLabel;