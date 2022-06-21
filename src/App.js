import React from 'react';
import Form from './containers/form/form.js';
import Preview from './containers/preview/preview.js';
import styles from './App.module.css';
import uniqid from "uniqid";
import autofilledState from './utils/autofill.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      info: [
        {
          name: "firstName",
          value: "",
          id: uniqid()
        },
        {
          name: "lastName",
          value: "",
          id: uniqid()
        },
        {
          name: "address",
          value: "",
          id: uniqid()
        },
        {
          name: "website",
          value: "",
          id: uniqid()
        },
        {
          name: "email",
          value: "",
          id: uniqid()
        },
        {
          name: "phone",
          value: "",
          id: uniqid()
        },
        {
          name: "bio",
          value: "",
          id: uniqid()
        },
        {
          name: "universityName",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDegree",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDate",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolName",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolDegree",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolDate",
          value: "",
          id: uniqid()
        }
      ],

      experience: [
        { 
          isHovered: false,
          id: uniqid(),
          company: "",
          position: "",
          task: "",
          start: "",
          end: ""
        }
      ],

      newExperience: { 
        isHovered: false,
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: ""
      },

      skills: [
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        }
      ],

      newSkill: {
        isHovered: false,
        id: uniqid(),
        skill: ""
      }
    }

    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleMouseSkills = this.handleMouseSkills.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.autoFill = this.autoFill.bind(this);
  }

  addWork(e) {
    e.preventDefault();

    this.setState({
      experience: [
        ...this.state.experience, this.state.newExperience
      ],
      newExperience: {
        ...this.state.newExperience, id: uniqid()
      }
    });
  }

  addSkill(e) {
    e.preventDefault();

    this.setState({
      skills: [
        ...this.state.skills, this.state.newSkill
      ],
      newSkill: {
        ...this.state.newSkill, id: uniqid()
      }
    });
  }

  removeWork(index) {
    const list = [...this.state.experience];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, experience: list
    });
  }

  removeSkill(index) {
    const list = [...this.state.skills];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, skills: list
    });
  }

  handleMouse(e) {
    const index = this.state.experience.findIndex(work => work.id === e.target.id);
    const experience = this.state.experience.map((work, i) => {
      if (i === index) {
        work.isHovered = !work.isHovered;
        return work;
      } else {
        return work;
      }
    });

    this.setState({
      ...this.state, experience: experience
    });
  }

  handleMouseSkills(e) {
    const index = this.state.skills.findIndex(skill => skill.id === e.target.id);
    const skills = this.state.skills.map((skill, i) => {
      if (i === index) {
        skill.isHovered = !skill.isHovered;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skills: skills
    });
  }

  handleWorkChange(e) {
    const index = this.state.experience.findIndex(work => work.id === e.target.id);
    const experience = this.state.experience.map((work, i) => {
      if (i === index) {
        work[e.target.name] = e.target.value;
        return work
      } else {
        return work;
      }
    });

    this.setState({
      ...this.state, experience: experience
    });
  }

  handleSkillChange(e) {
    const index = this.state.skills.findIndex(skill => skill.id === e.target.id);
    const skills = this.state.skills.map((skill, i) => {
      if (i === index) {
        skill[e.target.name] = e.target.value;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skills: skills
    });
  }

  handleInfoChange(e) {
    const newInfo = this.state.info.map((information, i) => {
      if (information.name === e.target.name) {
        information.value = e.target.value;
        return information;
      } else {
        return information;
      }
    });

    this.setState({
      ...this.state, info: newInfo
    });
  }

  autoFill(e) {
    this.setState({
      ...this.state, 
      info: autofilledState.info,
      experience: autofilledState.experience,
      skills: autofilledState.skills
    });
  }

  render() {
    return (
      <div className={styles['body']}>
        <div className={styles['App']}>
          <Form
            autoFill={this.autoFill}
            info={this.state.info}
            experience={this.state.experience} 
            skills={this.state.skills} 
            addWork={this.addWork} 
            removeWork={this.removeWork}
            handleMouse={this.handleMouse}
            handleWorkChange={this.handleWorkChange}
            handleMouseSkills={this.handleMouseSkills}
            addSkill={this.addSkill}
            removeSkill={this.removeSkill}
            handleSkillChange={this.handleSkillChange}
            handleInfoChange={this.handleInfoChange} />
          <Preview 
            info={this.state.info}
            experience={this.state.experience}
            skills={this.state.skills} />
        </div>
      </div>
    )
  }
}

export default App;
