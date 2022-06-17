import React from 'react';
import Form from './containers/form/form.js';
import Preview from './containers/preview/preview.js';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        { work: [] }
      ],
      skills: [
        { skill: [] }
      ]
    }

    this.addWork = this.addWork.bind(this);
  }

  addWork(e) {
    e.preventDefault();


  }

  render() {
    return (
      <div className={styles['body']}>
        <div className={styles['App']}>
          <Form experience={this.state.experience} skills={this.state.skills}/>
          <Preview />
        </div>
      </div>
    )
  }
}

export default App;
