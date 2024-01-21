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
                   <h2>Educación Profesional</h2>
                   <div className={styles["university"]}>
                     <div className={styles['headline']}>
                        <img src={require("../../icons/gradcap.png")} className={styles['icon']} alt="University Icon"/>
                        <h3>Universidad</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Nombre de la universidad"
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
                         placeholder=" Titulo"
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
                          placeholder=" Otro estudio"
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
                        <h3>Educación Escolar</h3>
                      </div>
                       <input 
                          className={styles["input"]}
                          placeholder=" Nombre de la Escuela"
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
                         placeholder=" Titulo"
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
                          placeholder=" Otro Titulo"
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