import React from 'react';
import Form from './containers/form/form.js';
import Preview from './containers/preview/preview.js';
import styles from './App.module.css';
import uniqid from "uniqid";
import autofilledState from './utils/autofill.js';
import MobileToggle from './components/MobileToggle/MobileToggle.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // State for all of the user's personal and educational information
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

      // State Array to hold Objects resembling work experience of the user
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

      // A new Object that's getting added towards the experience state array on every click of the "add" button
      newExperience: { 
        isHovered: false,
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: ""
      },

      // State Array to hold Objects resembling skills of the user
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

      // A new Object that's getting added towards the skills state array on every click of the "add" button
      newSkill: {
        isHovered: false,
        id: uniqid(),
        skill: ""
      },

      // Object to hold a boolean value, determining if the form (or the preview, if formIsOpen: false) is supposed to be rendered in mobile view.
      mobile: {
        formIsOpen: true
      }
    }

    // Binding "this" to the 'App' Component for all of the component's functionality
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
    this.handleToggle = this.handleToggle.bind(this);
    this.printDocument = this.printDocument.bind(this);
  }

  // Toggling between the "form" and "preview" in mobile view
  handleToggle(e) {
    let newMobileState = this.state.mobile;
    newMobileState.formIsOpen = !newMobileState.formIsOpen;

    this.setState({
      ...this.state,
      mobile: newMobileState
    })
  }

  // Adding a work object to the experience state array
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

    // Adding a skill object to the skills state array
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

    // Removing a work object from the experience state array
  removeWork(index) {
    const list = [...this.state.experience];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, experience: list
    });
  }

  // Removing a skill object from the skills state array
  removeSkill(index) {
    const list = [...this.state.skills];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, skills: list
    });
  }

  // Recolouring SVGs (with the "fill:" property) on hover
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

    // Recolouring SVGs (with the "fill:" property) on hover
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

  // Handling edits for input fields that control the experience state
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

  // Handling edits for input fields that control the skills state
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

  // Handling edits for input fields that control info state
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

  // Changing values of all keys in the state that keep user data, automatically rendering an autofilled CV due to
  // the fact that the CV takes key-value pairs from the state as values.
  autoFill(e) {
    this.setState({
      ...this.state, 
      info: autofilledState.info,
      experience: autofilledState.experience,
      skills: autofilledState.skills
    });
  }

  // Save Preview CV in a PDF file
  printDocument() {
    const input = document.getElementById('preview');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        // Make img fit to PDF proportions
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Download PDF to user
        pdf.save("resume.pdf");
      })
    ;
  }

  // App's render function
  render() {
    return (
      <div className={styles['body']}>
        <div className={styles['App']}>
          <Form
            printDocument={this.printDocument}
            state={this.state}
            mobile={this.state.mobile}
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
            mobile={this.state.mobile}
            info={this.state.info}
            experience={this.state.experience}
            skills={this.state.skills} />
        </div>
        <MobileToggle 
            handleToggle={this.handleToggle}
            mobile={this.state.mobile} />
      </div>
    )
  }
}

export default App;
