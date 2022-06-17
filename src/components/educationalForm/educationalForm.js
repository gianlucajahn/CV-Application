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
                        <img src={"../../icons/gradcap.png"} className={styles['icon']} />
                        <h3>University</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Your University"
                          name="universityInput"
                          id="universityInput"
                          type="text"
                          required>
                       </input>
                   </div>

                   <div className={styles["degree"]}>
                       <input
                         className={styles["input"]}
                         placeholder=" Your Degree"
                         name="title1Input"
                         id="title1Input"
                         type="text"
                         required>
                       </input>
                   </div>

                   <div className={styles["duration1"]}>
                        <input
                          className={styles["input"]}
                          placeholder=" Date"
                          name="duration1Input"
                          id="duration1Input"
                          type="date"
                          required>
                        </input>  
                   </div>

                   <div className={styles["school"]}>
                     <div className={styles['headline']}>
                        <img src={require("../../icons/school.png")} className={styles['icon']} />
                        <h3>School</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Your School"
                          name="schoolInput"
                          id="schoolInput"
                          type="text"
                          required>
                       </input>
                   </div>

                   <div className={styles["degree"]}>
                       <input
                         className={styles["input"]}
                         placeholder=" Your Degree"
                         name="title1Input"
                         id="title1Input"
                         type="text"
                         required>
                       </input>
                   </div>

                   <div className={styles["duration2"]}>
                        <input
                          className={styles["input"]}
                          placeholder="Date"
                          name="duration1Input"
                          id="duration1Input"
                          type="date"
                          required>
                        </input>  
                   </div>
                </form>
            </div>
        )
    }
}

export default EducationalForm;