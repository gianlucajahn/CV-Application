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
                  <h2>HV Generador</h2>
                  <div>
                    <button className={styles['save']} type="button" onClick={this.props.printDocument}>
                        <img src={require("../../icons/save.png")} className={styles['download']} alt="Download"></img>
                        <span className={styles['buttonText']}>Descargar</span>
                    </button>
                  </div>
                </div>
                <div className={styles['credit']}>
                  <h3>Sigueme</h3>
                  <a href="https://github.com/AdrianTX23" alt="Link to GitHub" target="_blank">
                  <button className={styles['github']} type="button">
                      <img src={require("../../icons/github.png")} className={styles['icon']} alt="Link to GitHub"></img>
                      AdrianTX23
                  </button>
                  </a>
                </div>
            </div>
        )
    }
}

export default AppLabel;