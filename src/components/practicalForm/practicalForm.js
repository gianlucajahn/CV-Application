import React from 'react';
import styles from './practicalForm.module.css';
import { ReactComponent as RemoveSVG } from '../../icons/remove.svg';
import exampleSkills from '../../utils/exampleSkills';

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
                          <div key={work.id} className={styles['work']}>
                            <div>
                              <div className={styles['headline']}>
                                <img src={require("../../icons/work.png")} className={styles['icon']} fill="currentColor" alt="Work Icon"/>
                                <h3>Work Experience #{index + 1}</h3>
                                <div className={styles['divRemove']}>

                                  {this.props.experience.length > 1 &&
                                  <button 
                                    type="button" 
                                    name="removeExperience"
                                    title="remove"
                                    aria-label="Close"
                                    id={work.id}
                                    className={styles['buttonRemove']} 
                                    onMouseEnter={this.props.handleMouse} 
                                    onMouseLeave={this.props.handleMouse}
                                    onClick={() => this.props.removeWork(index)}>
                                    <RemoveSVG 
                                      style={{ fill: this.props.experience[index].isHovered ? "#79d2b5" : "#a6a6a6" }} 
                                      className={styles['imgRemove']} alt="Remove Icon"/>
                                  </button>
                                  }
                              </div>
                              </div>
                            </div>
                            <div className={styles['company']}>
                              <input
                                className={styles['input']}
                                id={work.id}
                                onChange={this.props.handleWorkChange}
                                value={work.company}
                                placeholder=" Company"
                                name="company"
                                type="text"
                                required>
                              </input>
                            </div>
                        
                            <div className={styles['position']}>
                              <input
                                className={styles['input']}
                                id={work.id}
                                onChange={this.props.handleWorkChange}
                                value={work.position}
                                placeholder=" Your Position"
                                name="position"
                                type="text"
                                required>
                              </input>
                            </div>
                        
                            <div className={styles['task']}>
                              <textarea
                                className={styles['input']}
                                id={work.id}
                                onChange={this.props.handleWorkChange}
                                value={work.task}
                                placeholder=" Your main occupation, daily tasks and workfield"
                                name="task"
                                type="text"
                                required
                                size="20">
                              </textarea>
                            </div>
                        
                            <div className={styles['start']}>
                              <input
                                className={styles['input']}
                                id={work.id}
                                onChange={this.props.handleWorkChange}
                                value={work.start}
                                placeholder=" Start Date of employment"
                                name="start"
                                type="text"
                                required
                                size="20">
                              </input>
                            </div>
                        
                            <div className={`${this.props.experience.length < 3 ? styles.end : styles.full}`}>
                              <input
                                className={styles['input']}
                                id={work.id}
                                onChange={this.props.handleWorkChange}
                                value={work.end}
                                placeholder=" End Date of employment"
                                name="end"
                                type="text"
                                required
                                size="20">
                              </input>
                            </div>
                          </div>
                        ))}

                        {this.props.experience.length < 3 &&
                          <button type="button" className={styles['add']} onClick={this.props.addWork} aria-label="add">
                            <img src={require("../../icons/plus.png")} className={styles['imgButton']} alt="Add Icon"/>New
                          </button>
                        }

                    </div>
                    <div className={styles['skillList']}>

                      <div className={styles['headline']}>
                        <img src={require("../../icons/skills.png")} className={styles['icon']} alt="Skills Icon"/>
                        <h3>Skills & Technologies</h3>
                      </div>

                      <div className={styles['skills']}>
                      {this.props.skills.map((skill, index) => (
                        <div className={styles['skill']} key={index}>
                          <input
                            className={styles['input']}
                            placeholder={exampleSkills[index]}
                            value={skill.skill}
                            onChange={this.props.handleSkillChange}
                            name="skill"
                            id={skill.id}
                            type="text"
                            required>
                          </input>

                          
                          {this.props.skills.length > 1 &&
                            <button 
                              type="button" 
                              name="removeSkill"
                              title="remove"
                              id={skill.id}
                              className={styles['buttonRemove']} 
                              onMouseEnter={this.props.handleMouseSkills} 
                              onMouseLeave={this.props.handleMouseSkills}
                              onClick={() => this.props.removeSkill(index)}>
                                <RemoveSVG 
                                  style={{ fill: this.props.skills[index].isHovered ? "#79d2b5" : "#a6a6a6" }} 
                                  className={styles['imgRemove']}/>
                             </button>
                          }
                        </div>
                      ))}
                      </div>

                      {this.props.skills.length < 9 &&
                          <button type="button" className={styles['add']} onClick={this.props.addSkill} aria-label="Close" alt="remove">
                            <img src={require("../../icons/plus.png")} className={styles['imgButton']} alt="Add Icon"/>New
                          </button>
                      }

                    </div>
                </form>
            </div>
        )
    }
}

export default PracticalForm;