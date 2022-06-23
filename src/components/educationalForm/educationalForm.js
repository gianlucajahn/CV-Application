import React from 'react';
import styles from './educationalForm.module.css';

class EducationalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles['educationalForm']}>
                <form className={styles["schoolForm"]}>
                   <h2>Educational Data</h2>
                   <div className={styles["university"]}>
                     <div className={styles['headline']}>
                        <img src={require("../../icons/gradcap.png")} className={styles['icon']} alt="University Icon"/>
                        <h3>University</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Your University"
                          name="universityName"
                          value={this.props.info[7].value}
                          onChange={this.props.handleInfoChange}
                          id="universityInput"
                          type="text"
                          required>
                       </input>
                   </div>

                   <div className={styles["degree"]}>
                       <input
                         className={styles["input"]}
                         placeholder=" Your Degree"
                         name="universityDegree"
                         value={this.props.info[8].value}
                         onChange={this.props.handleInfoChange}
                         id="title1Input"
                         type="text"
                         required>
                       </input>
                   </div>

                   <div className={styles["duration1"]}>
                        <input
                          className={styles["input"]}
                          placeholder=" Timeframe"
                          name="universityDate"
                          value={this.props.info[9].value}
                          onChange={this.props.handleInfoChange}
                          id="duration1Input"
                          type="text"
                          required>
                        </input>  
                   </div>

                   <div className={styles["school"]}>
                     <div className={styles['headline']}>
                        <img src={require("../../icons/school.png")} className={styles['icon']} alt="School Icon"/>
                        <h3>School</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Your School"
                          name="schoolName"
                          value={this.props.info[10].value}
                          onChange={this.props.handleInfoChange}
                          id="schoolInput"
                          type="text"
                          required>
                       </input>
                   </div>

                   <div className={styles["degree"]}>
                       <input
                         className={styles["input"]}
                         placeholder=" Your Degree"
                         name="schoolDegree"
                         value={this.props.info[11].value}
                         onChange={this.props.handleInfoChange}
                         id="title2Input"
                         type="text"
                         required>
                       </input>
                   </div>

                   <div className={styles["duration2"]}>
                        <input
                          className={styles["input"]}
                          placeholder=" Timeframe"
                          name="schoolDate"
                          value={this.props.info[12].value}
                          onChange={this.props.handleInfoChange}
                          id="duration2Input"
                          type="text"
                          required>
                        </input>  
                   </div>
                </form>
            </div>
        )
    }
}

export default EducationalForm;