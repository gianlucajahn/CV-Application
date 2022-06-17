import React from 'react';
import styles from './practicalForm.module.css';

class PracticalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className={styles['practicalForm']}>
                <h2>Practical Experience</h2>
                <form className={styles['workForm']}>
                    <div className={styles['work']}>

                        {this.props.experience.map((work, index) => (
                          <div key={index} className={styles['work']}>
                            <div className={styles['headline']}>
                              <img src={require("../../icons/work.png")} className={styles['icon']} />
                              <h3>Work Experience #{index + 1}</h3>
                            </div>
                            <div className={styles['company']}>
                              <input
                                className={styles['input']}
                                placeholder=" Company"
                                name="companyInput"
                                id="companyInput"
                                type="text"
                                required>
                              </input>
                            </div>
                        
                            <div className={styles['position']}>
                              <input
                                className={styles['input']}
                                placeholder=" Your Position"
                                name="positionInput"
                                id="positionInput"
                                type="text"
                                required>
                              </input>
                            </div>
                        
                            <div className={styles['task']}>
                              <input
                                className={styles['input']}
                                placeholder=" Your Main Tasks"
                                name="taskInput"
                                id="taskInput"
                                type="text"
                                required
                                size="20">
                              </input>
                            </div>
                        
                            <div className={styles['start']}>
                              <input
                                className={styles['input']}
                                placeholder=" Start Date of employment"
                                name="startInput"
                                id="startInput"
                                type="text"
                                required
                                size="20">
                              </input>
                            </div>
                        
                            <div className={`${this.props.experience.length < 3 ? styles.end : styles.full}`}>
                              <input
                                className={styles['input']}
                                placeholder=" End Date of employment"
                                name="endInput"
                                id="endInput"
                                type="text"
                                required
                                size="20">
                              </input>
                            </div>
                          </div>
                        ))}

                        {this.props.experience.length < 3 &&
                          <button type="button" className={styles['add']}>
                            <img src={require("../../icons/plus.png")} className={styles['imgButton']} />New
                          </button>
                        }

                    </div>
                    <div className={styles['skillList']}>

                      <div className={styles['headline']}>
                        <img src={require("../../icons/skills.png")} className={styles['icon']} />
                        <h3>Skills & Technologies</h3>
                      </div>

                      <div className={styles['skills']}>
                        <input
                          className={styles['input']}
                          placeholder=" React"
                          name="skill1Input"
                          id="skill1input"
                          type="text"
                          required>
                        </input>

                        <input
                          className={styles['input']}
                          placeholder=" Node.js"
                          name="skill2Input"
                          id="skill2input"
                          type="text"
                          required>
                        </input>

                        <input
                          className={styles['input']}
                          placeholder=" PostgreSQL"
                          name="skill3Input"
                          id="skill3input"
                          type="text"
                          required>
                        </input>
                      </div>

                      {this.props.skills.length < 8 &&
                          <button type="button" className={styles['add']}>
                            <img src={require("../../icons/plus.png")} className={styles['imgButton']} />New
                          </button>
                        }

                    </div>
                </form>
            </div>
        )
    }
}

export default PracticalForm;